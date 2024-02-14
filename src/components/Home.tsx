import '../App.css'
import { useNavigate } from 'react-router-dom'
import viteLogo from '../../public/vite.svg'
import reactLogo from '../assets/react.svg'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <h1
          style={{
            color: 'hotpink',
            textShadow: '2px 2px 4px #ff00ff',
            fontSize: '50px'
          }}
        >
          React Learning Path
        </h1>
        <div className="basicContainer">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>

      <div className="card">
        <p>The first step to master React is to learn how State works!</p>
        <button
          onClick={() => {
            navigate('/Counter')
          }}
        >
          Go to Counter
        </button>
      </div>
    </>
  )
}

export default Home
