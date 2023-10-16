import {
  HeaderContainer,
  ChoiceList,
  ScoreContainer,
  ScoreText,
} from './styledComponents'
import ScoreContext from '../../context/ScoreContext'

const Header = () => (
  <ScoreContext.Consumer>
    {value => {
      const {score} = value

      return (
        <HeaderContainer>
          <ChoiceList>ROCK PAPER SCISSORS</ChoiceList>
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
