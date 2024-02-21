import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import lightBulbSvg from '../assets/lightBulb.svg'
import challangeSvg from '../assets/challange.svg'
import MainHeader from './MainHeader'
import { Outlet } from 'react-router-dom'

function Level4() {
  const navigate = useNavigate()
  const location = useLocation()
  const isChildRouteActive = location.pathname !== '/Level4'

  return (
    <>
      <MainHeader />
      <button onClick={() => navigate(-1)} className="backButton">
        ← Back
      </button>

      {!isChildRouteActive && (
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

          <button
            onClick={() => {
              navigate('./StudyUseCallback')
            }}
          >
            Study useCallback
          </button>

          <button
            onClick={() => {
              navigate('./StudyUseMemo')
            }}
          >
            Study useMemo
          </button>

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
      )}
      <Outlet />
    </>
  )
}

export default Level4
