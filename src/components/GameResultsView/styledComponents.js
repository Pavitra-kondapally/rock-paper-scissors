import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(to bottom, #223a5f, #ffffff);
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TeamsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const EachTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TeamText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const TeamImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`
export const PlayAgainButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #ffffff;
  color: #223a5f;
`
export const PopupContainer = styled.div`
  align-self: right;
`
export const RulesButton = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #223a5f;
`
export const RulesImage = styled.img`
  height: 500px;
  width: 600px;
`
export const ClosePopupButton = styled.button`
  font-size: 20px;
  margin-left: auto;
`
