# Project Name

## Setup Instructions

1. Run `npm install` to install all dependencies in the project.
2. Run `npm run dev` to start the project.
3. `Bonus Task` not build

## General Info

This project utilizes functional programming concepts such as Compound Components, Currying, and Layout Components.

### Examples

- `SidebarLayout.jsx`
- `Card.jsx`

State management is handled using Redux. Styling is implemented using Tailwind CSS. Routing is managed with `react-router-dom` v6.

The currently mocked server is automatically run whenever `npm run dev` is executed. The server file is located at `src/server/server.js` and utilizes MirageJS. The mocked server can handle CRUD operations, though deleting is not implemented because it was not required for the assignment. React Modals are also utilized in this project.

## Responsive Side Navigation Menu

- The navigation menu is responsive from 375px (iPhone SE) and above.
- It features an expand/collapse sidebar.
- Theme mode can be switched between dark and light using a button in the sidebar.

## Dashboard

All requirements for the dashboard should be fulfilled.

