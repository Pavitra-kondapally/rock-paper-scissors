import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'
import {
  AppContainer,
  ButtonsList,
  PopupContainer,
  RulesButton,
  RulesImage,
  ClosePopupButton,
} from './styledComponents'
import OptionButtonItem from '../OptionButtonItem'
import Header from '../Header'
import ScoreContext from '../../context/ScoreContext'

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

class PlayingView extends Component {
  state = {
    yourChoice: '',
    opponentChoice: '',
    score: 0,
    gameResult: '',
    isPlayOn: true,
  }

  onSelectingChoiceButton = id => {
    const opponentIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[opponentIndex].id

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
  }

  render() {
    return (
      <ScoreContext.Consumer>
        {value => (
          <AppContainer>
            <Header />
            <ButtonsList>
              {choicesList.map(eachChoice => (
                <OptionButtonItem
                  key={eachChoice.id}
                  optionDetails={eachChoice}
                  onSelectingChoiceButton={this.onSelectingChoiceButton}
                />
              ))}
            </ButtonsList>
            <PopupContainer>
              <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
                {close => (
                  <>
                    <div>
                      <RulesImage
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                      />
                    </div>
                    <ClosePopupButton onClick={() => close()}>
                      <RiCloseLine />
                    </ClosePopupButton>
                  </>
                )}
              </Popup>
            </PopupContainer>
          </AppContainer>
        )}
      </ScoreContext.Consumer>
    )
  }
}

export default PlayingView
