import {Component} from 'react'
import TopicItem from '../TopicItem'
import './index.css'

class Topics extends Component {
  state = {
    topics: [],
  }

  componentDidMount() {
    this.getTopics()
  }

  getTopics = async () => {
    const response = await fetch(
      'https://636f3003f2ed5cb047d748f8.mockapi.io/Topicsdata',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      content: eachItem.content,
    }))
    this.setState({
      topics: formattedData,
    })
  }

  render = () => {
    const {topics} = this.state
    const shouldShowUserList = topics.length > 0

    return shouldShowUserList ? (
      <div className="get-topic-container" style={{marginTop: '8%'}}>
        <h1 className="topic-list">Topic List</h1>
        <ul className="topic-list">
          {topics.map(eachTopic => (
            <TopicItem key={eachTopic.id} topicDetails={eachTopic} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-topics">
        <h1 className="heading">No data found</h1>
      </div>
    )
  }
}

export default Topics
