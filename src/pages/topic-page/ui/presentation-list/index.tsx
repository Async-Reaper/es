import React, {useState} from 'react';
import cls from "../styles.module.scss";
import {API_URL} from "../../../../shared/libs/constants/baseURL";
import {ModalWindow, Typography} from "../../../../shared/ui";
import {ResourceType} from "../../model/types";
import {DeleteResource} from "features";
import {Comments} from "../comments";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
    presentations: ResourceType[] | undefined
}

const Component: React.FC<Props> = ({presentations}) => {
    const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

    return (
        <div className={cls.resources__list}>
            {presentations?.map(presentation =>
                <div className={cls.resource__wrapper}>
                    <div className={cls.delete_topic__btn} onClick={() => setIsVisibleDeleteResource(true)}>
                        <DeleteIcon />
                        <Typography tag={"span"} variant={"small"}>
                            Удалить
                        </Typography>
                    </div>
                    <ModalWindow isVisible={isVisibleDeleteResource} setIsVisible={setIsVisibleDeleteResource}>
                        <DeleteResource id={presentation.id} setVisible={setIsVisibleDeleteResource} />
                    </ModalWindow>
                    <a
                        className={cls.link}
                        href={`${API_URL}${presentation.file}`}
                        target='_blank'
                        download
                        rel='noreferrer'
                    >
                        {presentation.file }
                    </a>
                    <Comments id={presentation.id} />
                </div>
            )}
        </div>
    );
};

export const PresentationList = React.memo(Component);
