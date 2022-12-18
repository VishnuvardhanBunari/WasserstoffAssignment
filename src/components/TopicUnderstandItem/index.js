import './index.css'

const TopicUnderstandItem = props => {
  const {topicUnderstandDetails} = props
  const {name} = topicUnderstandDetails

  return (
    <div className="understand-container">
      <p>{name}</p>
      <p>10%</p>
    </div>
  )
}
export default TopicUnderstandItem
