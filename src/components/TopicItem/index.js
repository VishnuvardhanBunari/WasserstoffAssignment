import './index.css'

const TopicItem = props => {
  const {topicDetails} = props
  const {name, content} = topicDetails

  return (
    <div className="topic-item">
      <h1 className="topic-content">{name}</h1>
      <p className="topic-description">{content}</p>
    </div>
  )
}
export default TopicItem
