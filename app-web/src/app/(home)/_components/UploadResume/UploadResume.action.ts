'use server';

export async function uploadResumeAction(formData: FormData) {
  const resume = formData.get('resume');

  const response = await fetch('http://127.0.0.1:8000/api/upload-resume', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ resume }),
  });

  return response.json();
}
