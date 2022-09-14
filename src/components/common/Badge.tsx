import React from 'react';

import './_badges.scss';

interface Props {
  children?: any;
  variant?: string;
  align?: 'left' | 'center' | 'right';
}

const Badge: React.FC<Props> = ({ children, variant, align = 'left' }) => {
  return (
    <section className="badges">
      <div className={`content ${variant ? variant: ''} ${align ? align : ''}`}>{children}</div>
    </section>
  );
};
export default Badge;
