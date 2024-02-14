import { useState, useReducer } from 'react'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import lightBulbSvg from '../assets/lightBulb.svg'

function Counter() {
  // This state is used for the CARD1 example
  const [count, setCount] = useState<number>(0)

  const [state, dispatch] = useReducer(reducer, initialState)

  const setHealth = (health: number) => {
    dispatch({ type: 'SET_HEALTH', payload: health })
  }

  const setType = (type: string) => {
    dispatch({ type: 'SET_TYPE', payload: type })
  }

  const setAttack = (attack: number) => {
    dispatch({ type: 'SET_ATTACK', payload: attack })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <>
      {/* CARD1: How to manipulate a simple state */}
      <div className="card">
        <ExplanationCard
          explanationCardSvg={lightBulbSvg}
          text="The useState hook is crucial for maintaining component-specific data and
        triggering re-renders based on state changes"
        />
        <p>
          Here we use the useState hook to store and manipulate a simple state.
        </p>
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setCount(0)}>Reset Counter</button>

        <p>Check the code in the project!</p>
      </div>

      {/* CARD2: How to manipulate a complex state */}
      <div className="card">
        <p>
          This is a complex state. Lets pretend that these are the stats of our
          game character(warrior)
        </p>
        <div className="customFlexContainer ">
          <div>Health: {state.health}</div>
          <button onClick={() => setHealth(state.health - 10)}>
            Decrease Health
          </button>
        </div>

        <div className="customFlexContainer ">
          <div>Type: {state.type}</div>
          <button onClick={() => setType('Cavalry')}>
            Change Type to Cavalry
          </button>
        </div>

        <div className="customFlexContainer ">
          <div>Attack: {state.attack}</div>
          <button onClick={() => setAttack(state.attack + 5)}>
            Increase Attack
          </button>
        </div>

        <div className="customFlexContainer ">
          <div>Reset to default stats</div>
          {/* Why not call it like this? It works right? */}
          {/* <button onClick={() => reset()}>Reset</button> */}
          <button onClick={reset}>Reset</button>
        </div>

        <ExplanationCard
          explanationCardSvg={lightBulbSvg}
          text="The useReducer hook in React allows for more complex state management by dispatching actions to a reducer function to update state"
        />
      </div>
    </>
  )
}

type StateType = {
  health: number
  type: string
  attack: number
}

type ActionType = {
  type: 'SET_HEALTH' | 'SET_TYPE' | 'SET_ATTACK' | 'RESET'
  payload?: number | string
}

const initialState: StateType = {
  health: 100,
  type: 'Infantry',
  attack: 10
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_HEALTH':
      return { ...state, health: action.payload as number }
    case 'SET_TYPE':
      return { ...state, type: action.payload as string }
    case 'SET_ATTACK':
      return { ...state, attack: action.payload as number }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default Counter
