import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'
import Topics from '../Topics'
import './index.css'

const AddTopic = () => {
  const submitHandler = event => {
    event.preventDefault()
    const name = event.target.name.value
    const content = event.target.content.value

    const data = {name, content}

    axios
      .post('https://636f3003f2ed5cb047d748f8.mockapi.io/Topicsdata', data)
      .then(response => {
        console.log(response)
        event.target.reset()
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <div className="topic-container">
        <NavLink className="dashboard-page" to="/">
          <AiOutlineLeft />
          DashBoard
        </NavLink>
        <div className="buttons-container">
          <h1>Any call action</h1>
          <button
            type="button"
            value="understand"
            id="understand"
            className="button understand"
          >
            understand
          </button>
          <button
            type="button"
            value="somewhatUnderstood"
            id="somewhatUnderstood"
            className="button some-what-understand"
          >
            somewhat understood
          </button>
          <button
            type="button"
            value="notClear"
            id="notClear"
            className="button not-clear"
          >
            Not clear
          </button>
          <button
            type="button"
            value="whatRubbish"
            id="whatRubbish"
            className="button what-rubbish"
          >
            What rubbish
          </button>
        </div>
        <form
          className="add-topic-container"
          id="contactForm"
          onSubmit={submitHandler}
        >
          <h1 className="add-topic-heading">Add Topic</h1>
          <div className="input-containers">
            <label className="label" htmlFor="topicName">
              Topic name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter topic name"
              className="input-name"
              name="name"
              required
            />

            <label className="label" htmlFor="topic-name">
              Topic content
            </label>
            <textarea
              type="text"
              id="content"
              name="content"
              placeholder="Enter content"
              className="input-content"
              required
            />
          </div>
          <button className="add-topic" type="submit">
            Add
          </button>
        </form>
      </div>
      <Topics />
    </div>
  )
}
export default AddTopic
