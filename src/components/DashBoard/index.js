import {Component} from 'react'
import TopicUnderstandItem from '../TopicUnderstandItem'
import Header from '../Header'
import './index.css'

class DashBoard extends Component {
  state = {
    topicList: [],
  }

  componentDidMount() {
    this.getTopicsList()
  }

  getTopicsList = async () => {
    const response = await fetch(
      'https://636f3003f2ed5cb047d748f8.mockapi.io/Topicsdata',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
    }))
    this.setState({
      topicList: formattedData,
    })
  }

  render = () => {
    const {topicList} = this.state
    return (
      <div>
        <Header />
        <div className="dashboard-container">
          <h1>Topics List</h1>
          <ul className="topic-list-understand">
            {topicList.map(eachTopic => (
              <TopicUnderstandItem
                key={eachTopic.id}
                topicUnderstandDetails={eachTopic}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DashBoard
