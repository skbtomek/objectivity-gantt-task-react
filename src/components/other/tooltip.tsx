import React from "react";
import ReactTooltip from "react-tooltip";
import { Task } from "../../types/public-types";
import { BarTask } from "../../types/bar-task";
import styles from "./tooltip.module.css";

export type TooltipProps = {
  task: BarTask;  
  fontSize: string;
  fontFamily: string;
  TooltipContent: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
  }>;
};
export const Tooltip: React.FC<TooltipProps> = ({
  task,
  fontSize,
  fontFamily,
  TooltipContent,
}) => {

  return (  
      <ReactTooltip id={task.id}>
        <TooltipContent task={task} fontSize={fontSize} fontFamily={fontFamily} />
      </ReactTooltip>
  );
};

export const StandardTooltipContent: React.FC<{
  task: Task;
  fontSize: string;
  fontFamily: string;
}> = ({ task, fontSize, fontFamily }) => {
  const style = {
    fontSize,
    fontFamily,
  };
  return (
    <div style={style}>
      <b style={{ fontSize: fontSize + 6 }}>{`${task.name
        }: ${task.start.getDate()}-${task.start.getMonth() + 1
        }-${task.start.getFullYear()} - ${task.end.getDate()}-${task.end.getMonth() + 1
        }-${task.end.getFullYear()}`}</b>
      {task.end.getTime() - task.start.getTime() !== 0 && (
        <div className={styles.info}>{`Duration: ${~~(
          (task.end.getTime() - task.start.getTime()) /
          (1000 * 60 * 60 * 24)
        )} day(s)`}</div>
      )}

      <div className={styles.info}>
        {!!task.progress && `Progress: ${task.progress} %`}
      </div>
    </div>
  );
};
