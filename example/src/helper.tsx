import { startOfDay } from "date-fns";
import { endOfDay } from "date-fns/esm";
import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const now = new Date();
  
  const tasks: Task[] = [
    {
      start: new Date(now.getFullYear(), now.getMonth(), 1),
      end: new Date(now.getFullYear(), now.getMonth(), 15),
      name: "Some Project sfdf Some Project sfdf Some Project sfdf ",
      additionalInfo: "some additional info some additional info some additional info ",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1,      
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), 1),
      end: new Date(
        now.getFullYear(),
        now.getMonth(),
        2,
        12,
        28
      ),
      name: "Idea",
      additionalInfo: "Regulation",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
      styles: {
        icon: "R"
      }
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), 2),
      end: new Date(now.getFullYear(), now.getMonth(), 4, 0, 0),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), 4),
      end: new Date(now.getFullYear(), now.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), 8),
      end: new Date(now.getFullYear(), now.getMonth(), 9, 0, 0),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 5,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), 8),
      end: new Date(now.getFullYear(), now.getMonth(), 10),
      name: "Review",
      id: "Task 4",
      type: "task",
      progress: 70,
      dependencies: ["Task 2"],
      project: "ProjectSample",
      displayOrder: 6,
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), 15),
      end: new Date(now.getFullYear(), now.getMonth(), 15),
      name: "Release",
      id: "Task 6",
      progress: now.getMonth(),
      type: "milestone",
      dependencies: ["Task 4"],
      project: "ProjectSample",
      displayOrder: 7,
    },
    {
      start: startOfDay(new Date(now.getFullYear(), now.getMonth(), 18)),
      end: endOfDay(new Date(now.getFullYear(), now.getMonth(), 18)),
      name: "Party Project",
      id: "partyProj",
      progress: 0,
      type: "project",
      hideChildren: false      
    },
    {
      start: new Date(now.getFullYear(), now.getMonth(), 18),
      end: new Date(now.getFullYear(), now.getMonth(), 19),
      name: "Party Time",
      id: "Task 9",
      progress: 0,
      type: "task",
      project: "partyProj",
      styles: {
        icon: "O"
      }
    },
    {
      start: new Date(now.getFullYear()-1, now.getMonth(), 18),
      end: new Date(now.getFullYear()-1, now.getMonth(), 19),
      name: "Disabled task (bar not visible)",
      id: "Task 10",
      progress: 0,
      isDisabled: true,
      type: "task",
      hideBarTask: true
    },    
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
