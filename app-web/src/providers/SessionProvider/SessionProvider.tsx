'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';

export const SessionContext = createContext<string | null>(null);

function SessionProvider({ children }: { children: ReactNode }) {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('session_id');
    if (stored) {
      setSessionId(stored);
    } else {
      fetch('http://127.0.0.1:8000/api/create-session', { method: 'POST' })
        .then((res) => res.json())
        .then((data) => {
          setSessionId(data.session_id);
          localStorage.setItem('session_id', data.session_id);
        });
    }
  }, []);

  return (
    <SessionContext.Provider value={sessionId}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
