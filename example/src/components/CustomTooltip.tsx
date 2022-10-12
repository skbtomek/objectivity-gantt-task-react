import React from "react";
import { Task } from "objectivity-gantt-task-react";
import "./CustomTooltip.css";

export const TooltipContent: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
}> = ({ task, fontSize, fontFamily }) => {
    const style = {
        fontSize,
        fontFamily
    };
    return (
        <div style={style}>
            {task.additionalInfo && <p className="tooltipParagraph">{task.additionalInfo}</p>}
            <p className="tooltipParagraph">{task.name}</p>
            <div>
                <p style={{ fontSize: fontSize + 6 }}>
                    {task.start === task.end
                        ? task.start.toLocaleDateString("en-GB")
                        : `${task.start.toLocaleDateString("en-GB")} - ${task.end.toLocaleDateString("en-GB")}`}
                </p>
            </div>
        </div>
    );
};
