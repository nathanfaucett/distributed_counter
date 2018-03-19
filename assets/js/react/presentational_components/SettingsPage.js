import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  display: grid;
  grid-template: 20% 1fr / 1fr;

  width: 100%;
  height: 100%;

  font-family: 'Press Start 2P';
`;

const TitleBox = styled(FlexCenter)`
  background-color: ${props => props.theme.colors.red};
  color: white;

  font-size: 60px;

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  font-size: 30px;
`;

const FormField = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.green};
  height: 50px;
`;

const StyledInput = styled.input`

`;

export const SettingsPage = ({setMe, setRoom, me, room}) => <Page>
  <TitleBox><div>Count Me In!</div></TitleBox>

  <Form>
    <FormField>
      <p>Username</p>
      <StyledInput onChange={event => setMe(event.target.value)} value={me}/>
    </FormField>

    <FormField>
      <p>Channel</p>
      <StyledInput onChange={event => setRoom(event.target.value)} value={room}/>
    </FormField>
  </Form>

  <Button to="/counter">Join</Button>
</Page>