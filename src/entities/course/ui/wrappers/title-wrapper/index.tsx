import React, { type FC, ReactNode } from 'react';
import cls from './styles.module.scss';

interface Props {
  children: ReactNode
}
const Component: FC<Props> = ({ children }) => (
   <div className={cls.course__title}>
      {children}
   </div>
);

export const TitleWrapper = React.memo(Component);
