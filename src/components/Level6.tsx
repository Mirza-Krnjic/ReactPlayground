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
      <h3>Level 6</h3>
      {/* Main Card Content */}
      <div className="card">
        <ExplanationCard
          explanationCardSvg={lightBulbSvg}
          text="In the code project in the Level6Documentation folder you have markdown file listed."
        />
        <div>
          A link to the related official React documentation can be found{' '}
          <a rel="stylesheet" href="https://react.dev/reference/react/">
            here
          </a>
        </div>
        <div>
          A link to the related official Angular documentation can be found{' '}
          <a rel="stylesheet" href="https://angular.io/docs">
            here
          </a>
        </div>
        <p>Check the code in the project!</p>
      </div>
    </>
  )
}

export default Level2
