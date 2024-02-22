// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useCallback } from 'react'
import Child from './Child'

const Parent: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [isTriggered, setIsTriggered] = useState<boolean>(false)

  // CASE 1
  // const increment = () => {
  //   setCount((count) => count + 1)
  // }

  // CASE 2
  const increment = useCallback(() => {
    setCount((count) => count + 1)
    // -> What if we put "count" in the deps array?
  }, [])

  console.log('Parent is re-rendering')

  return (
    <div
      style={{ backgroundColor: 'blue', borderRadius: '5px', padding: '10px' }}
    >
      <h2>Parent</h2>
      <button
        onClick={() => setIsTriggered(!isTriggered)}
        style={{ margin: '5px' }}
      >
        Toggle isTrigger
      </button>
      {/* Potential cause of re-render 1: */}
      {/* When we change the isTriggered boolean the Parent needs to re-render to display the change */}
      <p>The change in "isTriggered" will trigger a re-render of the parent:</p>
      <div style={{ margin: '20px' }}>
        {isTriggered ? 'isTriggered: true' : 'isTriggered: false'}
      </div>
      {/* Potential cause of re-render 2: */}
      <button onClick={() => increment()} style={{ margin: '5px' }}>
        Increment in parent
      </button>
      Count: {count}
      {/* Potential cause of re-render 3: */}
      <Child increment={increment} />
    </div>
  )
}

export default Parent
