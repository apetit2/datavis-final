// TODO: this needs to be broken down into many parts

import {
  GeospatialChart,
  YearSelector,
} from '../../components/GeospatialChart';
import { Button, Col, Divider, Row, Select, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { Constants } from './constants';
import {
  MinimumWage,
  MinimumWageCols,
} from '../../services/models/minimumWage';
import { PageLayout } from '../../layout/PageLayout';
import { useFallback } from '../../hooks/useFallback';
import { useIncrementYear } from '../../hooks/useIncrementYear';
import {
  useMinimumWageQuery,
  useUSMapQuery,
} from '../../services/hooks/useQuery';
import { useMemo, useState } from 'react';
import { currencyFormatter } from '../../util/currency';
import { LineChart, LineChartAxes } from '../../components/LineChart';
import { DSVParsedArray } from 'd3';
import { ScatterPlot } from '../../components/ScatterPlot';
import { convertStateToAbbreviation } from '../../util/convertStateToAbbreviation';
import { KeysMatching } from '../../types/shared';

export interface FinalVisPageProps {}

const { Text } = Typography;

const generateScatterPlotXAxisText = (
  val:
    | 'twoBedroomPercentOfRent'
    | 'studioPercentOfRent'
    | 'oneBedroomPercentOfRent'
    | 'threeBedroomPercentOfRent'
    | 'fourBedroomPercentOfRent'
) => {
  switch (val) {
    case 'studioPercentOfRent':
      return 'Studio';
    case 'oneBedroomPercentOfRent':
      return 'One Bedroom Apartment';
    case 'twoBedroomPercentOfRent':
      return 'Two Bedroom Apartment';
    case 'threeBedroomPercentOfRent':
      return 'Three Bedroom Apartment';
    case 'fourBedroomPercentOfRent':
      return 'Four Bedroom Apartment';
    default:
      return '';
  }
};

export const FinalVisPage: React.FC<FinalVisPageProps> = () => {
  const { data, isError, isLoading } = useMinimumWageQuery();

  const {
    data: usMap,
    isError: isUSMapError,
    isLoading: isLoadingUSMap,
  } = useUSMapQuery();

  const minYear = data?.[0].year || 1968;
  const maxYear = data?.[data.length - 1]?.year || 2020;

  const minScatterPlotYear = 2001;
  const maxScatterPlotYear = 2020;

  const [shouldDisableAutoIncrement, setShouldDisableAutoIncrementYear] =
    useState(true);
  const [
    shouldDisableScatterPlotAutoIncrement,
    setShouldDisableScatterPlotAutoIncrement,
  ] = useState(true);
  const [selectedYear, setSelectedYear] = useState(minYear);
  const [selectedScatterPlotYear, setSelectedScatterPlotYear] =
    useState(minScatterPlotYear);
  const [selectedState, setSelectedState] = useState('all');
  const [selectedRent, setSelectedRent] = useState<
    | 'twoBedroomPercentOfRent'
    | 'studioPercentOfRent'
    | 'oneBedroomPercentOfRent'
    | 'threeBedroomPercentOfRent'
    | 'fourBedroomPercentOfRent'
  >('twoBedroomPercentOfRent');

  // line chart
  const [lineGraphX, setLineGraphX] =
    useState<KeysMatching<MinimumWage, number | undefined>>('year');
  const [lineGraphY, setLineGraphY] = useState<
    KeysMatching<MinimumWage, number | undefined>
  >('effectiveMinWageTodayDollars');

  const filteredData = useMemo(() => {
    return data?.filter(
      (row) => row.studio && row.year === selectedScatterPlotYear
    ) as DSVParsedArray<MinimumWage> | undefined;
  }, [data, selectedScatterPlotYear]);

  const { fallback } = useFallback(
    isLoading || isLoadingUSMap,
    isError || isUSMapError,
    Boolean(data && usMap)
  );

  useIncrementYear(
    maxYear,
    minYear,
    !shouldDisableAutoIncrement,
    selectedYear || 1968,
    setSelectedYear
  );

  useIncrementYear(
    maxScatterPlotYear,
    minScatterPlotYear,
    !shouldDisableScatterPlotAutoIncrement,
    selectedScatterPlotYear,
    setSelectedScatterPlotYear
  );

  const xAxisLabel = `${generateScatterPlotXAxisText(
    selectedRent
  )} Cost as a Percent of Earnings`;
  const yAxisLabel = 'Minimum Wage ($/hour)';

  if (fallback || !data || !usMap || !filteredData) {
    return fallback;
  }

  const description = (
    <Space direction="vertical">
      <Divider />
      <Text strong style={{ fontSize: 24 }}>
        Description
      </Text>
      <Text>
        A geospatial chart depicting effective minimum wage data for all U.S
        states and territories since 1968. It visualizes data supplied by the
        U.S Department of Labor. All data can be found in the{' '}
        <Link to={{ pathname: Constants.minWageUrl }} target="_blank">
          Minimum Wage Dataset
        </Link>
        .
      </Text>
      <ul>
        <li>Dollar amounts shown are in 2020 dollars.</li>
        <li>Darker state colors represent higher minimum wages.</li>
      </ul>
      <Divider />
      <Text strong style={{ fontSize: 24 }}>
        What&apos;s New
      </Text>
      <ul>
        <li>Toggle that automates incrementing year</li>
        <li>Legend showing what colors represent on the geospatial chart</li>
        <li>
          When hovering on a state, show the effective minimum wage for that
          state in a box below the chart
        </li>
        <li>Zoom and pan functionality is working.</li>
      </ul>
      <Divider />
      <Text strong style={{ fontSize: 24 }}>
        Still To Do
      </Text>
      <ul>
        <li>
          For smaller screen sizes, figure out why the chart does not center
          properly on load
        </li>
        <li>
          Implement an actual tooltip that appears when hovering on a state
        </li>
      </ul>
    </Space>
  );

  return (
    <PageLayout
      pageTitle="Final Visualization Project"
      description={description}
      showDescriptionTitle={false}
      generateChart={({ width }) => (
        <>
          <Row justify="space-between" style={{ width }}>
            <Col style={{ width: '30%', display: 'block', margin: 'auto' }}>
              <YearSelector
                defaultYear={selectedYear}
                minYear={minYear}
                maxYear={maxYear}
                incrementYearDisabled={shouldDisableAutoIncrement}
                toggleIncrementYear={setShouldDisableAutoIncrementYear}
                onChange={setSelectedYear}
              />
            </Col>
            <Col style={{ width: '50%' }}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Space
                  direction="horizontal"
                  size="small"
                  style={{
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingLeft: '50%',
                  }}
                >
                  <Text strong style={{ fontSize: 24 }}>
                    {selectedState !== 'all' ? selectedState : 'All States'}
                  </Text>
                  <Button
                    type="ghost"
                    onClick={() => setSelectedState('all')}
                    disabled={selectedState === 'all'}
                  >
                    Reset
                  </Button>
                </Space>
                <LineChartAxes<MinimumWage>
                  selectedX={lineGraphX}
                  selectedY={lineGraphY}
                  onSelectX={setLineGraphX}
                  onSelectY={setLineGraphY}
                  data={data}
                  labels={MinimumWageCols}
                  style={{ paddingLeft: '25%', width: '100%' }}
                />
              </Space>
            </Col>
          </Row>
          <Row style={{ width }}>
            <Col flex={1}>
              <GeospatialChart<MinimumWage>
                width={width / 2}
                height={400}
                rows={data}
                data={usMap}
                timeField="year"
                stateField="state"
                colorRepresentation="effectiveMinWageTodayDollars"
                chosenTimeField={selectedYear}
                onClick={(_, state) => setSelectedState(state)}
                chosenState={selectedState}
                showLegend
                renderToolTip={(state, minWage) => (
                  <Space direction="vertical">
                    <Text style={{ color: 'white' }}>State: {state}</Text>
                    <Text style={{ color: 'white' }}>
                      Effective Minimum Wage:{' '}
                      {currencyFormatter.format(minWage)}
                    </Text>
                  </Space>
                )}
              />
            </Col>
            <Col flex={1}>
              <LineChart<MinimumWage>
                width={width / 2}
                height={400}
                margin={{ top: 30, right: 30, bottom: 50, left: 0 }}
                data={data}
                xLabel={MinimumWageCols[lineGraphX]}
                yLabel={MinimumWageCols[lineGraphY]}
                x={lineGraphX}
                y={lineGraphY}
                focusable={false}
                grouping="state"
                cords={
                  selectedState !== 'all' &&
                  lineGraphX === 'year' &&
                  lineGraphY === 'effectiveMinWageTodayDollars'
                    ? [
                        {
                          x: selectedYear,
                          y:
                            data.find(
                              (wage) =>
                                wage.year === selectedYear &&
                                wage.state?.toLowerCase() ===
                                  selectedState.toLowerCase()
                            )?.effectiveMinWageTodayDollars ?? 0,
                        },
                      ]
                    : undefined
                }
                filter={
                  selectedState !== 'all'
                    ? (row) => row.state === selectedState
                    : undefined
                }
                opacity=".4"
                strokeWidth={3}
                stroke={selectedState !== 'all' ? 'blue' : undefined}
                renderToolTip={(minWage) => (
                  <Space direction="vertical">
                    <Text style={{ color: 'white' }}>
                      State: {minWage?.state ?? ''}
                    </Text>
                  </Space>
                )}
              />
            </Col>
          </Row>
          <Divider />
          <Row style={{ width }} justify="space-around">
            <Col style={{ width: '45%' }}>
              <YearSelector
                defaultYear={selectedScatterPlotYear}
                minYear={minScatterPlotYear}
                maxYear={maxScatterPlotYear}
                incrementYearDisabled={shouldDisableScatterPlotAutoIncrement}
                toggleIncrementYear={setShouldDisableScatterPlotAutoIncrement}
                onChange={setSelectedScatterPlotYear}
              />
            </Col>
            <Col style={{ width: '45%' }}>
              <Select
                style={{ width: '100%' }}
                value={selectedRent}
                onChange={(val) => setSelectedRent(val)}
              >
                <Select.Option value="studioPercentOfRent">
                  Studio
                </Select.Option>
                <Select.Option value="oneBedroomPercentOfRent">
                  One Bedroom
                </Select.Option>
                <Select.Option value="twoBedroomPercentOfRent">
                  Two Bedroom
                </Select.Option>
                <Select.Option value="threeBedroomPercentOfRent">
                  Three Bedroom
                </Select.Option>
                <Select.Option value="fourBedroomPercentOfRent">
                  Four Bedroom
                </Select.Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ width }}>
            <Col flex="1">
              <ScatterPlot<MinimumWage>
                width={width}
                height={400}
                margin={{ top: 50, right: 30, bottom: 70, left: 0 }}
                data={filteredData}
                xLabel={xAxisLabel}
                yLabel={yAxisLabel}
                x={selectedRent}
                y="stateMinWageTodayDollars"
                color="state"
                radius={12}
                opacity="0.4"
                circleText={(state) => convertStateToAbbreviation(state)}
                renderToolTip={(row, state) => (
                  <Space direction="vertical">
                    <Text style={{ color: 'white' }}>State: {state}</Text>
                    <Text style={{ color: 'white' }}>
                      Rent Cost:{' '}
                      {currencyFormatter.format(row?.twoBedroom ?? 0)}
                    </Text>
                    <Text style={{ color: 'white' }}>
                      Effective Minimum Wage:{' '}
                      {currencyFormatter.format(
                        row?.effectiveMinWageTodayDollars ?? 0
                      )}
                    </Text>
                  </Space>
                )}
              />
            </Col>
          </Row>
        </>
      )}
    />
  );
};
