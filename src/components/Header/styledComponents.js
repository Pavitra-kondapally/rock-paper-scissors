import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background-color: #223a5f;
  height: 150px;
  width: 90vw;
  border-radius: 10px;
  border-style: solid;
  border-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`
export const ChoiceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`
export const ListItem = styled.li`
  color: #ffffff;
  font-family: 'Roboto';
  margin: 10px;
`
export const ScoreContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
`
