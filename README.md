# Fahar Inam Rana — Portfolio

> Personal portfolio of Fahar Inam Rana, a Computer Science student and multidisciplinary developer focused on modern web experiences, AI-powered applications, and digital design.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-Visit%20Site-111827?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-n8h1.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Rana--fahar--26-181717?style=for-the-badge&logo=github)](https://github.com/Rana-fahar-26)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fahar%20Inam%20Rana-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)

## Overview

This repository contains the source code for my personal portfolio website. It is built to present my technical skills, selected projects, experience, and creative work through a responsive and modern web interface.

The portfolio is designed as a full-stack JavaScript project with a React/Vite frontend and an Express backend.

## Highlights

- Responsive portfolio experience
- Modern dark visual system
- Smooth UI animations with Framer Motion
- Tailwind CSS styling
- React-based component architecture
- Express backend foundation
- Project and skills showcase
- Contact/portfolio-ready structure
- Deployable frontend architecture for Vercel

## Tech Stack

### Frontend

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- JavaScript (ES Modules)

### Backend

- Node.js
- Express.js
- CORS

### Development

- npm
- Git
- GitHub
- Vercel

## Project Structure

```
Portfolio/
├── client/                 # React + Vite frontend
│   ├── public/             # Static assets
│   └── src/                # Application source
├── server/                 # Express backend
│   └── server.js
├── package.json            # Root development scripts
├── package-lock.json
└── .gitignore
```

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js 18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Rana-fahar-26/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

Install the root dependencies and both application dependencies:

```bash
npm run install:all
```

### 3. Start the development environment

Run frontend and backend together:

```bash
npm run dev
```

Or run them separately:

```bash
npm run client
npm run server
```

The frontend runs through Vite and the backend runs through Express.

## Available Scripts

| Command | Description |
|---|---|
| `npm run install:all` | Install root, frontend, and backend dependencies |
| `npm run dev` | Start frontend and backend together |
| `npm run client` | Start the frontend development server |
| `npm run server` | Start the backend development server |

## Deployment

The production portfolio is deployed on Vercel.

**Live site:** https://portfolio-n8h1.vercel.app

For frontend deployment, configure Vercel to use the `client` directory as the project root if deploying the frontend directly from this monorepo.

If backend API functionality is deployed separately, configure the production API URL through environment variables rather than hard-coding it into the frontend.

## Design & Engineering Goals

This project focuses on:

1. Clear personal branding
2. Strong visual hierarchy
3. Responsive design
4. Fast page delivery
5. Maintainable React components
6. Clean separation between frontend and backend
7. A professional presentation of technical and creative work

## Featured Areas

The portfolio is intended to showcase work across:

- AI applications and automation
- Frontend development
- Full-stack web development
- Graphic and digital design
- University and networking projects
- Interactive user experiences

## About Me

I'm **Fahar Inam Rana**, a Computer Science student interested in building practical software products and modern digital experiences. My work combines software development, AI experimentation, frontend engineering, and visual design.

## Contact

- GitHub: https://github.com/Rana-fahar-26
- Portfolio: https://portfolio-n8h1.vercel.app

For professional opportunities, collaboration, freelance work, or project discussions, please connect through the portfolio or GitHub profile.

## License

This repository contains personal portfolio work. Unless otherwise stated, the original design, content, and project-specific assets are not licensed for redistribution or commercial reuse.

---

**Built with React, Vite, Tailwind CSS, Express, and a focus on modern digital experiences.**
