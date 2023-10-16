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
    dataTestIdValue: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestIdValue: 'paperButton',
  },
]

const PlayingView = () => (
  <ScoreContext.Consumer>
    {value => {
      const {selectingYourChoiceButton} = value
      const onSelectingChoiceButton = id => {
        if (typeof selectingYourChoiceButton === 'function') {
          selectingYourChoiceButton(id)
        }
      }
      return (
        <AppContainer>
          <ButtonsList>
            {choicesList.map(eachChoice => (
              <OptionButtonItem
                key={eachChoice.id}
                optionDetails={eachChoice}
                onSelectingChoiceButton={onSelectingChoiceButton}
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
      )
    }}
  </ScoreContext.Consumer>
)

export default PlayingView
