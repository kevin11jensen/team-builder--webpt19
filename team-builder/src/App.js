import React, { useState } from 'react';
import Form from './components/Form'
import { PlayerCard } from './components/PlayerCard'
import styled from 'styled-components'
import nba from './images/nba.png'
import './App.css';

function App() {
  const [playerCard, setPlayerCard] = useState([
    {
      name: 'Damian Lillard',
      number: '0',
      position: 'PG',
      scouting: 'GOAT'
    }
  ])

  return (
    <MainContainer>
      
        <Form />
        <PlayerCard playerCard = {playerCard} />
      
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div `
  background: url(${nba});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  
`