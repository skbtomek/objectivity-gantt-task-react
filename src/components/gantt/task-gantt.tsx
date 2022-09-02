import React, { useEffect, useRef } from "react";
import { GridProps, Grid } from "../grid/grid";
import { CalendarProps, Calendar } from "../calendar/calendar";
import { TaskGanttContentProps, TaskGanttContent } from "./task-gantt-content";
import styles from "./gantt.module.css";
import ScrollContainer from "react-indiana-drag-scroll";

export type TaskGanttProps = {
  gridProps: GridProps;
  calendarProps: CalendarProps;
  barProps: TaskGanttContentProps;
  ganttHeight: number;
};
export const TaskGantt: React.FC<TaskGanttProps> = ({
  gridProps,
  calendarProps,
  barProps,
  ganttHeight,
}) => {
  const ganttSVGRef = useRef<SVGSVGElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const verticalGanttContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef <HTMLElement>(null);
  const newBarProps = { ...barProps, svg: ganttSVGRef };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const centeredTodayX = getCenteredTodayX(scrollContainerRef.current.offsetWidth);
      if (centeredTodayX) {
        scrollContainerRef.current.scrollTo(centeredTodayX, 0);
      }
    }
  }, [gridProps.svgWidth]);  

  return (
    <div
      className={styles.ganttVerticalContainer}
      ref={verticalGanttContainerRef}
      dir="ltr"
    >
      <ScrollContainer hideScrollbars={false} innerRef={scrollContainerRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={gridProps.svgWidth}
          height={calendarProps.headerHeight}
          fontFamily={barProps.fontFamily}
        >
          <Calendar {...calendarProps} />
        </svg>
        <div
          ref={horizontalContainerRef}
          className={styles.horizontalContainer}
          style={
            ganttHeight
              ? { height: ganttHeight, width: gridProps.svgWidth }
              : { width: gridProps.svgWidth }
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={gridProps.svgWidth}
            height={barProps.rowHeight * barProps.tasks.length}
            fontFamily={barProps.fontFamily}
            ref={ganttSVGRef}
          >
            <Grid {...gridProps} />
            <TaskGanttContent {...newBarProps} />
          </svg>
        </div>
      </ScrollContainer>
    </div>
  );
};

function getCenteredTodayX(scrollContainerWidth: number) {
  const todaySvgRect = document.querySelector(".grid .gridBody .today rect");
  const todayX = todaySvgRect?.getAttribute("x");
  if (todayX) {
    let centeredToday = +todayX - scrollContainerWidth / 2;
    const todayWidth = todaySvgRect?.getAttribute("width");
    if (todayWidth) {
      centeredToday += +todayWidth / 2;
    }
    return centeredToday >= 0 ? centeredToday : undefined;
  }
  return undefined;
}
