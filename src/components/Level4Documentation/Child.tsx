interface ChildProps {
  increment: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
const Child: React.FC<ChildProps> = ({ increment }) => {
  console.log('Child is re-rendering')

  return <button onClick={increment}>Increment in Child</button>
}

export default Child

// Hooks to test:
// useMemo
// useCallback
// React.memo
