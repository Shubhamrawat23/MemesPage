# getmemes 🎭

A React-based web application for browsing, searching, and downloading memes.

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 14.0.0
- **npm** >= 6

### Installation

```bash
npm install
```

### Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000) |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run eject` | Ejects from Create React App (one-way operation) |

---

## 🛠 Tech Stack

### Core

| Package | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | ^18.2.0 | UI library |
| [React DOM](https://reactjs.org/docs/react-dom.html) | ^18.2.0 | DOM rendering |
| [react-scripts](https://create-react-app.dev/) | 5.0.1 | CRA build toolchain |

### Styling

| Package | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | ^3.4.19 | Utility-first CSS framework |

### Testing

| Package | Version | Purpose |
|---|---|---|
| [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) | ^13.4.0 | React component testing |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | ^5.17.0 | Custom Jest matchers for DOM |
| [@testing-library/user-event](https://github.com/testing-library/user-event) | ^13.5.0 | User interaction simulation |

### Performance Monitoring

| Package | Version | Purpose |
|---|---|---|
| [web-vitals](https://github.com/GoogleChrome/web-vitals) | ^2.1.4 | Core Web Vitals measurement |

---

## 📁 Project Structure

```
getmemes/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── package-lock.json
└── README.md
```

---

## 🏗 Build

To create a production build:

```bash
npm run build
```

The build is minified and the filenames include content hashes. The app is ready to be deployed.

### Build Toolchain (via react-scripts 5.0.1)

- **Webpack 5** — Module bundling
- **Babel** — JavaScript transpilation (ES2015+, JSX, TypeScript support)
- **PostCSS** — CSS processing with autoprefixer and preset-env
- **ESLint** — Linting with `eslint-config-react-app`
- **Jest 27** — Test runner
- **Terser** — JS minification
- **CSS Minimizer** — CSS minification

---

## 🧪 Testing

```bash
npm test
```

Tests are powered by **Jest** with **React Testing Library**. The setup includes:

- Component rendering tests
- User interaction simulation via `@testing-library/user-event`
- DOM assertion matchers via `@testing-library/jest-dom`

---

## 🎨 Styling with Tailwind CSS

This project uses **Tailwind CSS v3** for styling. Configuration can be found in `tailwind.config.js`.

To customize Tailwind, edit the config file:

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🌐 Browser Support

### Production
- Browsers with > 0.2% market share
- Excludes dead browsers and Opera Mini

### Development
- Latest Chrome
- Latest Firefox
- Latest Safari

---

## 📦 Dependencies Overview

```
Dependencies:     6 packages
DevDependencies:  1 package (tailwindcss)
```

---

## 🔧 Environment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more information, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

---

## 📄 License

This project is private.