import '../styles/ExplanationCard.css'

interface ExplanationCardProps {
  explanationCardSvg?: React.ReactNode
  text: string
}

function ExplanationCard(props: ExplanationCardProps) {
  return (
    <div className="explanationCard">
      {props.explanationCardSvg && (
        <img
          className="explanationCardSvg"
          src={props.explanationCardSvg.toString()}
          alt="LightBulb"
        />
      )}
      <div>{props.text}</div>
    </div>
  )
}

export default ExplanationCard
