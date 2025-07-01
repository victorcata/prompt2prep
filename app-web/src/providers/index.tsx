import { ReactNode } from 'react';
import SessionProvider from './SessionProvider/SessionProvider';
import { MuiProvider } from './MuiProvider';

function Providers({ children }: { children: ReactNode }) {
  return (
    <MuiProvider>
      <SessionProvider>{children}</SessionProvider>
    </MuiProvider>
  );
}

export default Providers;
