import './GeospatialChart.css';

import { DSVParsedArray, geoAlbersUsa, geoPath } from 'd3';
import { MouseEvent, useEffect, useState, ReactElement } from 'react';

import { ChartLegend } from './ChartLegend';
import { CSVRow } from '../../services/models/shared';
import { KeysMatching } from '../../types/shared';
import ReactTooltip from 'react-tooltip';
import { USMap } from '../../services/models/maps';
import { feature } from 'topojson-client';
import { useGeospatialChart } from './hooks/useGeospatialChart';
import { usePanAndZoom } from './hooks/usePanAndZoom';
import { Col, Row } from 'antd';

export interface GeospatialChartProps<T extends CSVRow> {
  width: number;
  height: number;
  rows: DSVParsedArray<CSVRow>;
  timeField: KeysMatching<T, number | undefined>;
  stateField: KeysMatching<T, string | undefined>;
  colorRepresentation: KeysMatching<T, number | undefined>;
  chosenTimeField: number;
  data: USMap;
  chosenState?: string;
  showLegend?: boolean;
  onMouseOver?: (event: MouseEvent<SVGPathElement>, state: string) => void;
  onClick?: (event: MouseEvent<SVGPathElement>, state: string) => void;
  renderToolTip?: (state: string, fieldValue: number) => ReactElement;
}

export const GeospatialChart = <T extends CSVRow>({
  width,
  height,
  rows,
  timeField,
  stateField,
  data,
  colorRepresentation,
  chosenTimeField,
  chosenState,
  showLegend = false,
  onMouseOver,
  onClick,
  renderToolTip,
}: GeospatialChartProps<T>) => {
  const [ref, setRef] = useState<SVGSVGElement | null>(null);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  usePanAndZoom(ref, height, width);
  const { findFieldByStateOrDefault } = useGeospatialChart(
    rows,
    timeField as string,
    stateField as string,
    colorRepresentation as string,
    chosenTimeField
  );

  const generateScale = () => {
    if (width / 1.3 > 800) {
      return 800;
    }

    return width / 1.3;
  };

  const usData = data as USMap;
  const projection = geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale(generateScale());
  const path = geoPath().projection(projection);
  const { features } = feature(usData, usData.objects.states);

  return (
    <>
      <svg height={height} width={width} ref={setRef}>
        <g id="states">
          {features.map((value) => (
            <path
              data-event="mouseover"
              data-event-off="mouseout"
              data-tip={value.properties.name}
              data-for="states-tooltip"
              className={
                chosenState === value.properties.name
                  ? 'state clicked'
                  : 'state'
              }
              d={path(value) as string}
              stroke="black"
              strokeWidth={0.5}
              key={`${value.properties.name}`}
              onClick={(event) => {
                if (onClick) {
                  onClick(event, value.properties.name);
                }
              }}
              onMouseOver={
                onMouseOver
                  ? (event) => onMouseOver(event, value.properties.name)
                  : undefined
              }
              fill={findFieldByStateOrDefault<string>(
                value.properties.name,
                'color',
                'green'
              )}
            />
          ))}
        </g>
      </svg>
      {renderToolTip && (
        <ReactTooltip
          id="states-tooltip"
          getContent={(state) => {
            const fieldValue = findFieldByStateOrDefault<number>(
              state,
              'value',
              0
            );
            return renderToolTip(state, fieldValue);
          }}
        />
      )}
      {showLegend && (
        <Row style={{ width }} justify="center">
          <Col>
            <ChartLegend<T>
              timeField={timeField}
              stateField={stateField}
              colorRepresentation={colorRepresentation}
              chosenTimeField={chosenTimeField}
              rows={rows}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
