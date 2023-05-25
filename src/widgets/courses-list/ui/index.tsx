import React, {useCallback, useEffect, useState} from 'react';
import { AppLink, Typography } from 'shared/ui';
import { getAllCoursesSelector } from 'widgets/courses-list/model/selector/getAllCoursesSelector';
import { CoursesType } from 'widgets/courses-list/model/types';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getAllCourse } from 'widgets/courses-list/model/api/getAllCourse';
import cls from './styles.module.scss';

const Component = () => {
  const coursesList = getAllCoursesSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  return (
     <div className={cls.courses__wrapper}>
       <AppLink to={'/course/grouped-course'} className={cls.course__link}>
         <div className={cls.course__wrapper}>
           <div className={cls.course_bookmark} />
           <div
               className='course__title'
           >
             <Typography tag='h1' variant='body'>Обучение по дисциплинам</Typography>
           </div>
         </div>
       </AppLink>
        {coursesList.data?.map((course: CoursesType) => (
            !course.is_grouped &&
            <AppLink to={`/course/${course.id}`} className={cls.course__link}>
              <div aria-label={course.id.toString()} className={cls.course__wrapper}>
                <div className={cls.course_bookmark} />
                <div
                    className='course__title'
                >
                  <Typography tag='h1' variant='body'>{course.name}</Typography>
                </div>
              </div>
            </AppLink>
        ))}
     </div>
  );
};

export const CoursesList = React.memo(Component);
