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
          text="Here you can find some bonus material and documentation"
        />
        <ul>
          <li>
            Great platform for learning and practicing TS:
            <a href="https://typehero.dev/"> typehero.dev</a>
          </li>
          <li>
            Hobby material right there:
            <a href="https://leetcode.com/"> leetcode.com</a>
          </li>
          <li>
            A youtube channel about react:
            <a href="https://www.youtube.com/@CodeSketched/featured">
              {' '}
              Code Sketched
            </a>
          </li>
          <li>
            A youtube channel about angular:
            <a href="https://www.youtube.com/@JoshuaMorony"> Joshua Morony</a>
          </li>
          <li>
            To VIM or not to VIM:
            <a href="https://www.youtube.com/watch?v=-txKSRn0qeA">
              {' '}
              Fireship VIM in 100s
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Level2
