🚧 Under construction 🚧


*flowysurf* 🌊 is a visual editor for designing workflows and planning projects.
It focuses on making it easy to model task dependencies and track progress across milestones.

The inspiration for this project came from frustration with traditional, linear task lists. They aren't designed to show you which tasks depend on others, what the long term goals are, and how progress is moving. flowysurf makes it simple to visualize each of these by organizing tasks into nodes in a flowchart. I had the idea for this flowchart-like app, but didn't get around to creating it until the [HackGT](https://hack.gt) hackathon came around, where I built it in the span of 36 hours.

Here are the key principles behind using flowysurf:
1. Nodes represent Start, Task, or Milestone elements.
2. Edges represent flow/dependency between nodes (one node flows into another).
3. Milestones automatically count upstream Task nodes and show completion progress.
4. TaskNodes expose a main checkbox that marks the task complete. Subtasks are local and do not count towards milestone completion.

Currently, flowysurf is a frontend project, though development is underway to make it into a full stack application.

## Tech

### Frontend

- React
- React Flow
- TailwindCSS
- daisyUI

### Backend

- Node.js
- Prisma
- Express.js
- Axios

## Skills
- Fullstack web dev
- JSON data management

## Links
- Website: [flowy.surf](https://flow.surf)
- Source code: [dan/flowysurf](https://git.dgd.sh/dan/flowysurf)
