# ToDo Application

This project is a task management application built with React, Tailwind CSS, Vite, and tested with Vitest. It allows users to create tasks, move them between different statuses (To Do, In Progress, Done), and persist the tasks in the local storage. The project is set up for continuous deployment via Cloudflare.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
```bash
git clone https://github.com/adrianna157/your-repo.git
```

2. Navigate to the project directory
```bash
cd your-repo
```

3. Install the dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Run the vitest test runner
```bash
npm run test
```

## Running the tests

Run the following command to execute the tests:

```bash
npm run test
```

## Deployment

The project is set up for continuous deployment via Cloudflare. Any changes pushed to the main branch will automatically be deployed.
The project is deployed [here](https://healthie-take-home-todo.pages.dev/)
## Persistence

The tasks are persisted in the local storage. This means that the tasks will still be there even if you refresh the page or close the browser.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster and leaner development experience for modern web projects
- [Vitest](https://vitest.dev/) - A test runner designed for Vite
- [Dnd Kit](https://dndkit.com/) - Drag and drop library
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Used to generate toast notifications
- [React Confetti](https://alampros.github.io/react-confetti/) - Used to generate confetti animations

## Features

In the task management application, users should be able to perform the following common functionalities:

- **Create Tasks** 
  - Users can create new tasks by entering the task name in the input field and clicking the "Create Task" button. The task will be created with a unique ID and a status of "todo".

- **View Tasks** 
  - Users can view all the tasks they have created. The tasks are displayed in different sections based on their status (To Do, In Progress, Done).

- **Update Task Status**
  - Users can update the status of a task by dragging and dropping it to a different section. The status of the task will be updated based on the section it is dropped in.

- **Persistence**
  - The tasks are persisted in the local storage. This means that the tasks will still be there even if the user refreshes the page or closes the browser.

- **Notifications** 
  - Users receive notifications when they create a task or when an error occurs. For example, if the task name is less than 5 characters or more than 50 characters, an error notification will be displayed.

- **Continuous Deployment**
  - The project is set up for continuous deployment via Cloudflare. Any changes pushed to the main branch will automatically be deployed.

- **Testing** 
  - The application is tested with Vitest, a test runner designed for Vite.

- **Confetti Animation** 
  - When a task is moved to the 'done' status, a confetti animation is displayed for a few seconds to celebrate the completion of the task.

## Authors

- **Adrianna157**

