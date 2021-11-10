import { ScaleLinear } from 'd3';
import { currencyFormatter } from '../../util/currency';

export interface AxisLeftProps {
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  height: number;
  tickOffset?: number;
  isDollarValue?: boolean;
}

export const AxisLeft: React.FC<AxisLeftProps> = ({
  xScale,
  yScale,
  height,
  tickOffset = 3,
  isDollarValue = false,
}) => {
  const reversed = yScale.ticks().slice().reverse();

  return (
    <>
      {reversed.map((tick) => (
        <g
          key={tick}
          style={{ stroke: '#C0C0BB' }}
          transform={`translate(${xScale.range()[1] / 2}, 0)`}
        >
          <line y1={0} y2={height} />
          <line
            x1={-tickOffset}
            x2={tickOffset}
            y1={yScale(tick)}
            y2={yScale(tick)}
          />
          <text textAnchor="end" x={-tickOffset} y={yScale(tick)} dy=".32em">
            {isDollarValue ? currencyFormatter.format(tick) : tick}
          </text>
        </g>
      ))}
    </>
  );
};
