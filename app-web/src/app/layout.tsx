import { Roboto } from 'next/font/google';
import Providers from '../providers';
import '../styles/index.scss';
import styles from './layout.module.scss';
import { Header } from '../components/Header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Prompt2Prep - Your AI-Powered Interview Preparation Assistant',
  description:
    'Prepare for your interviews with AI-driven insights and personalized feedback. Upload your resume, practice with real interview questions, and get tailored advice to boost your confidence and performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={styles.main}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
