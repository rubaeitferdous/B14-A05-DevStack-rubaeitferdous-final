# Dev Stack

Dev Stack is a polished technology discovery tool for developers planning their next project. Explore popular frontend, backend, database, and tooling options, compare their details, and build a personal technology stack in one focused interface.

## Preview

The application provides a responsive experience with a sticky navigation bar, mobile menu, technology cards, an interactive stack panel, toast notifications, and a structured footer.

## Features

1. **Explore technologies**
   Browse technology cards with icons, categories, difficulty levels, ratings, badges, and descriptions.

2. **Build your stack**
   Add technologies to a personal stack, prevent duplicate selections, remove individual items, or clear the complete stack.

3. **Responsive interface**
   Use the application comfortably across desktop and mobile devices with a sticky navbar, hamburger menu, responsive layouts, and action feedback through React-Toastify.

## Technologies Used

- React 19
- TypeScript
- Vite
- React-Toastify
- CSS3
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to view the application.

### Build for production

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

## Project Structure

```text
src/
|-- assets/       Images, design files, and shared types
|-- components/   Navbar, hero, technology cards, stack, and footer
|-- data/         Technology catalog data
|-- App.tsx       Main application composition
`-- App.css       Application styling and responsive layout
```

## License

(c) 2024 Dev Stack. This project was created for educational and portfolio purposes.



Answer to the questions: 

1. JSX is a syntax that allows to write HTML like codes in JS/TS.
2. In props data is passed from parent to child while in state data is managed inside a component. Props is read only but state can be changed. Props is controlled by parent and state is controlled by the component.
3. useState allows a react component to store a and update data that can change over time.
4. useEffect is used to fetch data, loading the JSON, calling API, Setting up event listeners.
5. React nneds a unique key to indentify each  item in a list 
and it allows the react DOM to work more efficiently. Thats why .map() list always needs an unique key to identify item in a list.
6. Conditional rendering meanns displaying different UI depending on a condition.
7. A parent sends data to a child using props.