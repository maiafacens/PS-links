import './styles.css';

import { ReactNode } from 'react';

export interface ButtonProps {
  text: string;
  href: string;
  _blank?: boolean;
  icon?: ReactNode;
}

export function Button({ text, href, _blank = true, icon }: ButtonProps) {
  const handleBtnClick = () => {
    window.open(href, _blank ? '_blank' : '_self')
  }

  return (
    <button onClick={handleBtnClick} className='btn'>
      {icon && icon}
      {text}
    </button>
  )
}

