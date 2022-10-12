import React from "react";
import "./TaskListHeader.css";

export const TaskListHeader: React.FC<{
    headerHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
}> = ({ headerHeight, rowWidth }) => {
    return (
        <div>
            <div
                className="task-list-header"
                style={{
                    height: headerHeight,
                    minWidth: rowWidth
                }}
            />
            <div className="task-list-header__separator" />
        </div>
    );
};
