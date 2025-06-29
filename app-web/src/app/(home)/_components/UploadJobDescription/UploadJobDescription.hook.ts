import { FormEvent, useState } from 'react';

function useUploadJobDescription() {
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch('http://127.0.0.1:8000/api/job-description', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobDescription),
    });
  };

  return {
    handleSubmit,
  };
}

export default useUploadJobDescription;
