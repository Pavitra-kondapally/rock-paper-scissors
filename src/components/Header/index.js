import {
  HeaderContainer,
  ChoiceList,
  ListItem,
  ScoreContainer,
  ScoreText,
} from './styledComponents'
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

const Header = () => (
  <ScoreContext.Consumer>
    {value => {
      const {score} = value

      return (
        <HeaderContainer>
          <ChoiceList>
            {choicesList.map(eachChoice => (
              <ListItem key={eachChoice.id}>{eachChoice.id}</ListItem>
            ))}
          </ChoiceList>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreText>{score}</ScoreText>
          </ScoreContainer>
        </HeaderContainer>
      )
    }}
  </ScoreContext.Consumer>
)

export default Header
