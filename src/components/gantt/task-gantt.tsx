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

  const gridElement = document.querySelector("#gantt-main-container") as HTMLElement;
  const isGridVisibleByUser = gridElement && isElementVisibleByUser(document, window, gridElement);

  useEffect(() => {
    if (scrollContainerRef.current && isGridVisibleByUser) {
      const centeredTodayX = getCenteredTodayX();
      if (centeredTodayX) {
        scrollContainerRef.current.scrollTo(centeredTodayX, 0);
      }
    }
  }, [gridProps.svgWidth, isGridVisibleByUser]);  

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

function getCenteredTodayX() {
  const todaySvgRect = document.querySelector(".grid .gridBody .today rect");
  const todayX = todaySvgRect?.getAttribute("x");
  if (todayX) {
    let centeredToday = +todayX;
    const todayWidth = todaySvgRect?.getAttribute("width");
    if (todayWidth) {
      centeredToday += +todayWidth / 2;
    }
    return centeredToday;
  }
  return undefined;
}

export function isElementVisibleByUser(
  dynamicDocument: Document,
  dynamicWindow: Window,
  element: HTMLElement
): boolean {
  const style: CSSStyleDeclaration = getComputedStyle(element);
  if (style.display === "none") {
    return false;
  }
  if (style.visibility && style.visibility !== "visible") {
    return false;
  }
  if (style.opacity && Number(style.opacity) < 0.1) {
    return false;
  }
  const rect = element.getBoundingClientRect();
  if (Math.round(element.offsetWidth + element.offsetHeight + rect.height + rect.width) === 0) {
    return false;
  }
  const elementCenter = {
    x: Math.round(rect.left + element.offsetWidth / 2),
    y: Math.round(rect.top + element.offsetHeight / 2)
  };
  if (!elementCenter.x || !elementCenter.y) {
    return false;
  }
  if (elementCenter.x < 0) {
    return false;
  }
  if (
    elementCenter.x >
    (dynamicDocument.documentElement.clientWidth || dynamicWindow.document.documentElement.clientWidth)
  ) {
    return false;
  }
  if (elementCenter.y < 0) {
    return false;
  }
  if (
    elementCenter.y >
    (dynamicDocument.documentElement.clientHeight || dynamicWindow.document.documentElement.clientHeight)
  ) {
    return false;
  }
  let pointContainer: Element | null = dynamicDocument.elementFromPoint(elementCenter.x, elementCenter.y);
  if (pointContainer) {
    do {
      if (pointContainer === element) {
        return true;
      } else {
        pointContainer = pointContainer.parentElement as HTMLElement;
      }
    } while (pointContainer.parentElement);
  }
  return false;
}
