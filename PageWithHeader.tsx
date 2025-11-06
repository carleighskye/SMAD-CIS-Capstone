import UnifiedHeader from './UnifiedHeader';
import { ReactNode } from 'react';

interface PageWithHeaderProps {
  children: ReactNode;
}

export default function PageWithHeader({ children }: PageWithHeaderProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <UnifiedHeader />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
