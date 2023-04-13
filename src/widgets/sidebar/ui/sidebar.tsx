import React, {useCallback, useEffect, useState} from 'react';
import {ColoredIcon, Icon} from 'shared/libs/icons';
import {AppLink, Avatar, Button, Toolbar, Typography} from 'shared/ui';
import cls from './styles.module.scss';
import {Logout} from "features";
import ava from '../../../entities/user/img/ava.png'
import {getInfoUser, getInfoUserSelector} from "../../../entities/user";
import {useAppDispatch} from "../../../shared/libs/hooks/useAppDispatch";
import {API_URL} from "../../../shared/libs/constants/baseURL";
import LoginIcon from '@mui/icons-material/Login';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Component = () => {
    const user = getInfoUserSelector();
    const dispatch = useAppDispatch();
    const token: string = localStorage.getItem('token') || '';

    const [isVisibleClue, setIsVisibleClue] = useState(false);

    const onShowVisibleClue = useCallback(() => {
        setIsVisibleClue(true)
    }, [])

    const onHideVisibleClue = useCallback(() => {
        setIsVisibleClue(false)
    }, [])
    useEffect(() => {
        token && dispatch(getInfoUser());
    }, [dispatch, token]);

    return (
        <div className={cls.sidebar_wrapper}>
            <div className={cls.logo_wrapper}>
                <AppLink to='/platform'>
                    <ColoredIcon name='logo' color='gray-secondary' size={59}/>
                </AppLink>
            </div>
            <div className={cls.links_wrapper}>
                <div className={cls.sidebar_link__wrapper}>
                    <AppLink to='/private-cabinet'>
                        {
                            user.data ?
                                <Avatar src={user.data.icon ? `${API_URL}${user.data.icon}` : ava} variant={'l'}
                                        rounded/> :
                                <Icon name='user' color='violet-primary' size={46}/>
                        }
                    </AppLink>
                </div>
                <div className={cls.sidebar_link__wrapper}>
                    <AppLink to='/platform'>
                        <Icon name={'home'} size={46} color={"violet-primary"}/>
                    </AppLink>
                </div>
                <div className={cls.sidebar_link__wrapper}>
                    <AppLink to='/'>
                        <Icon name='back' color='violet-primary' size={46}/>
                    </AppLink>
                </div>
                <div className={cls.logout_wrapper}>
                    {
                        user.data ?
                            <Logout isIcon={true}/> :
                            <AppLink
                                to={'/private-cabinet'}
                                onMouseOver={onShowVisibleClue}
                                onMouseOut={onHideVisibleClue}
                            >
                                <LoginIcon color="secondary" sx={{fontSize: 40}}/>
                                <Toolbar isVisible={isVisibleClue}>Войти</Toolbar>
                            </AppLink>
                    }
                </div>
            </div>
        </div>
    )
};

export const Sidebar = React.memo(Component);
