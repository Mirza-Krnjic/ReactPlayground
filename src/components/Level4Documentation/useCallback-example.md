# Use Callback

```jsx
import React, { useState, useCallback } from 'react'
import Child from './Child' // Assuming Child is in a file named Child.js

const Parent = () => {
  const [count, setCount] = useState(0)

  // Using useCallback to memoize the callback function
  const onButtonClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, []) // Dependencies array is empty, meaning this function is created once

  return (
    <div>
      <Child onButtonClick={onButtonClick} />
      <p>Count: {count}</p>
    </div>
  )
}

export default Parent
```

```tsx
import React from 'react'

interface ChildProps {
  onButtonClick: () => void // Define the type of onButtonClick prop
}

const Child: React.FC<ChildProps> = ({ onButtonClick }) => {
  console.log('Child component rendered')
  return <button onClick={onButtonClick}>Click Me</button>
}

export default React.memo(Child)
```
