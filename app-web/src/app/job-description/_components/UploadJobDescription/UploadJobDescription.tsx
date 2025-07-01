'use client';

import { uploadJobDescriptionAction } from './UploadJobDescription.action';
import styles from './UploadJobDescription.module.scss';

function UploadJobDescription() {
  return (
    <form
      className={styles.main}
      action={uploadJobDescriptionAction}
      method="post"
    >
      <input
        type="hidden"
        name="session_id"
        value={localStorage.getItem('session_id') || ''}
      />
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
