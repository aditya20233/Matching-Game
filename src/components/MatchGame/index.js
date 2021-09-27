import {Component} from 'react'

import GenerateItem from '../GenerateItem'

import GenerateImage from '../GenerateImage'

import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    count: 0,
    key2: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    key3: true,
    key4: 'FRUIT',
  }

  componentDidMount() {
    this.timerId = setInterval(this.Tic, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  Tic = () => {
    const {count} = this.state
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
    if (count + 1 === 60) {
      this.setState({key3: false})
      clearInterval(this.timerId)
    }
  }

  OnReset = () => {
    const {imagesList} = this.props
    const Num = Math.ceil(Math.random() * 100) % 30
    this.timerId = setInterval(this.Tic, 1000)
    this.setState({score: 0, count: 0, key2: imagesList[Num].id, key3: true})
  }

  OnClickButton = tableId => {
    this.setState({key4: tableId})
  }

  OnClickImage = id => {
    const {key2} = this.state
    const {imagesList} = this.props

    const Num = Math.ceil(Math.random() * 100) % 30

    if (key2 === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        key2: imagesList[Num].id,
      }))
    } else {
      this.setState({key3: false})
      clearInterval(this.timerId)
    }
  }

  render() {
    const {score, count, key2, key3, key4} = this.state
    const item1 = key4
    const sec = 60 - count >= 10 ? 60 - count : `0${60 - count}`
    const sec1 = count >= 60 ? '00' : sec
    const {tabsList, imagesList} = this.props
    const newImagesList = imagesList.filter(
      forEach => forEach.category === key4,
    )
    const ImageList = imagesList.filter(forEach => forEach.id === key2)
    const Image = ImageList[0].imageUrl

    return (
      <div className="bg-container">
        <nav className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            className="img0"
            alt="website logo"
          />
          <ul className="nav-side">
            <p className="para">
              Score: <span className="span">{score}</span>
            </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
              className="img2"
              alt="timer"
            />
            <p className="span">{sec1} sec</p>
          </ul>
        </nav>
        {key3 && (
          <div className="card1">
            <img src={Image} className="img3" alt="match" />
            <ul className="ul-list">
              {tabsList.map(forEach => (
                <GenerateItem
                  item={forEach}
                  key={forEach.tabId}
                  OnClickButton={this.OnClickButton}
                  item1={item1}
                />
              ))}
            </ul>
            <ul className="ul-list1">
              {newImagesList.map(forEach => (
                <GenerateImage
                  item={forEach}
                  key={forEach.id}
                  OnClickImage={this.OnClickImage}
                />
              ))}
            </ul>
          </div>
        )}
        {!key3 && (
          <div className="card2">
            <div className="card3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                className="img7"
                alt="trophy"
              />
              <p className="head2">Your Score</p>
              <p className="head2">{score}</p>
              <button className="button1" type="button" onClick={this.OnReset}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  className="img10"
                  alt="reset"
                />
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
