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
      {/* Main Card Content */}
      <div className="card">
        <ExplanationCard
          explanationCardSvg={lightBulbSvg}
          text="Chect the Level7Documentation folder in the project files!"
        />
        <p>Check the code in the project!</p>
      </div>
    </>
  )
}

export default Level2
