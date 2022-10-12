import { Task } from "objectivity-gantt-task-react";
import React from "react";
import "./TaskListTable.css";

export const TaskListTable: React.FC<{
    rowHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
    locale: string;
    tasks: Task[];
    selectedTaskId: string;
    setSelectedTask: (taskId: string) => void;
    onExpanderClick: (task: Task) => void;
}> = ({ rowHeight, tasks, onExpanderClick }) => {
    return (
        <div className="taskListWrapper">
            {tasks.map(t => {
                let expanderSymbol = "";
                if (t.hideChildren === false) {
                    expanderSymbol = "▼";
                } else if (t.hideChildren === true) {
                    expanderSymbol = "▶";
                }

                const isRegulation = t.type === "project" && t.project === undefined;
                const isParentalGroup = t.type === "project" && !isRegulation;

                if (isRegulation) {
                    return (
                        <Regulation
                            rowHeight={rowHeight}
                            task={t}
                            expanderSymbol={expanderSymbol}
                            onExpanderClick={onExpanderClick}
                        />
                    );
                } else if (isParentalGroup) {
                    return (
                        <Parental
                            rowHeight={rowHeight}
                            task={t}
                            expanderSymbol={expanderSymbol}
                            onExpanderClick={onExpanderClick}
                        />
                    );
                } else {
                    return <Requirement rowHeight={rowHeight} task={t} />;
                }
            })}
        </div>
    );
};

type RegulationProps = {
    rowHeight: number;
    task: Task;
    expanderSymbol: string;
    onExpanderClick: (task: Task) => void;
};

function Regulation({ rowHeight, task, expanderSymbol, onExpanderClick }: RegulationProps) {
    return (
        <div className="taskListTableRow" style={{ height: rowHeight }} key={`${task.id}row`}>
            <div className="taskListCell taskListCell--regulation" onClick={() => onExpanderClick(task)}>
                <div className="taskListName-header" title={task.name}>
                    {task.tooltip ? `${task.name} ⓘ` : task.name}
                </div>
                <div className="taskListName" title={task.tooltip}>
                    <div className={expanderSymbol ? "taskListExpander" : "taskListEmptyExpander"}>
                        {expanderSymbol}
                    </div>
                    <div className="taskListAdditionalInfo">
                        {task.tooltip ? `${task.additionalInfo} ⓘ` : task.additionalInfo}
                    </div>
                </div>
            </div>
        </div>
    );
}

type ParentalProps = {
    rowHeight: number;
    task: Task;
    expanderSymbol: string;
    onExpanderClick: (task: Task) => void;
};

function Parental({ rowHeight, task, expanderSymbol, onExpanderClick }: ParentalProps) {
    return (
        <div className="taskListTableRow" style={{ height: rowHeight }} key={`${task.id}row`}>
            <div className="taskListCell taskListCell--parentalGroup" title={task.tooltip}>
                {task.hideBarTask ? (
                    <div className="taskListName taskListNameParental">{task.name}</div>
                ) : (
                    <div className="taskListName taskListNameParental" onClick={() => onExpanderClick(task)}>
                        <div className="taskListName taskListExpanderSeparator">{task.name}</div>
                        <div className="taskListExpander">{expanderSymbol}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

type RequirementProps = {
    rowHeight: number;
    task: Task;
};

function Requirement({ rowHeight, task }: RequirementProps) {
    return (
        <div className="taskListTableRow" style={{ height: rowHeight }} key={`${task.id}row`}>
            <div className="taskListCell taskListCell-requirement" title={task.tooltip}>
                <div className="taskListName taskListNameRequirement">{task.name}</div>
            </div>
        </div>
    );
}