import Link from 'next/link';
import UploadJobDescription from './_components/UploadJobDescription/UploadJobDescription';
import { UploadResume } from './_components/UploadResume';

export default function Home() {
  return (
    <main>
      <UploadResume />
      <UploadJobDescription />
      <Link href="/questions">Go to Questions Page</Link>
    </main>
  );
}
