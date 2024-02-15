import { useNavigate } from 'react-router-dom'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import lightBulbSvg from '../assets/lightBulb.svg'
import MainHeader from './MainHeader'
import Parent from './Level4Documentation/Parent'

function Level4() {
  const navigate = useNavigate()

  return (
    <>
      <MainHeader />
      <button onClick={() => navigate(-1)} className="backButton">
        ← Back
      </button>

      <div className="card">
        <ExplanationCard
          explanationCardSvg={lightBulbSvg}
          text="Please, open the Level4 documentation in the Level4Documentation folder"
        />

        <h2>1. Prop Drilling!</h2>

        <Parent />
        <div>
          A link to the related official documentation can be found{' '}
          <a
            rel="stylesheet"
            href="https://react.dev/reference/react/useEffect"
          >
            here
          </a>
        </div>
        <p>Check the code in the project!</p>
      </div>
    </>
  )
}

export default Level4
