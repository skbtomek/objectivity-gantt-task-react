import { Task } from "../../dist/types/public-types";

export function initTasks() {
 
  const tasks: Task[] = [
    {
      "id": "4475452129699490",
      "name": "Ullamco est ",
      "additionalInfo": "Ad ullamco duis ipsum Lorem.",
      "tooltip": "Occaecat commodo ",
      "start": new Date("2022-01-24T22:00:00.000Z"),
      "end": new Date("2022-12-22T21:59:59.999Z"),
      "type": "project",
      "hideChildren": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#F8D87D",
        "backgroundSelectedColor": "#F4C53C",
        "progressColor": "#F8D87D",
        "progressSelectedColor": "#F4C53C"
      }
    },
    {
      "id": "44754521296994505",
      "name": "Ullamco est sunt anim dolor nostrud labore. Est tempor id ullamco sit fugiat proident magna est dolor.Tempor est tempor sint fugiatś",
      "additionalInfo": "Ad ullamco duis ipsum Lorem.",
      "tooltip": "Occaecat commodo eu dolor cillum sit aliqua exercitation.Dolore sit duis excepteur dolore irure",
      "start": new Date("2022-08-24T22:00:00.000Z"),
      "end": new Date("2022-09-22T21:59:59.999Z"),
      "type": "project",
      "hideChildren": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#F8D87D",
        "backgroundSelectedColor": "#F4C53C",
        "progressColor": "#F8D87D",
        "progressSelectedColor": "#F4C53C"
      }
    },
    {
      "id": "45598946227126475",
      "name": "Duis mollit sunt et do pariatur anim.Et aute duis dolore ad nulla sint nulla proident reprehenderit",
      "additionalInfo": "",
      "tooltip": "",
      "start": new Date("2022-08-24T22:00:00.000Z"),
      "end": new Date("2022-08-25T21:59:59.999Z"),
      "type": "project",
      "project": "44754521296994505",
      "hideChildren": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#B2B2B2",
        "backgroundSelectedColor": "#989898",
        "progressColor": "#B2B2B2",
        "progressSelectedColor": "#989898"
      }
    },
    {
      "id": "22517998136853181",
      "name": "Id duis sint voluptate pariatur tempor nostrud ipsum excepteur minim",
      "additionalInfo": "Nisi amet in deserunt ut consectetur enim enim",
      "tooltip": "",
      "start": new Date("2022-08-25T10:00:00.000Z"),
      "end": new Date("2022-08-25T10:00:00.000Z"),
      "type": "task",
      "project": "45598946227126475",
      "progress": 100,
      "styles": {
        "backgroundColor": "#D85604",
        "backgroundSelectedColor": "#973C03",
        "progressColor": "#D85604",
        "progressSelectedColor": "#973C03",
        "icon": "♦"
      }
    },
    {
      "id": "45598946227126373",
      "name": "Minim quis ad sunt dolore",
      "additionalInfo": "",
      "tooltip": "",
      "start": new Date("2022-08-26T22:00:00.000Z"),
      "end": new Date("2022-09-22T21:59:59.999Z"),
      "type": "project",
      "project": "44754521296994505",
      "hideChildren": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#B2B2B2",
        "backgroundSelectedColor": "#989898",
        "progressColor": "#B2B2B2",
        "progressSelectedColor": "#989898"
      }
    },
    {
      "id": "22517998136853681",
      "name": "123",
      "additionalInfo": "Commodo eu amet eiusmod occaecat nisi",
      "tooltip": "",
      "start": new Date("2022-08-31T10:00:00.000Z"),
      "end": new Date("2022-08-31T10:00:00.000Z"),
      "type": "task",
      "project": "45598946227126373",
      "progress": 100,
      "styles": {
        "backgroundColor": "#D85604",
        "backgroundSelectedColor": "#973C03",
        "progressColor": "#D85604",
        "progressSelectedColor": "#973C03",
        "icon": "♢"
      }
    },
    {
      "id": "22517998136853682",
      "name": "333",
      "additionalInfo": "Duis est do laborum ut sunt voluptate sint",
      "tooltip": "",
      "start": new Date("2022-09-22T10:00:00.000Z"),
      "end": new Date("2022-09-22T10:00:00.000Z"),
      "type": "task",
      "project": "45598946227126373",
      "progress": 100,
      "styles": {
        "backgroundColor": "#D85604",
        "backgroundSelectedColor": "#973C03",
        "progressColor": "#D85604",
        "progressSelectedColor": "#973C03",
        "icon": "♢"
      }
    },
    {
      "id": "22517998136853688",
      "name": "Quis laboris excepteur eu nulla dolor dolore nostrud exercitation.Ad eiusmod nisi ullamco labore pariatur velit tempor Lorem commodo sunt id.",
      "additionalInfo": "Voluptate non esse ipsum exercitation",
      "tooltip": "",
      "start": new Date("2022-08-27T10:00:00.000Z"),
      "end": new Date("2022-08-27T10:00:00.000Z"),
      "type": "task",
      "project": "45598946227126373",
      "progress": 100,
      "styles": {
        "backgroundColor": "#D85604",
        "backgroundSelectedColor": "#973C03",
        "progressColor": "#D85604",
        "progressSelectedColor": "#973C03",
        "icon": "♦"
      }
    },
    {
      "id": "44754521296994705",
      "name": "Deserunt incididunt proident eiusmod culpa nisi anim consectetur labore.Ad esse qui nostrud veniam aliqua deserunt ullamco aliqua.",
      "additionalInfo": "Enim esse pariatu",
      "tooltip": "Sit irure fugiat consequat cupidatat nostrud ex veniam officia non cupidatat ut sint.Esse aute veniam magna quis qui ex magna dolor.Laboris anim commodo duis cupidatat aute voluptate sint exercitation reprehenderit do.",
      "start": new Date("2019-09-26T22:00:00.000Z"),
      "end": new Date("2022-08-14T21:59:59.999Z"),
      "type": "project",
      "hideChildren": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#F8D87D",
        "backgroundSelectedColor": "#F4C53C",
        "progressColor": "#F8D87D",
        "progressSelectedColor": "#F4C53C"
      }
    },
    {
      "id": "45598946227126673",
      "name": "G1",
      "additionalInfo": "",
      "tooltip": "",
      "start": new Date("2022-08-13T22:00:00.000Z"),
      "end": new Date("2022-08-14T21:59:59.999Z"),
      "type": "project",
      "project": "44754521296994705",
      "hideChildren": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#B2B2B2",
        "backgroundSelectedColor": "#989898",
        "progressColor": "#B2B2B2",
        "progressSelectedColor": "#989898"
      }
    },
    {
      "id": "22517998136854981",
      "name": "Adipisicing id non occaecat ex deserunt culpa ut incididunt reprehenderit pariatur tempor velit occaecat",
      "additionalInfo": "Elit exercitation aliquip et tempor",
      "tooltip": "",
      "start": new Date("2022-08-14T10:00:00.000Z"),
      "end": new Date("2022-08-14T10:00:00.000Z"),
      "type": "task",
      "project": "45598946227126673",
      "progress": 100,
      "styles": {
        "backgroundColor": "#D85604",
        "backgroundSelectedColor": "#973C03",
        "progressColor": "#D85604",
        "progressSelectedColor": "#973C03",
        "icon": "♢"
      }
    },
    {
      "id": "45598946227126674",
      "name": "g2",
      "additionalInfo": "",
      "tooltip": "",
      "start": new Date("2019-09-26T22:00:00.000Z"),
      "end": new Date("2019-09-27T21:59:59.999Z"),
      "type": "project",
      "project": "44754521296994705",
      "hideChildren": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#B2B2B2",
        "backgroundSelectedColor": "#989898",
        "progressColor": "#B2B2B2",
        "progressSelectedColor": "#989898"
      }
    },
    {
      "id": "22517998136853411",
      "name": "2 title 2",
      "additionalInfo": "Qui reprehenderit id cupidatat sit in esse ex.",
      "tooltip": "",
      "start": new Date("2019-09-27T10:00:00.000Z"),
      "end": new Date("2019-09-27T10:00:00.000Z"),
      "type": "task",
      "project": "45598946227126674",
      "progress": 100,
      "styles": {
        "backgroundColor": "#D85604",
        "backgroundSelectedColor": "#973C03",
        "progressColor": "#D85604",
        "progressSelectedColor": "#973C03",
        "icon": "♢"
      }
    },
    {
      "id": "45598946227126675",
      "name": "g3",
      "additionalInfo": "",
      "tooltip": "",
      "start": new Date("2022-04-11T22:00:00.000Z"),
      "end": new Date("2022-04-12T21:59:59.999Z"),
      "type": "project",
      "project": "44754521296994705",
      "hideChildren": true,
      "hideBarTask": true,
      "progress": 100,
      "styles": {
        "backgroundColor": "#B2B2B2",
        "backgroundSelectedColor": "#989898",
        "progressColor": "#B2B2B2",
        "progressSelectedColor": "#989898"
      }
    }
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
