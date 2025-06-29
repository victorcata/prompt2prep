import './styles/reset.scss';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
