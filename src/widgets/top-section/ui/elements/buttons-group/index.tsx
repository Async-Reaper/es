import React from 'react';
import { Icon } from 'shared/libs/icons';
import { Button, Typography } from 'shared/ui';
import cls from './styles.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";



const Component = () => (
   <div className={cls.content__buttons}>
       <Link to={'test'} spy={true} smooth={true} duration={500}>
           <Button variant='l' background='violet-primary'>
               <Typography tag='span' variant='body'>
                   Начать сейчас
               </Typography>
               <Icon name='play' size={22} />
           </Button>
       </Link>
       <Link to={'additional'} spy={true} smooth={true} duration={500}>
           <Button variant='l' background='gray-primary' border>
               <Typography tag='span' variant='body'>
                   Подробнее
               </Typography>
               <Icon name='arrow_right' width={30} height={10} color='violet-primary' />
           </Button>
       </Link>
   </div>
);

export const ButtonsGroup = React.memo(Component);
