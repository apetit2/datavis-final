import { ScaleLinear } from 'd3';
import { currencyFormatter } from '../../util/currency';

export interface AxisBottom {
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  width: number;
  height: number;
  tickOffset?: number;
  isDollarValue?: boolean;
}

export const AxisBottom: React.FC<AxisBottom> = ({
  xScale,
  yScale,
  width,
  height,
  tickOffset = 3,
  isDollarValue = false,
}) => {
  return (
    <>
      {xScale.ticks().map((tick) => (
        <g
          style={{ stroke: '#C0C0BB' }}
          key={tick}
          transform={`translate(0, ${yScale.range()[0] / 2})`}
        >
          <line x1={0} x2={width} />
          <line
            y1={-tickOffset}
            y2={tickOffset}
            x1={xScale(tick)}
            x2={xScale(tick)}
          />
          <text dy=".71em" textAnchor="middle" y={tickOffset} x={xScale(tick)}>
            {isDollarValue ? currencyFormatter.format(tick) : `${tick}%`}
          </text>

          {tick === 30 && (
            <line
              y1={height - 120}
              y2={-(height - 120)}
              x1={xScale(tick)}
              x2={xScale(tick)}
              stroke="red"
            />
          )}
        </g>
      ))}
    </>
  );
};
