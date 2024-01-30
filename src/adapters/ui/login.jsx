// LoginForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { loginUser } from '../../core/aplication/userService';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.p`
  color: green;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(identifier, password);
      console.log('Usuario autenticado:', user);
      setSuccessMessage(user.successMessage);
      setErrorMessage(''); // Limpia cualquier mensaje de error anterior
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage(''); // Limpia cualquier mensaje de éxito anterior
    }
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputField
          type="text"
          placeholder="Correo electrónico o Nombre de usuario"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">Login</SubmitButton>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginForm;
