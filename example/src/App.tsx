import React from "react";
import { Task, ViewMode, Gantt } from "objectivity-gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { initTasks } from "./helper";
import "objectivity-gantt-task-react/dist/index.css";
import { TaskListHeader } from "./components/TaskListHeader";
import { TaskListTable } from "./components/TaskListTable";
import { TooltipContent } from "./components/CustomTooltip";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

// Init
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Year);
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  const [isChecked, setIsChecked] = React.useState(true);

  const fullScreenHandle = useFullScreenHandle();
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 400;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleClick = (task: Task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  if (tasks && tasks.length > 0) {
  
    return (
      <FullScreen handle={fullScreenHandle}>;
        <ViewSwitcher
          onViewModeChange={viewMode => setView(viewMode)}
          onViewListChange={setIsChecked}
          isChecked={isChecked}
        />
        <h3>Gantt With Unlimited Height</h3>
        <div>
          <Gantt
            tasks={tasks}
            viewMode={view}
            onClick={handleClick}
            onExpanderClick={handleExpanderClick}
            listCellWidth="35%"
            preStepsCount={1}
            barCornerRadius={0}
            columnWidth={columnWidth}
            TooltipContent={TooltipContent}
            TaskListHeader={TaskListHeader}
            TaskListTable={TaskListTable}
            todayColor="#FEF9E9"
          />
        </div>
      </FullScreen>
    );
  }

  return <div>No data to display</div>;
};

export default App;
