# FAQS-demo

A simple React-based web application for displaying a list of Frequently Asked Questions (FAQs). Built using React and Vite for fast development with modern JavaScript, this project demonstrates interactive UI with collapsible FAQ items.

## ⚡ Features

- **Built with React**: Utilizes React functional components, hooks (`useState`), and JSX for dynamic UI.
- **Vite-powered**: Fast Hot Module Reloading and convenient development setup.
- **Collapsible FAQ Items**: Users can toggle individual FAQs to show/hide answers.
- **Separation of Concerns**: Header and Footer are modularized as React components.
- **Responsive Design**: CSS is crafted to ensure usability on desktop and mobile.
- **Custom Styling**: Uses custom CSS for theming, transitions, and user interactions.
- **ESLint Configured**: Linting configured for code quality, including recommended React rules.

## 🛠️ React premises and implementations

This project is built entirely with React and includes:

- Usage of **React functional components** (`App`, `Header`, `Footer`, and the inline `FAQitem`).
- State management via **React's `useState` hook** for toggling FAQ answers open and closed.
- **JSX rendering** and composition of child components.
- Uses **React StrictMode** for highlighting potential problems.
- Rendered to the DOM with `react-dom/client`'s `createRoot` API.
- React-specific ESLint plugins and recommended rules for proper linting and code quality.

## 📁 What has been implemented

- **Created `App.jsx` as the main component** displaying all FAQs.
- **Defined question/answer list in `src/Assets/faqs.js`** and dynamically rendered the list using `.map`.
- **Implemented toggling for FAQ answers** by clicking each question (collapsible logic using local state).
- **Separate Header and Footer components** for clean structure.
- **Custom, responsive CSS styles** in `App.css`, fine-tuned for aesthetics and mobile support.
- **Configured Vite (`vite.config.js`)** to enable the React plugin and speedy development.
- **Set up ESLint (`eslint.config.js`)** with React-specific recommendations.
- **Wired the application in `index.html` and bootstrapped it in `src/main.jsx`.**

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run the development server**:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173/](http://localhost:5173/) to see it in action.

## 📂 Project Structure

```
FAQS-demo/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── Assets/
│   │   └── faqs.js
│   └── components/
│       ├── header.jsx
│       └── footer.jsx
├── vite.config.js
├── eslint.config.js
├── index.html
├── package.json
└── README.md
```

## 🙋 Author

Built and maintained by [sanjaynep](https://github.com/sanjaynep).

---

> This is a simple project to demonstrate building an interactive FAQ page using React and Vite.
