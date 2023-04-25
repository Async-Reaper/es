import React, {Suspense, useState} from 'react';
import {Sidebar} from 'widgets/sidebar';
import {AppLink, Loader, Typography} from 'shared/ui';
import cls from './styles.module.scss';
import {CoursesType} from "../../../widgets/courses-list";

const Component = () => {
    const [coursesList, setCoursesList] = useState(JSON.parse(localStorage.getItem('grouped_course') || ''))

    return (
        <Suspense fallback={<Loader/>}>
            <div className='page_platform'>
                <Sidebar/>
                <div className='page_platform__content'>
                    <div className={cls.name_block}>
                        <Typography variant='h3' color='violet-primary'>Обучение по дисциплинам</Typography>
                    </div>
                    <div className={cls.courses__wrapper}>
                        {coursesList.map((course: CoursesType) => (
                            <AppLink to={`/course/${course.id}`} className={cls.course__link}>
                                <div aria-label={course.id.toString()} className={cls.course__wrapper}>
                                    <div
                                        className='course__title'
                                    >
                                        <Typography tag='h1' variant='body'>{course.name}</Typography>
                                    </div>
                                </div>
                            </AppLink>
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Component;
