import { ReactNode } from 'react';
import SessionProvider from './SessionProvider';

function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;
