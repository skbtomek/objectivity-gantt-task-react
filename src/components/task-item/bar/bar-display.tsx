import React from "react";

type BarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected: boolean;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    icon?: string;
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  width,
  barCornerRadius,
  height,
  isSelected,
  styles,
  onMouseDown,
}) => {
  const getBarColor = () => {
    return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };

  return (
    <g onMouseDown={onMouseDown}>
      {styles.icon ?
        <text
          x={x}
          y={y + (height / 2)}
          fontWeight="bold"
          fontSize="1.5em"
          alignmentBaseline="middle"
          fill={getBarColor()}>
          {styles.icon}
        </text> :
        <rect
          x={x}
          width={width}
          y={y}
          height={height}
          ry={barCornerRadius}
          rx={barCornerRadius}
          fill={getBarColor()}
        />}

    </g>
  );
};
