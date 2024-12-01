# GWECCC 2025 Event Promotion Website

This project is a responsive, single-page event promotion website built for the **GWECCC 2025** event. The website features essential sections like a banner, event details, schedule, and a registration form, making it both informative and user-friendly.

/ Start of the project setup for the GWECCC 2025 Event Promotion Website

// Project Structure:
// 1. src/components
// - Header.tsx
// - Banner.tsx
// - AboutEvent.tsx
// - EventSchedule.tsx
// - RegistrationForm.tsx
// 2. src/App.tsx
// 3. src/index.tsx
// 4. src/styles
// - animations.css

// Dependencies to install:

# npm install react-router-dom @tailwindcss/forms

# use yarn to install framer-motion in my case npm is not working.

// Tailwind Setup: Make sure Tailwind CSS is installed and configured.
// Refer to https://tailwindcss.com/docs/installation for setup instructions.

# TypeScript Setup:

# 1. Install TypeScript and React type definitions:

# npm install typescript @types/react @types/react-dom

// 2. Generate tsconfig.json:

# npx tsc --init

// 3. Configure tsconfig.json with key options like:
// {
// "compilerOptions": {
// "jsx": "react-jsx",
// "strict": true,
// "module": "ESNext",
// "target": "ES6",
// "moduleResolution": "Node",
// "allowSyntheticDefaultImports": true
// }
// }

## Features

- **Responsive Design**: Fully mobile-friendly, ensuring optimal user experience on all devices.
- **Interactive Animations**: Smooth transitions and animations using `framer-motion`.
- **Event Schedule**: Clearly displays dates, key topics, and speakers.
- **Registration Form**: Simple form for users to register for the event.
- **Modern UI**: Built with `React.js` and styled using `Tailwind CSS`.

## Tech Stack

- **Frontend**: React.js (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Banner.tsx
│   ├── AboutEvent.tsx
│   ├── EventSchedule.tsx
│   └── RegistrationForm.tsx
├── styles/
│   └── animations.css
├── App.tsx
├── index.tsx
└── index.css
```

## Installation & Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/rajesh-code-dev/gweccc-2025-promotion.git
   cd gweccc-2025-promotion
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm start
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Tailwind CSS Setup

Tailwind CSS is pre-configured in the project. If needed, refer to the [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation).

### Configuration

- `tailwind.config.js`:
  ```js
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
  };
  ```

## Deployment

The website can be deployed on platforms like GitHub Pages or Netlify.

### Deployment Steps (Netlify):

1. Log in to [Netlify](https://www.netlify.com/).
2. Connect your GitHub repository.
3. Select the project and deploy.

## Live Demo

[Live Link](#) (Replace with the actual link once deployed.)

## Design Choices

The website is designed to:

- Be visually engaging with a professional and clean layout.
- Prioritize quick loading and responsiveness for better user experience.
- Include animations to enhance interactivity without overwhelming the user.

## Challenges

- Ensuring cross-browser compatibility across Chrome, Firefox, Safari, and Edge.
- Optimizing animations and responsiveness for all device sizes.

## Contribution

Feel free to fork this repository, submit issues, or make pull requests to contribute to the project.

## License

This project is licensed under the [MIT License](LICENSE).
