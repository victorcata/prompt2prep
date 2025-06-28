'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) =>
        setMessage('Could not fetch message: ' + error.message)
      );
  }, []);

  return (
    <main>
      <h1>Backend Message:</h1>
      <p>{message}</p>
    </main>
  );
}
