import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import ButtonWrapper from '../../components/ButtonWrapper';

console.log('LoginForm.jsx is running');

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "L'adresse email est invalide";
    }
    if (password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Soumettre le formulaire
      console.log('Formulaire soumis', { email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <ButtonWrapper type="submit" variant="primary" fullWidth>
            Connexion
          </ButtonWrapper>
        </form>
        <div className="mt-4 flex justify-between">
          <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-primary">
            Mot de passe oublié ?
          </Link>
          <Link to="/register" className="text-sm text-gray-600 hover:text-primary">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
