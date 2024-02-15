import React, { useState, useCallback } from 'react'
import Child from './Child'

const Parent: React.FC = () => {
  console.log('Parent is re-rendering')

  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  return (
    <div>
      Count: {count}
      <Child increment={increment} />
    </div>
  )
}

export default Parent
