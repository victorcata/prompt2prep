'use server';

export async function uploadJobDescriptionAction(formData: FormData) {
  const jobDescription = formData.get('job_description');

  const response = await fetch(
    'http://127.0.0.1:8000/api/upload-job-description',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ job_description: jobDescription }),
    }
  );

  return response.json();
}
