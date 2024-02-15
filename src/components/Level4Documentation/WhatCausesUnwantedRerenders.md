# React App Optimisation

What can cause the app to rerender unnecessarily?

1. Improper Use of State and Props

   - Frequent State Updates: Excessive or unnecessary updates to the component's state can trigger re-renders.

2. Misuse of Context

   - Broad Contexts: A large context that updates often can cause many consuming components to re-render unnecessarily.
   - Nested Context Providers: Placing context providers deep in the component tree or not properly memoizing context values can lead to re-renders.

3. Unoptimized Conditional Rendering

   - Dynamic Conditions: Using conditions that frequently change or are computed inline can lead to unnecessary re-renders.
   - Inline Functions and Objects: Defining functions or objects inline in the JSX can cause child components to re-render since these are created new on each render.

4. Inefficient Use of Effects

   - Excessive useEffect Calls: Misconfigured dependencies in useEffect, useMemo, or useCallback can cause these hooks to run more often than needed.
   - Unnecessary Side Effects: Triggering side effects that lead to state changes in components not related to the effect's purpose.

5. Large Component Trees

   - Deep Component Trees: Deeply nested component trees can lead to significant rendering delays, especially if the components at the top of the tree re-render.
