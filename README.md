<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
FitTrack-ipgtb7
</h1>
<h4 align="center">Web application that allows users to set fitness goals, track their progress, and connect with a community of like-minded individuals.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework used for building the application">
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend technologies used">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend technology used">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs used for generating code and content">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/FitTrack-ipgtb7?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/FitTrack-ipgtb7?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/FitTrack-ipgtb7?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains the code for a Minimum Viable Product (MVP) of a fitness tracker web application. The application focuses on providing users a convenient and engaging way to set fitness goals, track their progress, and connect with a community of other fitness enthusiasts. This MVP was developed with a tech stack of Next.js, TypeScript, PostgreSQL, Tailwind CSS, and Zustand. It leverages a RESTful API built with Express.js for backend operations and utilizes NextAuth.js for user authentication.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architectural pattern with separate directories for different functionalities, ensuring easier maintenance and scalability.             |
| 📄 | **Documentation**  | This README file provides a comprehensive overview of the Minimum Viable Product (MVP), its dependencies, and usage instructions.|
| 🔗 | **Dependencies**   | The codebase relies on various external libraries and packages such as React, Zustand, Next.js, Tailwind CSS, and Prisma Client, which are essential for building and styling the UI components, managing application state, and interacting with the database.|
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate directories and files for different functionalities such as pages, components, API routes, and database schemas.|
| 🧪 | **Testing**        | Implement unit tests using frameworks like Jest or React Testing Library to ensure the reliability and robustness of the codebase.       |
| ⚡️  | **Performance**    | The performance of the system can be optimized based on factors such as the browser and hardware being used. Consider implementing performance optimizations for better efficiency.|
| 🔐 | **Security**       | Enhance security by implementing measures such as input validation, data encryption, and secure communication protocols.|
| 🔀 | **Version Control**| Utilizes Git for version control with GitHub Actions workflow files for automated build and release processes.|
| 🔌 | **Integrations**   | Interacts with browser APIs, external services through HTTP requests, and potentially includes integrations with fitness tracker APIs for automatic data import.|
| 📶 | **Scalability**    | Design the system to handle increased user load and data volume, utilizing caching strategies and cloud-based solutions for better scalability.           |

## 📂 Structure
```text
FitTrack-ipgtb7
├── pages
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth].js
│   │   ├── goals
│   │   │   ├── [id].js
│   │   │   └── index.js
│   │   ├── activities
│   │   │   ├── [id].js
│   │   │   └── index.js
│   │   ├── users
│   │   │   └── [id].js
│   │   └── profile
│   │       └── [id].js
│   ├── dashboard
│   │   └── page.jsx
│   ├── goal
│   │   └── page.jsx
│   ├── activity
│   │   └── page.jsx
│   ├── social
│   │   └── page.jsx
│   └── settings
│       └── page.jsx
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── GoalCard.jsx
│   ├── ActivityCard.jsx
│   ├── SocialCard.jsx
│   ├── ProgressChart.jsx
│   ├── Navigation.jsx
│   └── UserProfile.jsx
├── prisma
│   ├── schema.prisma
│   └── migrations
│       └── 20231026171918_init
│           ├── migration.sql
│           └── migration.ts
├── styles
│   └── globals.css
├── public
│   └── favicon.ico
└── next.config.js
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker (optional for local development)

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/spectra-ai-codegen/FitTrack-ipgtb7.git`
2. Navigate to the project directory:
   - `cd FitTrack-ipgtb7`
3. Install dependencies:
   - `npm install`
4. (Optional) If you want to set up a local PostgreSQL database, follow these steps:
   - Install PostgreSQL: 
      - Use your operating system's package manager to install PostgreSQL. 
   - Create a database: 
      - Use `psql` to connect to PostgreSQL and create a new database.
   - Configure environment variables:
      - In the root directory of the project, create a file named `.env` and add the following environment variables:
      ```
      DATABASE_URL=postgresql://user:password@host:port/database
      ```
      - Replace the placeholders with your actual database credentials.

## 🏗️ Usage
### 🏃‍♂️ Running the Development Server
1. Start the development server:
   - `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
- **Environment Variables:**
   - Configure the following environment variables in the `.env` file (create this file if it doesn't exist):
      - `DATABASE_URL`: The connection string for your PostgreSQL database.
      - `NEXTAUTH_URL`: The base URL for your application (e.g., `http://localhost:3000`).
      - `NEXTAUTH_SECRET`: A secret key for secure session management.
      - (Optional) `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: If you are using Google authentication, configure these variables with your Google API credentials.
- **Database Setup:**
  -  Make sure you have PostgreSQL installed and running.
  - If you're using a different database, you'll need to adjust the Prisma schema and configuration.

### 📚 Examples
- **Create a new goal:**
   - Access the "Goals" page.
   - Fill out the goal creation form with a title, description, and target date.
   - Click "Create Goal".
- **Track your progress:**
   - Access the "Activities" page.
   - Log your workouts manually or connect a fitness tracker to automatically import activity data.
   - View your progress towards your goals on the "Dashboard" page.
- **Connect with friends:**
   - Access the "Social" page.
   - Connect with friends by entering their email addresses or using Google authentication.
   - Share your progress updates with your friends and participate in fitness challenges.

## 🌐 Hosting
### 🚀 Deployment Instructions
You can deploy this application to a variety of hosting platforms. Here's a guide for deploying to Vercel:

**Vercel Deployment:**
1. **Create a Vercel account:** If you don't have one already, visit [https://vercel.com](https://vercel.com) and sign up.
2. **Install Vercel CLI:** Install the Vercel CLI globally using `npm install -g vercel`.
3. **Initialize Vercel project:** Run `vercel init` in your project's root directory.
4. **Deploy to Vercel:** Run `vercel deploy` to deploy your project to Vercel. Follow the prompts to configure your deployment.
5. **Configure environment variables:**  Go to your Vercel dashboard, select your project, and configure environment variables like `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, and potentially your Google API credentials.

**Other Hosting Platforms:**
- You can adapt the deployment instructions for platforms like Netlify, GitHub Pages, AWS, Google Cloud, or other hosting providers. Consult their respective documentation for specific deployment guides.
- For Heroku or other cloud platforms, you may need to set up a database instance separately and configure the application to connect to it.

### 🔑 Environment Variables
- `DATABASE_URL`: The connection string for your PostgreSQL database (configure in your hosting platform's environment variables).
- `NEXTAUTH_URL`: The base URL for your application (configure in your hosting platform's environment variables).
- `NEXTAUTH_SECRET`: A secret key for secure session management (configure in your hosting platform's environment variables).
- (Optional) `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: If you are using Google authentication, configure these variables with your Google API credentials (configure in your hosting platform's environment variables).


## 📜 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).

## 👥 Authors
- **Author Name** - [Spectra.codes](https://spectra.codes)
- **Creator Name** - [DRIX10](https://github.com/Drix10)

<p align="center">
  <h1 align="center">🌐 Spectra.Codes</h1>
</p>
<p align="center">
  <em>Why only generate Code? When you can generate the whole Repository!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
  <img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
</div>