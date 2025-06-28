import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.text())
      .then(setMessage);
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Message from Spring Boot: {message}</p>
    </div>
  );
}

export default App;