'use client';

import { uploadResumeAction } from './UploadResume.action';
import styles from './UploadResume.module.scss';

function UploadResume() {
  return (
    <form className={styles.main} action={uploadResumeAction} method="post">
      {/* <input type="file" accept=".pdf,.doc,.docx" /> */}
      <input
        type="hidden"
        name="session_id"
        value={localStorage.getItem('session_id') || ''}
      />
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
