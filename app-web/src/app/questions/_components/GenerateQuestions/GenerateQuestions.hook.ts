import { use, useEffect, useState } from 'react';
import { SessionContext } from '../../../../providers/SessionProvider';

function useGenerateQuestions() {
  const sessionId = use(SessionContext);
  const [questions, setQuestions] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleGenerate = async () => {
      setLoading(true);
      setError(null);
      setQuestions(null);
      try {
        debugger;
        const res = await fetch(
          'http://127.0.0.1:8000/api/generate-questions',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ session_id: sessionId }),
          }
        );
        if (!res.ok) throw new Error('Failed to generate questions');
        const data = await res.json();
        setQuestions(data.questions);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      handleGenerate();
    }
  }, [sessionId]);

  return {
    error,
    loading,
    questions,
  };
}

export default useGenerateQuestions;
