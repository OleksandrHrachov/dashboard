import React, {FC} from 'react';
import './PaginationBtn.scss';

interface IProps {
  children: React.ReactNode 
  active?: boolean;
}

export const PaginationBtn: FC<IProps> = ({children, active = false}) => {
  return (
    <button type='button' className={`pagination-btn ${active ? 'pagination-btn--active' : ''}`}>{children}</button>
  )
}
