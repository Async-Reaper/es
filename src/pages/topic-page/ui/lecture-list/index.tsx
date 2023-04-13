import React, {useState} from 'react';
import cls from "../styles.module.scss";
import {API_URL} from "../../../../shared/libs/constants/baseURL";
import {ModalWindow, Typography} from "../../../../shared/ui";
import {ResourceType} from "../../model/types";
import {DeleteResource} from "features";
import {Comments} from "../comments";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
    lectures: ResourceType[] | undefined
}

const Component: React.FC<Props> = ({lectures}) => {
    const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

    return (
        <div className={cls.resources__list}>
            {lectures?.map(lecture =>
                <>
                    <ModalWindow isVisible={isVisibleDeleteResource} setIsVisible={setIsVisibleDeleteResource}>
                        <DeleteResource id={lecture.id} setVisible={setIsVisibleDeleteResource}/>
                    </ModalWindow>
                    <div className={cls.resource__wrapper}>
                        <div className={cls.delete_topic__btn} onClick={() => setIsVisibleDeleteResource(true)}>
                            <DeleteIcon />
                            <Typography tag={"span"} variant={"small"}>
                                Удалить
                            </Typography>
                        </div>
                        <a
                            className={cls.link}
                            href={`${API_URL}${lecture.file}`}
                            target='_blank'
                            download
                            rel='noreferrer'
                        >
                            {lecture.file}
                        </a>
                        <Comments id={lecture.id}/>
                    </div>
                </>
            )}
        </div>
    );
};

export const LectureList = React.memo(Component);
