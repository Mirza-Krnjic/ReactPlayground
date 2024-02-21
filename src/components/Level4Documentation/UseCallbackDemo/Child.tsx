import React from 'react'

interface ChildProps {
  increment: () => void
}

// -> Why React.memo
// Can you build a scenario without React.memo
const Child: React.FC<ChildProps> = React.memo(({ increment }) => {
  console.log('Child is re-rendering')

  return (
    <div
      style={{
        border: '1px solid white',
        borderRadius: '5px',
        padding: '10px',
        marginTop: '15px'
      }}
    >
      <h3>Child</h3>
      <button onClick={increment}>Increment in Child</button>
    </div>
  )
})

export default Child
