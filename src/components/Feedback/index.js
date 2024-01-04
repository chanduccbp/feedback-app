// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onGivingFeedback = () => {
    this.setState({isFeedbackGiven: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackGiven} = this.state

    return (
      <div className="bg-container">
        {isFeedbackGiven && (
          <div className="card">
            <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
        {!isFeedbackGiven && (
          <div className="card">
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="e-cont">
              {emojis.map(eachObj => (
                <li>
                  <img
                    src={eachObj.imageUrl}
                    alt={eachObj.name}
                    key={eachObj.id}
                    className="emoji"
                    onClick={this.onGivingFeedback}
                  />
                  <p className="e-name">{eachObj.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
