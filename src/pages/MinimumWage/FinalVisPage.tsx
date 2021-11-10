import {
  GeospatialChart,
  YearSelector,
} from '../../components/GeospatialChart';
import { Col, Divider, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { Constants } from './constants';
import { MinimumWage } from '../../services/models/minimumWage';
import { PageLayout } from '../../layout/PageLayout';
import { useFallback } from '../../hooks/useFallback';
import { useIncrementYear } from '../../hooks/useIncrementYear';
import { useMinimumWageQuery } from '../../services/hooks/useQuery';
import { useMemo, useState } from 'react';
import { currencyFormatter } from '../../util/currency';
import { LineChart } from '../../components/LineChart';
import { DSVParsedArray } from 'd3';
import { ScatterPlot } from '../../components/ScatterPlot';
import { convertStateToAbbreviation } from '../../util/convertStateToAbbreviation';

export interface FinalVisPageProps {}

const { Text } = Typography;

export const FinalVisPage: React.FC<FinalVisPageProps> = () => {
  const { data, isError, isLoading } = useMinimumWageQuery();

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
  const [selectedState, setSelectedState] = useState<string>('all');

  const filteredData = useMemo(() => {
    return data?.filter(
      (row) => row.studio && row.year === selectedScatterPlotYear
    ) as DSVParsedArray<MinimumWage> | undefined;
  }, [data, selectedScatterPlotYear]);

  const { fallback } = useFallback<MinimumWage>(isLoading, isError, data);

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

  const xAxisLabel = 'Two Bedroom Apartment Cost ($)';
  const yAxisLabel = 'Minimum Wage ($/hour)';

  if (fallback || !data || !filteredData) {
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
      pageTitle="Minimum Wage Geospatial Chart"
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
            <Col style={{ textAlign: 'center', width: '50%' }}>
              <Text strong style={{ fontSize: 24 }}>
                {selectedState !== 'all' ? selectedState : 'All States'}
              </Text>
            </Col>
          </Row>
          <Row style={{ width }}>
            <Col flex={1}>
              <GeospatialChart<MinimumWage>
                width={width / 2}
                height={400}
                rows={data}
                timeField="year"
                stateField="state"
                colorRepresentation="effectiveMinWageTodayDollars"
                chosenTimeField={selectedYear}
                onClick={(_, state) => setSelectedState(state)}
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
                xLabel="Year"
                yLabel="Effective Minimum Wage ($)"
                x="year"
                y="effectiveMinWageTodayDollars"
                grouping="state"
                cords={
                  selectedState !== 'all'
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
              />
            </Col>
          </Row>
          <Divider />
          <Row style={{ width }} justify="center">
            <Col style={{ width: '30%' }}>
              <YearSelector
                defaultYear={selectedScatterPlotYear}
                minYear={minScatterPlotYear}
                maxYear={maxScatterPlotYear}
                incrementYearDisabled={shouldDisableScatterPlotAutoIncrement}
                toggleIncrementYear={setShouldDisableScatterPlotAutoIncrement}
                onChange={setSelectedScatterPlotYear}
              />
            </Col>
          </Row>
          <Row style={{ width }}>
            <Col flex="1">
              <ScatterPlot<MinimumWage>
                width={width}
                height={400}
                margin={{ top: 30, right: 30, bottom: 60, left: 0 }}
                data={filteredData}
                xLabel={xAxisLabel}
                yLabel={yAxisLabel}
                x="twoBedroom"
                y="stateMinWageTodayDollars"
                color="state"
                radius={12}
                isXAxisDollarValue
                isYAxisDollarValue
                opacity="0.4"
                circleText={(state) => convertStateToAbbreviation(state)}
                renderToolTip={(x, y, state) => (
                  <Space direction="vertical">
                    <Text style={{ color: 'white' }}>State: {state}</Text>
                    <Text style={{ color: 'white' }}>
                      Rent Cost: {currencyFormatter.format(x)}
                    </Text>
                    <Text style={{ color: 'white' }}>
                      Effective Minimum Wage: {currencyFormatter.format(y)}
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
