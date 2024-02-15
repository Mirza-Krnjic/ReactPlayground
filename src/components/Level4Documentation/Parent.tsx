import Child from './Child'
import '../../App.css'
import { useEffect, useState } from 'react'

function Parent() {
  const [money, setMoney] = useState<number>(0)

  useEffect(() => {
    console.log('Parent rendered')
  })

  return (
    <div className="parent">
      <div className="text">Parent has this amount of money: {money}</div>
      <button
        onClick={() => {
          setMoney(money + 10)
        }}
      >
        Increase parents money
      </button>
      <div>
        <p>Im the parent and here is the child:</p>
        <Child />
      </div>
    </div>
  )
}

export default Parent
