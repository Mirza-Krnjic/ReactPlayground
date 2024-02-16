# React.memo example

```tsx
import React from 'react'

const Child = React.memo(({ message }) => {
  console.log('Child component rendered')
  return <div>{message}</div>
})
```

```tsx
import React, { useState } from 'react'
import Child from './Child' // Assuming Child is in a file named Child.js

const Parent = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello from Parent')

  return (
    <div>
      <Child message={message} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMessage('Message Updated')}>
        Update Message
      </button>
      <p>Count: {count}</p>
    </div>
  )
}
```

In this example:

- The Child component will only re-render when its message prop changes, not when the count state in the Parent component changes.

- This is because React.memo is used to memoize the Child component based on its props. Clicking the "Increment Count" button updates the count state in the Parent component, but since this doesn't affect the props of the Child component, the Child does not re-render.

- Clicking the "Update Message" button updates the message state, which is passed as a prop to the Child. Since this prop changes, the Child component will re-render to display the new message.
