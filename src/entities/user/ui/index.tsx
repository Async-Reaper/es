import React, { useEffect, useState } from 'react';
import {getInfoUser, getInfoUserSelector, UserType} from 'entities/user';
import {
  Avatar, Button, ModalWindow, Typography,
} from 'shared/ui';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch';
// @ts-ignore
import dateFormat from 'dateformat';
import { ChangeEmail, ChangePassword } from 'features';
import cls from './styles.module.scss';
import ava from '../img/ava.png';
import {API_URL} from "shared/constants/baseURL";


interface Props {
    user: UserType | null | undefined
}

const Component: React.FC<Props> = ({user}) => {
  const [isVisibleChangeEmail, setIsVisibleChangeEmail] = useState(false);
  const [isVisibleChangePassword, setIsVisibleChangePassword] = useState(false);

  const dateReg: string = dateFormat(user?.registration_date, 'isoDateTime').replace(/T/, ' ');

  return (
     <div className={cls.user_info}>
        <div className={cls.top_info_part}>
           <Avatar src={user?.icon ? `${API_URL}`+ user?.icon : ava} variant='xl' />
           <Typography variant='h1' color='violet-primary'>
              #
              {user?.id}
           </Typography>
        </div>
        <div className={cls.other__info}>
           <div className={cls.info_item}>
              <Typography variant='body' color={'black-bg'}>ФИО:</Typography>
              <Typography variant='body' color='violet-primary'>
                 {user?.full_name}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='body' color={'black-bg'}>Почта:</Typography>
              <Typography variant='body' color='violet-primary'>
                 {user?.email}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Typography variant='body' color={'black-bg'}>Дата регистрации:</Typography>
              <Typography variant='body' color='violet-primary'>
                 {dateReg.slice(0, dateReg?.length - 8)}
              </Typography>
           </div>
           <div className={cls.info_item}>
              <Button variant={"xs"} onClick={() => setIsVisibleChangeEmail(true)}>Сменить адрес</Button>
              <Button variant={"xs"} onClick={() => setIsVisibleChangePassword(true)}>Сменить пароль</Button>
           </div>
        </div>
        <ModalWindow
          isVisible={isVisibleChangeEmail}
          setIsVisible={() => setIsVisibleChangeEmail(!isVisibleChangeEmail)}
        >
           <ChangeEmail setVisible={setIsVisibleChangeEmail} />
        </ModalWindow>
        <ModalWindow
          isVisible={isVisibleChangePassword}
          setIsVisible={() => setIsVisibleChangePassword(!isVisibleChangePassword)}
        >
           <ChangePassword setVisible={setIsVisibleChangePassword} />
        </ModalWindow>
     </div>
  );
};

export const User = React.memo(Component);
