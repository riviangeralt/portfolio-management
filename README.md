# Portfolio Management

A portfolio management application built with React, TypeScript, and Vite.

## Links

- **Live Demo**: [https://qodeinvest-assignment.netlify.app/](https://qodeinvest-assignment.netlify.app/)
- **GitHub Repository**: [https://github.com/riviangeralt/portfolio-management](https://github.com/riviangeralt/portfolio-management)

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-management
```

2. Install dependencies:
```bash
npm install
```

### Running the Project

#### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

#### Production Build
Build the project for production:
```bash
npm run build
```

#### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

#### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Recharts** - Data visualization

## Project Structure

```
portfolio-management/
├── src/
│   ├── assets/       # Static assets
│   ├── components/   # Reusable components
│   ├── data/         # Data files
│   ├── pages/        # Page components
│   ├── types/        # TypeScript type definitions
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── public/           # Public assets
└── index.html        # HTML template
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

