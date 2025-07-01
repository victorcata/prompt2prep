'use client';

import useGenerateQuestions from './GenerateQuestions.hook';

function GenerateQuestions() {
  const { error, loading, questions } = useGenerateQuestions();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {questions && (
        <div>
          <h3>Generated Questions:</h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{questions}</pre>
        </div>
      )}
    </div>
  );
}

export default GenerateQuestions;
