import { useNavigate } from 'react-router-dom'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import questionmarkSvg from '../assets/questionmark.svg'
import MainHeader from './MainHeader'
import { useState } from 'react'

function Level3() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //   used in example 2
  let button

  const someArray = [1, 2, 3]

  if (isLoggedIn) {
    button = <button onClick={() => setIsLoggedIn(false)}>Logout</button>
  } else {
    button = <button onClick={() => setIsLoggedIn(true)}>Login</button>
  }

  return (
    <>
      <MainHeader />
      <button onClick={() => navigate(-1)} className="backButton">
        ← Back
      </button>
      {/* CARD1: Meant to showcase useEffect behaviour */}
      <div className="card">
        <ExplanationCard
          explanationCardSvg={questionmarkSvg}
          text="Do you know when does something get added/removed from the DOM?"
        />
        <div>
          A link to the related official documentation can be found{' '}
          <a
            rel="stylesheet"
            href="https://react.dev/reference/react/useEffect"
          >
            here
          </a>
        </div>

        {/* Exmple 1 */}
        <div className="card" style={{ marginTop: '20px' }}>
          <h3>1. If/Else in JSX</h3>
          <p>
            You can use JavaScript's conditional (ternary) operator (condition ?
            true : false) directly in your JSX.
          </p>
          <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
          <p>Check the code in the project!</p>
        </div>

        {/* Exmple 2 */}
        <div className="card">
          <h3>2. Element Variables</h3>
          <p>
            You can use variables to store elements. This can help you
            conditionally render a part of the component while the rest of the
            output doesn’t change.
          </p>
          <div>
            <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>
            {button}
          </div>
        </div>

        {/* Exmple 3 */}
        <div className="card">
          <h3>3. Short-circuit operator</h3>
          <p>
            If you want to render either something or nothing, you can use the
            && operator.
          </p>
          <div>
            {isLoggedIn && <h1>Welcome back!</h1>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>

        {/* Exmple 4 */}
        <div className="card">
          <h3>4. Inline If with Logical && Operator</h3>
          <p>
            You may embed any expressions in JSX by wrapping them in curly
            braces. This includes the JavaScript logical && operator.
          </p>
          <div>
            {someArray.length > 0 && isLoggedIn && <h1>Welcome back!</h1>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {someArray.length > 0 && isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Level3
