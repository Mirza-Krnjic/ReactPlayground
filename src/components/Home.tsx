import '../App.css'
import { useNavigate } from 'react-router-dom'
import viteLogo from '../../public/vite.svg'
import reactLogo from '../assets/react.svg'
import MainHeader from './MainHeader'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <MainHeader />
        <div className="basicContainer">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>

      {/* Level 1 Card */}
      <div className="card">
        <h2>Level 1</h2>
        <h3>State Management</h3>
        <p>The first step to master React is to learn how State works!</p>
        <button
          onClick={() => {
            navigate('/Level1')
          }}
        >
          Practice State
        </button>
      </div>

      {/* Level 2 Card */}
      <div className="card">
        <h2>Level 2</h2>
        <h3>Lifecycle Methods</h3>
        <p>Understand the component lifecycle and side effects management</p>
        <button
          onClick={() => {
            navigate('/Level2')
          }}
        >
          Explore Effects
        </button>
      </div>

      {/* Level 3 Card */}
      <div className="card">
        <h2>Level 3</h2>
        <h3>Conditional Rendering</h3>
        <p>
          Lets explore all the ways we can accomplish conditional rendering in
          React
        </p>
        <button
          onClick={() => {
            navigate('/Level3')
          }}
        >
          Explore Effects
        </button>
      </div>

      {/* Level 4 Card */}
      <div className="card">
        <h2>Level 4</h2>
        <h3>Project Structure and Optimization</h3>
        <p>
          In this section we will explore all the ways one can optimize a react
          application
        </p>
        <button
          onClick={() => {
            navigate('/Level4')
          }}
        >
          Study optimization
        </button>
      </div>

      {/* Level 5 Card */}
      <div className="card">
        <h2>Level 5</h2>
        <h3>React Router Routing</h3>
        <p>Lets explore the routing in the react way</p>
        <button
          onClick={() => {
            navigate('/Level5')
          }}
        >
          Route me
        </button>
      </div>
    </>
  )
}

export default Home
