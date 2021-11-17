import { ScaleLinear } from 'd3';

export interface AxisLeftProps {
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  height: number;
  tickOffset?: number;
  isDollarValue?: boolean;
}

export const AxisLeft: React.FC<AxisLeftProps> = ({ height }) => {
  return (
    <>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#C0C0BB" />
        </marker>
      </defs>
      <g>
        <line
          y1={height / 2}
          y2={0}
          stroke="#C0C0BB"
          markerEnd="url(#arrowhead)"
        />
        <text x="0" y="-10%" textAnchor="middle">
          higher wage
        </text>
      </g>
      <g>
        <line
          y1={height / 2}
          y2={height}
          stroke="#C0C0BB"
          markerEnd="url(#arrowhead)"
        />
        <text x="0" y="85%" textAnchor="middle">
          lower wage
        </text>
      </g>
    </>
  );
};
