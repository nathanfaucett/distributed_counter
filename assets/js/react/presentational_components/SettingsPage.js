import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { goToRoom } from '../../redux/actions/asyncActions';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  display: grid;
  grid-template: 35% 1fr / 1fr;

  width: 100%;
  height: 100%;

  font-family: 'Press Start 2P';
`;

const TitleBox = styled(FlexCenter)`
  background-color: ${props => props.theme.colors.lightGreen};
  border-radius: 10px;
  font-size: 60px;
  user-select: none;

  @media screen and (max-width: 720px) {
    font-size: 50px;
  }

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px
  }
`;

const Form = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  font-size: 30px;
`;

const FormField = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled(FlexCenter)`
  margin: 10px;
  width: 220px;
  height: 60px;
  background-color: ${props => props.theme.colors.red};
  text-align: center;
  border-radius: 20px;

  color: white;
  user-select: none;
`;

const ButtonPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`

const StyledInput = styled.input`
  width: calc(100% - 10px);
  height: 60px;

  text-align: center;

  border: hidden;
  font-family: 'Press Start 2P';
  font-size: 20px;

  color: grey;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px
  }
`;

export const SettingsPage = ({setRoom, me, room, setRandomRoom, goToRoom}) => <Page>
  <TitleBox><div>Count Me In!</div></TitleBox>

  <Form>
    <FormField>
      <p>Channel</p>
      <StyledInput
        onChange={event => setRoom(event.target.value)}
        spellcheck="false"
        value={room}
        placeholder="Pick a Channel Name!"
        onKeyDown={event => { if (event.key === "Enter") { goToRoom() } }}
      />
    </FormField>

    <ButtonPanel>
      <StyledButton onClick={setRandomRoom}>
        Random
      </StyledButton>
      <StyledButton onClick={goToRoom}>
        GO!
      </StyledButton>
    </ButtonPanel>
  </Form>
</Page>