'use client';

import { uploadResumeAction } from './UploadResume.action';

function UploadResume() {
  return (
    <form action={uploadResumeAction} method="post">
      {/* <input type="file" accept=".pdf,.doc,.docx" /> */}
      <textarea
        cols={50}
        name="resume"
        placeholder="Paste your resume text here"
        rows={10}
      />
      <br />
      <button type="submit">Upload Resume</button>
    </form>
  );
}

export default UploadResume;
