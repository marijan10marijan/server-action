# Next.js 14 Server Action

## Overview

This project is a dynamic web application built with Next.js 14, Server Action, Tailwind CSS, and a JSON server for seamless frontend and backend integration. The responsive design ensures optimal user experience across various devices.

## Key Features

- **Next.js Framework:** Utilizing the power of Next.js for efficient server-side rendering and seamless navigation.
- **Tailwind CSS Styling:** The project embraces the utility-first approach of Tailwind CSS, providing a clean and visually appealing user interface.
- **JSON Server Integration:** Backend functionalities are implemented using a JSON server, enabling the use of GET, POST, and DELETE methods for data retrieval, submission, and deletion.
- **Form Submission:** A user-friendly form is implemented, allowing users to submit data seamlessly. The system provides immediate feedback messages to ensure a smooth and error-free submission process.

## Technologies Used

- **Next.js 14**
- **Tailwind CSS**
- **JSON Server**

## Project Workflow

1. Users can interact with the responsive UI, powered by Tailwind CSS, ensuring a visually consistent experience.
2. The form allows users to submit data, leveraging the capabilities of the JSON server.
3. The implemented backend supports GET for data retrieval, POST for submitting data, and DELETE for removing records.
4. Immediate feedback messages inform users about the success of their form submissions or any encountered errors.
5. Delete button for each user is created using server action with implementation that user can be deleted even if javascript is disabled in browser(Full server side).
6. Form need to use Javascript to showcase message to user, but can be modified to work without Javascript.

## Usage

Feel free to clone this repository and customize it based on your specific requirements. Follow the steps below to get started:

1. Install dependencies: `npm install`
2. Run json-server, I created script for you to run: `npm run serve-json`
3. Create .env file and add variable: `API_URL=http://localhost:4000`
4. Run the development server: `npm run dev`

This project showcases a robust combination of frontend and backend technologies, providing a seamless user experience while maintaining a professional and modern codebase.
