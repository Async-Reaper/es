import React from 'react';
import { AppLink, Avatar } from 'shared/ui';
import { API_URL } from 'shared/constants/baseURL';
import { Icon } from 'shared/libs/icons';
import { UserType } from 'entities/user';
import ava from '../../../../app/images/user/ava.png';

interface Props {
  user: UserType | undefined | null;
  token: string;
}

const Component = ({ user, token }: Props) => (
   <AppLink to='/private-cabinet'>
      {
                user || token
                  ? (
                     <Avatar
                       src={user?.icon
                         ? `${API_URL}${user?.icon}`
                         : ava}
                       variant='l'
                       rounded
                     />
                  )
                  : <Icon name='user' color='violet-primary' size={46} />
            }
   </AppLink>
);

export const SidebarAvatar = React.memo(Component);
