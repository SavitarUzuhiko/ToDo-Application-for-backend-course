# 📝 Todo App

A simple and intuitive Todo application designed to help you manage your tasks and stay organized efficiently. This project features a full-stack architecture with a React-based frontend and a Node.js backend.

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME])
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

## 📸 Screenshots

*It's highly recommended to add screenshots of your application here to give users a quick visual overview.*

| Main                                            | Complete                                                | Incomplete                                                  |
| :----------------------------------------------: | :------------------------------------------------------: | :----------------------------------------------------------: |
| ![Main Page Screenshot]([https://i.ibb.co/pnvhKzn/image.png](https://ik.imagekit.io/savitaruzuhiko/Screenshot%202025-07-05%20133737.png?updatedAt=1751705072478)) | ![Completed Tasks Screenshot]([https://i.ibb.co/dKsfL3x/image.png](https://ik.imagekit.io/savitaruzuhiko/Screenshot%202025-07-05%20133750.png?updatedAt=1751705164526)) | ![Incompleted Tasks Screenshot]([https://i.ibb.co/gZb272G/image.png](https://ik.imagekit.io/savitaruzuhiko/Screenshot%202025-07-05%20133757.png?updatedAt=1751705164639)) |

## ✨ Core Features

-   **CRUD Operations:** Create, read, update, and delete todos seamlessly.
-   **Task Completion:** Mark and unmark todos as completed.
-   **Status Filtering:** Filter todos based on their completion status.
-   **Bulk Deletion:** Delete multiple completed todos at once.
-   **Live Data Sync:** UI automatically refetches data after any modification for a real-time experience.

## 💻 Technology Stack

This project is built using a modern technology stack, separated into a backend API and a frontend client.

### Backend

| Category          | Technology / Library                                                              |
| ----------------- | --------------------------------------------------------------------------------- |
| **Runtime** | Node.js                                                                           |
| **Framework** | Express.js                                                                        |
| **Database** | MongoDB                                                                           |
| **ODM** | Mongoose                                                                          |
| **Middleware** | CORS (`cors`)                                                                     |
| **Environment** | Dotenv (`dotenv`)                                                                 |
| **Dev Tooling** | Nodemon (`nodemon`)                                                               |

### Frontend

| Category          | Technology / Library                                                              |
| ----------------- | --------------------------------------------------------------------------------- |
| **Framework** | React                                                                          |
| **Bundler** | Vite                                                                              |
| **Language** | TypeScript                                                                        |
| **Styling** | Tailwind CSS                                                                      |
| **UI Components** | Radix UI (Dialog, Select, Checkbox, etc.) & Lucide React (Icons)                    |
| **State Mgt.** | Redux Toolkit & React-Redux                                                       |
| **Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority`                                |
| **Linting** | ESLint                                                                            |

## 🚀 Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

-   Node.js (v18 or newer)
-   npm or yarn
-   MongoDB (local instance or a cloud URI from MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR_USERNAME]/[YOUR_REPO_NAME].git
    cd [YOUR_REPO_NAME]
    ```

2.  **Setup the Backend:**
    -   Navigate to the backend directory:
        ```bash
        cd backend
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
    -   Create a `.env` file in the `backend` root and add your environment variables:
        ```env
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        ```
    -   Start the development server:
        ```bash
        npm run dev
        ```
    The backend will be running on `http://localhost:5000`.

3.  **Setup the Frontend:**
    -   Navigate to the frontend directory from the root folder:
        ```bash
        cd ../frontend
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
    -   Start the development server:
        ```bash
        npm run dev
        ```
    The frontend will be running on `http://localhost:5173` (or another port specified by Vite).

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.
