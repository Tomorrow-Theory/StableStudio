import React, { useState } from 'react';

const ProtectedPage = () => {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const checkPassword = () => {
    if (password === import.meta.env.VITE_SECRET_PASSWORD) {
      setAccessGranted(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  if (accessGranted) {
    return <div>Contenu protégé</div>;
  }

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkPassword}>Accéder</button>
    </div>
  );
};

export default ProtectedPage;