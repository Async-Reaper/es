import React from 'react';
import cls from './styles.module.scss';
import {classNames} from "../../libs/helpers/classNames";

const Component = () => {
    return (
        <div className={cls.loader__wrapper}>
            <div className={cls.sk_cube_grid}>
                <div className={classNames(cls.sk_cube, [cls.sk_cube1], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube2], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube3], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube4], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube5], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube6], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube7], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube8], {} )}></div>
                <div className={classNames(cls.sk_cube, [cls.sk_cube9], {} )}></div>
            </div>
        </div>
    );
};

export const Loader = React.memo(Component);
