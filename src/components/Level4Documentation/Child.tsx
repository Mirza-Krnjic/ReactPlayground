import { useEffect } from 'react'

function Child() {
  useEffect(() => {
    console.log('Child rendered')
  })

  return (
    <div className="child">
      <h4>Child</h4>
    </div>
  )
}

export default React.memo(Child)
