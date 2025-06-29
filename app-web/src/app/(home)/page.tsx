import UploadJobDescription from './_components/UploadJobDescription/UploadJobDescription';
import { UploadResume } from './_components/UploadResume';

export default function Home() {
  return (
    <main>
      <UploadResume />
      <UploadJobDescription />
    </main>
  );
}
