import { FormEvent, useState } from 'react';

function useUploadResume() {
  const [resume, setResume] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch('http://127.0.0.1:8000/api/upload-resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resume),
    });
  };

  return {
    handleSubmit,
  };
}

export default useUploadResume;
