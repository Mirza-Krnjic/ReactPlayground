# React vs Angular: DOM Rendering & Updates

<img src="https://raw.githubusercontent.com/10Pines/ghost-storage/master/2018/08/Arbol.png"/>

Understanding how React and Angular render and update DOM elements is crucial for developers working with these frameworks. This document provides an overview of the processes involved in both React and Angular.

## React: Virtual DOM and Reconciliation 🔄

<img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2022/2022-10/re-rendering-process.png?sfvrsn=637f6f_3"/>

React uses a concept known as the Virtual DOM to render and update the UI efficiently. The Virtual DOM is a lightweight copy of the actual DOM in memory. React's rendering process involves the following steps:

### Initial Render

1. **Virtual DOM Creation**: React creates a Virtual DOM representation of the UI components.
2. **Diffing Algorithm**: On initial render, React doesn't need to use its diffing algorithm since it's rendering the UI for the first time.
3. **Batch Update**: React updates the actual DOM to match the Virtual DOM in a single batch operation for optimal performance.

### Subsequent Updates

1. **Virtual DOM Update**: When the state or props of a component change, React creates a new Virtual DOM tree.
2. **Reconciliation**: React compares the new Virtual DOM tree with the previous one using the diffing algorithm.
3. **Minimal Updates**: Only the differences (deltas) found during the reconciliation process are applied to the actual DOM, minimizing manipulation and rendering time.

## Angular: Change Detection and Zone.js ⚙️

Angular takes a different approach to rendering and updating the DOM, relying on its change detection mechanism and Zone.js.

### Initial Render

1. **Template Compilation**: Angular compiles templates into highly optimized JavaScript code during the build process.
2. **DOM Rendering**: The compiled templates are rendered to the DOM when a component is initialized, based on its data model.

### Subsequent Updates

1. **Change Detection**: Angular uses a change detection mechanism to monitor changes in the data model. Change detection runs whenever an event that might affect the state occurs (e.g., user input, timer events).
2. **Zone.js**: Angular leverages Zone.js to automatically trigger change detection. Zone.js monkey-patches asynchronous APIs (e.g., `setTimeout`, `Promise.then`) to notify Angular of potential changes.
3. **Update Mechanism**: When a change is detected, Angular updates the component view to reflect the new state. The framework optimizes this process by applying updates only to the components affected by the change.

## Comparison

- **Virtual DOM vs Change Detection**: React's Virtual DOM and reconciliation process allow for efficient updates by minimizing direct DOM manipulation. Angular's change detection, powered by Zone.js, automates the detection of changes and updates the DOM accordingly.
- **Manual vs Automatic**: React's process is more manual, giving developers control over when and how components update through lifecycle methods and hooks. Angular's change detection runs automatically, but developers can optimize performance by configuring change detection strategies.
- **Optimization**: Both frameworks offer ways to optimize rendering and updates. React developers can use `shouldComponentUpdate`, `React.memo`, and `useMemo` to prevent unnecessary re-renders. Angular developers can use `ChangeDetectionStrategy.OnPush` to limit the change detection process to certain conditions.

Understanding these differences is key to optimizing rendering performance and creating efficient, responsive applications with React and Angular.

---

This overview provides a starting point for developers to understand and explore the rendering and update mechanisms of React and Angular further.
