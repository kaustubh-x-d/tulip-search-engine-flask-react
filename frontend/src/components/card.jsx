import './card.css'

const Card = ({ title, link }) => {
  return (
    <div className="result-card">
      <h3 className="result-title">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="result-link"
      >
        Visit Link
      </a>
    </div>
  )
}

export default Card