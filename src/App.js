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
  state = {
    score: 0,
    yourChoice: '',
    opponentChoice: '',
    isPlayOn: true,
    gameResult: '',
  }

  onSelectingChoiceButton = id => {
    const opponentButton = Math.floor(Math.random() * (choicesList.length + 1))
    if (id === 'ROCK') {
      if (opponentButton.id === 'SCISSORS') {
        this.setState(prevState => ({
          yourChoice: 'ROCK',
          opponentChoice: opponentButton.id,
          score: prevState.score + 1,
          gameResult: 'YOU WON',
          isPlayOn: false,
        }))
      } else if (opponentButton.id === 'PAPER') {
        this.setState(prevState => ({
          yourChoice: 'ROCK',
          opponentChoice: opponentButton.id,
          score: prevState.score - 1,
          gameResult: 'YOU LOSE',
          isPlayOn: false,
        }))
      } else if (opponentButton.id === 'ROCK') {
        this.setState({
          yourChoice: 'ROCK',
          opponentChoice: opponentButton.id,
          gameResult: 'IT IS DRAW',
          isPlayOn: false,
        })
      }
    } else if (id === 'SCISSORS') {
      if (opponentButton.id === 'ROCK') {
        this.setState(prevState => ({
          yourChoice: 'SCISSORS',
          opponentChoice: opponentButton.id,
          score: prevState.score - 1,
          gameResult: 'YOU LOSE',
          isPlayOn: false,
        }))
      } else if (opponentButton.id === 'PAPER') {
        this.setState(prevState => ({
          yourChoice: 'SCISSORS',
          opponentChoice: opponentButton.id,
          score: prevState.score + 1,
          gameResult: 'YOU WON',
          isPlayOn: false,
        }))
      } else if (opponentButton.id === 'SCISSORS') {
        this.setState({
          yourChoice: 'SCISSORS',
          opponentChoice: opponentButton.id,
          gameResult: 'IT IS DRAW',
          isPlayOn: false,
        })
      }
    } else if (id === 'PAPER') {
      if (opponentButton.id === 'ROCK') {
        this.setState(prevState => ({
          yourChoice: 'PAPER',
          opponentChoice: opponentButton.id,
          score: prevState.score + 1,
          gameResult: 'YOU WON',
          isPlayOn: false,
        }))
      } else if (opponentButton.id === 'SCISSORS') {
        this.setState(prevState => ({
          yourChoice: 'PAPER',
          opponentChoice: opponentButton.id,
          score: prevState.score - 1,
          gameResult: 'YOU LOSE',
          isPlayOn: false,
        }))
      } else if (opponentButton.id === 'PAPER') {
        this.setState({
          yourChoice: 'PAPER',
          opponentChoice: opponentButton.id,
          gameResult: 'IT IS DRAW',
          isPlayOn: false,
        })
      }
    }
  }

  restartingGame = () => {
    this.setState({isPlayOn: true})
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
          onSelectingChoiceButton: this.onSelectingChoiceButton,
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
