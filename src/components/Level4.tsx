import { useNavigate } from 'react-router-dom'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import lightBulbSvg from '../assets/lightBulb.svg'
import challangeSvg from '../assets/challange.svg'
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

        <ExplanationCard
          explanationCardSvg={challangeSvg}
          text="Challange: Here you are supposed to test all the React optimization techniques you know and prove that they work!"
        />

        <h2>Optimization Testing Ground</h2>

        <Parent />
        <div style={{ marginTop: '20px' }}>
          A link to the related official documentation can be found{' '}
          <a
            rel="stylesheet"
            href="https://react.dev/learn/updating-objects-in-state#why-is-mutating-state-not-recommended-in-react"
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
