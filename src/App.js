import {Component} from 'react'
import Header from './components/Header'
import PlayingView from './components/PlayingView'
import GameResultsView from './components/GameResultsView'
import ScoreContext from './context/ScoreContext'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestIdValue: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataTestIdValue: 'rockButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestIdValue: 'rockButton',
  },
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      yourChoice: '',
      opponentChoice: '',
      isPlayOn: true,
      gameResult: '',
    }

    // Bind the function to the class instance
    this.selectingYourChoiceButton = this.selectingYourChoiceButton.bind(this)
  }

  restartingGame = () => {
    this.setState({isPlayOn: true})
  }

  selectingYourChoiceButton(id) {
    const opponentIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[opponentIndex].id

    console.log(`opponent choice ${opponentChoice}`)

    if (id === opponentChoice) {
      this.setState({
        yourChoice: id,
        opponentChoice,
        gameResult: 'IT IS DRAW',
        isPlayOn: false,
      })
    } else if (
      (id === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (id === 'PAPER' && opponentChoice === 'ROCK') ||
      (id === 'SCISSORS' && opponentChoice === 'PAPER')
    ) {
      this.setState(prevState => ({
        yourChoice: id,
        opponentChoice,
        score: prevState.score + 1,
        gameResult: 'YOU WON',
        isPlayOn: false,
      }))
    } else {
      this.setState(prevState => ({
        yourChoice: id,
        opponentChoice,
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
        isPlayOn: false,
      }))
    }
    console.log(`your choice ${id}`)
  }

  render() {
    const {score, yourChoice, opponentChoice, isPlayOn, gameResult} = this.state

    return (
      <ScoreContext.Provider
        value={{
          score,
          yourChoice,
          opponentChoice,
          isPlayOn,
          gameResult,
          selectingYourChoiceButton: this.selectingYourChoiceButton,
          restartingGame: this.restartingGame,
        }}
      >
        <Header />
        {isPlayOn ? <PlayingView /> : <GameResultsView />}
      </ScoreContext.Provider>
    )
  }
}

export default App
