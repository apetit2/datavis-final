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
  const firstTick = xScale.ticks()[0];
  const hasThirty = xScale.ticks().find((tick) => tick >= 30);

  return (
    <>
      <defs>
        <linearGradient id="Gradient-1" x1="3%" y1="4%" x2="6%" y2="6%">
          <stop offset="0%" stopColor="red" />
          <stop offset="50%" stopColor="white" />
        </linearGradient>

        <linearGradient
          id="repeat"
          xlinkHref="#Gradient-1"
          spreadMethod="repeat"
        />

        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill={firstTick >= 30 ? 'red' : '#C0C0BB'}
          />
        </marker>
      </defs>
      <g>
        <line
          y1={height / 2}
          y2={height}
          stroke={firstTick >= 30 ? 'red' : '#C0C0BB'}
          markerEnd="url(#arrowhead)"
        />
        <text
          x="0"
          y="-4%"
          textAnchor="middle"
          stroke={firstTick >= 30 ? 'red' : '#C0C0BB'}
        >
          higher wage
        </text>
      </g>
      <g>
        <line
          y1={height / 2}
          y2={0}
          stroke={firstTick >= 30 ? 'red' : '#C0C0BB'}
          markerEnd="url(#arrowhead)"
        />
        <text
          x="0"
          y="76%"
          textAnchor="middle"
          stroke={firstTick >= 30 ? 'red' : '#C0C0BB'}
        >
          lower wage
        </text>
      </g>

      {hasThirty && (
        <polygon
          points={`${xScale(
            firstTick > 30 ? firstTick : 30
          )},${height} ${width},${height} ${width},0 ${xScale(
            firstTick > 30 ? firstTick : 30
          )},0`}
          fill="url(#repeat)"
          stroke="red"
          strokeWidth="2px"
        />
      )}

      {xScale.ticks().map((tick, index) => (
        <>
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
              stroke={tick >= 30 && index === 0 ? 'red' : '#C0C0BB'}
            />
            <text
              dy=".71em"
              textAnchor="middle"
              y={tickOffset}
              x={xScale(tick)}
              stroke={tick >= 30 && index === 0 ? 'red' : '#C0C0BB'}
            >
              {isDollarValue ? currencyFormatter.format(tick) : `${tick}%`}
            </text>

            {tick === 30 && index > 0 && (
              <line
                y1={height - 140}
                y2={-(height - 140)}
                x1={xScale(tick)}
                x2={xScale(tick)}
                stroke="red"
              />
            )}
          </g>
        </>
      ))}
    </>
  );
};
