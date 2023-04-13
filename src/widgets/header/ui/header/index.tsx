import React, {type FC, useCallback, useEffect, useState} from 'react';
import {ColoredIcon} from 'shared/libs/icons';
import {
    AppLink,
    Button,
    Container,
    ModalWindow,
    Typography,
    Toolbar
} from 'shared/ui';
import {Auth, Logout} from 'features';
import {useAppDispatch} from 'shared/libs/hooks/useAppDispatch';
import {getInfoUser, getInfoUserSelector} from 'entities/user';
import cls from './styles.module.scss';

interface Props {

}

const Component: FC<Props> = () => {
    const dispatch = useAppDispatch();
    const [isVisibleLogin, setIsVisibleLogin] = React.useState(false);
    const userData = getInfoUserSelector();
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
    }, []);

    return (
        <div className={cls.header}>
            <Container>
                <div className={cls.header__inner}>
                    <div className={cls.header__logo}>
                        <ColoredIcon name='logo' size={59}/>
                        <small className={cls.logo__text}>
                            Кузбасский колледж архитектуры, строительства и цифровых технологий
                        </small>
                    </div>
                    <div className={cls.buttons__group}>
                        {
                            userData
                                ? (
                                    <div className={cls.header_user__settings}>
                                        <AppLink to={'/private-cabinet'}
                                                 onMouseOver={onShowVisibleClue}
                                                 onMouseOut={onHideVisibleClue}
                                        >
                                            <Typography>
                                                {userData?.data?.full_name}
                                            </Typography>
                                        </AppLink>
                                        <Logout/>
                                        <Toolbar isVisible={isVisibleClue}>
                                            Перейти в личный кабинет
                                        </Toolbar>
                                    </div>
                                )
                                : (
                                    <Button variant='xs' onClick={() => setIsVisibleLogin(!isVisibleLogin)}>
                                        Вход
                                    </Button>
                                )
                        }
                    </div>
                </div>
                <ModalWindow
                    isVisible={isVisibleLogin}
                    setIsVisible={() => setIsVisibleLogin(!isVisibleLogin)}
                >
                    <Auth setVisible={setIsVisibleLogin}/>
                </ModalWindow>
            </Container>
        </div>
    );
};

export const Header = React.memo(Component);