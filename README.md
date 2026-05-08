# Zora Services

A modern, full-featured services platform built with React and TypeScript. Zora provides a comprehensive solution for browsing IT and non-IT services, managing appointments and exploring product offerings.

## Features

- 🎯 **Service Categories** - Browse and filter IT and non-IT services
- 📅 **Appointment Booking** - Schedule appointments with ease
- 🛍️ **Product Catalog** - Explore available products
- ✨ **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 🎨 **Responsive Design** - Modern UI with Tailwind CSS
- ⚡ **Fast Performance** - Optimized with Vite for rapid development and production builds
- 📱 **Mobile Friendly** - Works seamlessly across all devices

## Tech Stack

- **React** (v19) - UI library
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **ESLint** - Code quality

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── layouts/          # Layout components
├── data/             # Data files and constants
├── assets/           # Images and static files
├── App.tsx           # Root component
└── main.tsx          # Application entry point
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zora-services
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development Server

```bash
npm run dev
```
Starts the development server with hot module replacement (HMR). Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```
Creates an optimized production build. Outputs to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Lint

```bash
npm run lint
```
Runs ESLint to check code quality and style.

## Development Workflow

1. Create feature branches for new development
2. Run `npm run lint` before committing to ensure code quality
3. Test changes using `npm run dev`
4. Build and preview with `npm run build && npm run preview`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved.
