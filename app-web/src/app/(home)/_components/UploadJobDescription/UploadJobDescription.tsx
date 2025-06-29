'use client';

import { uploadJobDescriptionAction } from './UploadJobDescription.action';

function UploadJobDescription() {
  return (
    <form action={uploadJobDescriptionAction} method="post">
      {/* <input type="file" accept=".pdf,.doc,.docx" /> */}
      <textarea
        cols={50}
        name="job_description"
        placeholder="Paste the job description text here"
        rows={10}
      />
      <br />
      <button type="submit">Upload Job Description</button>
    </form>
  );
}

export default UploadJobDescription;
