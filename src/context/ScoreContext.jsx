import React from 'react'

const ScoreContext = React.createContext({
  score: 0,
  yourChoice: '',
  opponentChoice: '',
  isPlayOn: true,
  selectingYourChoiceButton: () => {},
  restartingGame: () => {},
})

export default ScoreContext
