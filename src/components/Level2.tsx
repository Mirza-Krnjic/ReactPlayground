import { useNavigate } from 'react-router-dom'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import lightBulbSvg from '../assets/lightBulb.svg'
import MainHeader from './MainHeader'

function Level2() {
  const navigate = useNavigate()

  return (
    <>
      <MainHeader />
      <button onClick={() => navigate(-1)} className="backButton">
        ← Back
      </button>
      {/* CARD1: How to manipulate a simple state */}
      <div className="card">
        <ExplanationCard explanationCardSvg={lightBulbSvg} text="Dummy test" />
        <p>Dummy text</p>

        <p>Check the code in the project!</p>
      </div>
    </>
  )
}

export default Level2
