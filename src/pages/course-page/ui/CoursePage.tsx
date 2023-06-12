import React, { useEffect } from 'react';
import { Sidebar } from 'widgets/sidebar/ui/Sidebar/Sidebar';
import {AppLink, Typography} from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {useNavigate, useParams} from 'react-router-dom';
import { getCourse } from 'entities/course/model/api';
import { getCourseSelector } from 'entities/course';
import { TopicList } from 'widgets';
import { getStatusCreateTopicSelector } from 'features/create-topic';
import { getStatusDeleteTopicSelector } from 'features/delete-topic';
import cls from './styles.module.scss';
import {ColoredIcon} from "shared/libs/icons";

const Component = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const dataCourse = getCourseSelector();
  const navigate = useNavigate();

  const statusCreateTopic = getStatusCreateTopicSelector();
  const statusDeleteTopic = getStatusDeleteTopicSelector();

  useEffect(() => {
    dispatch(getCourse(id));
  }, [statusCreateTopic.isSuccess, statusDeleteTopic.isSuccess]);

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
            <div className={cls.link_back} onClick={() => navigate(-1)}>
                <div className={cls.back_icon}>
                    <ColoredIcon name='play_button_player' size={16} />
                </div>
                <Typography tag='span' variant='small'>
                    Назад к курсам
                </Typography>
            </div>
           <div className={cls.course__name}>
              <Typography variant='h3' color='violet-primary'>
                 {dataCourse?.data?.name}
              </Typography>
           </div>
           <div className={cls.course__description}>
              <Typography tag='span' variant='small' color='gray-primary'>
                 {dataCourse?.data?.description}
              </Typography>
           </div>
           <div className={cls.themes__list}>
              <div className={cls.themes__list_title}>
                 <Typography tag='span' variant='body' color='violet-primary'>
                    Доступные темы
                 </Typography>
              </div>
              <TopicList idCourse={id} />
           </div>
        </div>
     </div>
  );
};

export default Component;
