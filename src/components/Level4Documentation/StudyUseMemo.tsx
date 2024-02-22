import { useEffect, useMemo, useState } from 'react'

export function MainComponent() {
  // This is the main testing function

  const [list, setList] = useState<number[]>([])

  function GenerateRandomList() {
    const list = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    )
    setList(list)
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            GenerateRandomList()
          }}
        >
          Generate random list
        </button>
        <div style={{ margin: '20px' }}>
          {list.length > 0 ? 'List items:' : 'The list is empty'}
        </div>
        <ChildComponet list={list} />
      </div>
    </>
  )
}

interface ChildProps {
  list: number[]
}

export function ChildComponet({ list }: ChildProps) {
  // useMemo will only recompute the memoized value when one of the dependencies has changed.
  // In this case, it's the 'list' prop. If 'list' doesn't change between renders,
  // the 'sortedList' value will be reused instead of being recalculated.
  const sortedList = useMemo(() => {
    console.log('Child: Sorting list')
    return list.sort((a, b) => a - b)
  }, [list])

  // HINT: Compare it with this
  // const sortedList = () => {
  //   console.log('Child: Sorting list')
  //   return list.sort((a, b) => a - b)
  // }

  return (
    <div>
      {sortedList.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default function StudyUseMemo() {
  const [reload, setReload] = useState<boolean>(false)

  console.log('!!! StudyUseMemo: loaded !!!')

  useEffect(() => {
    console.log('StudyUseMemo: Ive been reloaded')
  }, [reload])

  return (
    <>
      <button onClick={() => setReload(!reload)}>Reload StudyUseMemo</button>
      <MainComponent />
    </>
  )
}
