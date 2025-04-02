import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.style.css';
import { BaseButton } from '../../components';

import styled from '@emotion/styled';

/**
 * USAGE: LoginForm description to complete.
 * @example
 * <LoginForm /> 
 */
const LoginForm = ({ propName = 'DefaultPropValue' }) => {

  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');

  const handleClick = () => {
    console.log('Button clicked!', email, password);
  }

  return (
    <Card className="LoginForm" data-testid="LoginForm">

      <Title>FURNISH</Title>
      <SubTitle>Furniture Shop App</SubTitle>

      <Input 
        placeholder="Email" 
        onChange={ e => setEmail(e.target.value)}/>
      <Text>{email}</Text>
      <Input  
        placeholder="Password" 
        onChange={ e => setPassword(e.target.value)}/>
      <Text>{password}</Text>
      <BaseButton onClick={handleClick} > LOGIN </BaseButton>

      <Text>Don't have an account yet ?</Text>
      <Link>Create an account.</Link>
      `
    </Card>
  );
}


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  border-top: 15px solid purple;
  z-index: 1;
  position: absolute;
  bottom:50px;
  min-width: 60vw;
`

const Title = styled.h1`
  text-align: left;
  width: 100%;
  margin:0;
  padding: 0;
  font-size: 1.8rem;
`

const SubTitle = styled.h2`
  text-align: left;
  width: 100%;
  color:gray;
  margin:0;
  margin-bottom: 20px;
  padding: 0;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
`

const Input = styled.input`
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 1rem;
  color:gray;
  background-color: lightgray;
  height: 30px;
  padding: 3px 10px;
`

const Text = styled.p`
  font-size: 0.8rem;
   font-weight: 100;
   margin-bottom:0;
`



const Link = styled.a`
font-size: 0.8rem;
  font-weight: bold;
`

LoginForm.propTypes = {
  propName: PropTypes.string,
};

export default LoginForm;