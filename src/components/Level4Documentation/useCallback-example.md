# Use Callback

```jsx
import React, { useState, useCallback } from 'react'
import Child from './Child' // Assuming Child is in a file named Child.js

const Parent = () => {
  const [count, setCount] = useState(0)

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, []) // Dependencies array is empty, so this callback is memoized until the component unmounts

  return (
    <div>
      <Child onButtonClick={incrementCount} />
      <p>Count: {count}</p>
    </div>
  )
}

export default Parent
```

```tsx
import React from 'react'

const Child = ({ onButtonClick }) => {
  console.log('Child component rendered')
  return <button onClick={onButtonClick}>Click Me</button>
}

export default React.memo(Child)
```
