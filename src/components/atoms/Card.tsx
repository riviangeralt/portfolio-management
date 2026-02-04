import type { ReactNode } from 'react';

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`bg-white rounded shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
