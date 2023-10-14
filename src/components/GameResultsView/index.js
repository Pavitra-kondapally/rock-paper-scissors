import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import ScoreContext from '../../context/ScoreContext'

import 'reactjs-popup/dist/index.css'

import {
  AppContainer,
  TeamsContainer,
  EachTeamContainer,
  TeamText,
  TeamImage,
  PlayAgainButton,
  PopupContainer,
  RulesButton,
  RulesImage,
  ClosePopupButton,
} from './styledComponents'
import Header from '../Header'

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

const GameResultsView = () => (
  <ScoreContext.Consumer>
    {value => {
      const {yourChoice, opponentChoice, gameResult, restartingGame} = value
      const yourChoiceImage = choicesList.find(
        eachChoice => eachChoice.id === yourChoice,
      ).imageUrl
      const opponentChoiceImage = choicesList.find(
        eachChoice => eachChoice.id === opponentChoice,
      ).imageUrl
      const onClickingPlayAgain = () => {
        restartingGame()
      }
      return (
        <AppContainer>
          <Header />
          <TeamsContainer>
            <EachTeamContainer>
              <TeamText>YOU</TeamText>
              <TeamImage src={yourChoiceImage} alt="your choice" />
            </EachTeamContainer>
            <EachTeamContainer>
              <TeamText>OPPONENT</TeamText>
              <TeamImage src={opponentChoiceImage} alt="opponent choice" />
            </EachTeamContainer>
          </TeamsContainer>
          <TeamText>{gameResult}</TeamText>
          <PlayAgainButton onclick={onClickingPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
          <PopupContainer>
            <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
              {close => (
                <>
                  <div>
                    <ClosePopupButton onClick={() => close()}>
                      <RiCloseLine />
                    </ClosePopupButton>
                    <RulesImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                </>
              )}
            </Popup>
          </PopupContainer>
        </AppContainer>
      )
    }}
  </ScoreContext.Consumer>
)

export default GameResultsView
