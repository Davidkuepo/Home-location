import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import ButtonWrapper from '../../components/ButtonWrapper';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (username.trim().length < 3) {
      newErrors.username = "Le nom d'utilisateur doit contenir au moins 3 caractères";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "L'adresse email est invalide";
    }
    if (password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log('Formulaire soumis', { username, email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
          <TextInput
            label="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errors.username}
            placeholder="Entrez votre nom d'utilisateur"
            name="username"
          />
          <TextInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            placeholder="Entrez votre email"
            name="email"
          />
          <PasswordInput
            label="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            placeholder="Entrez votre mot de passe"
            name="password"
          />
          <PasswordInput
            label="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            placeholder="Confirmez votre mot de passe"
            name="confirmPassword"
          />
          <ButtonWrapper type="submit" variant="primary" fullWidth>
            S'inscrire
          </ButtonWrapper>
        </form>
        <div className="mt-4 flex justify-end">
          <Link to="/login" className="text-sm text-gray-600 hover:text-primary">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
