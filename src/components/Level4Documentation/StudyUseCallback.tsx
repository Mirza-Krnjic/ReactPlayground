import ExplanationCard from '../ExplanationCard'
import Parent from './UseCallbackDemo/Parent'
import lightBulbSvg from '../../assets/lightBulb.svg'

function StudyUseCallback() {
  return (
    <>
      <ExplanationCard
        explanationCardSvg={lightBulbSvg}
        text="Open the browser inspector!"
      />
      <h3>Learning about the useCallback hook</h3>
      <Parent />
    </>
  )
}

export default StudyUseCallback
