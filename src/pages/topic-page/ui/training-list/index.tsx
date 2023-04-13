import React, {useState} from 'react';
import cls from "../styles.module.scss";
import {API_URL} from "../../../../shared/libs/constants/baseURL";
import {ModalWindow, Typography} from "../../../../shared/ui";
import {TrainingApparatuses} from "../../model/types";
import {DeleteResource} from "features";
import {Comments} from "../comments";
import {getCookie} from "../../../../shared/libs/cookie";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    trainings: TrainingApparatuses[] | undefined
}

const Component: React.FC<Props> = ({trainings}) => {
    const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

    return (
        <div className={cls.resources__list}>
            {trainings?.map(training =>
                <div className={cls.resource__wrapper}>
                    {
                        getCookie('is_teacher') === 'true' &&
                        <div className={cls.delete_topic__btn} onClick={() => setIsVisibleDeleteResource(true)}>
                            <DeleteIcon />
                            <Typography tag={"span"} variant={"small"}>
                                Удалить
                            </Typography>
                        </div>
                    }
                    <ModalWindow isVisible={isVisibleDeleteResource} setIsVisible={setIsVisibleDeleteResource}>
                        <DeleteResource id={training.id} setVisible={setIsVisibleDeleteResource}/>
                    </ModalWindow>
                    <a
                        className={cls.link}
                        href={`${API_URL}${training.link}`}
                        target='_blank'
                        download
                        rel='noreferrer'
                    >
                        {training.link}
                    </a>
                    <Comments id={training.id}/>
                </div>
            )}
        </div>
    );
};

export const TrainingsList = React.memo(Component);
