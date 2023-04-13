import React, {useState} from 'react';
import cls from "../styles.module.scss";
import {API_URL} from "../../../../shared/libs/constants/baseURL";
import {ModalWindow, Typography} from "../../../../shared/ui";
import {AddComment} from "../../../../features/add-comment/ui";
import {CommentsList} from "../../../../widgets/comments-list";
import {ResourceType} from "../../model/types";
import {DeleteResource} from "features";
import DeleteIcon from "@mui/icons-material/Delete";
import {Comments} from "../comments";

interface Props {
    videos: ResourceType[] | undefined
}

const Component: React.FC<Props> = ({videos}) => {
    const [isVisibleDeleteResource, setIsVisibleDeleteResource] = useState(false);

    return (
        <div className={cls.resources__list}>
            {videos?.map(video =>
                <div className={cls.resource__wrapper}>
                    <div className={cls.delete_topic__btn} onClick={() => setIsVisibleDeleteResource(true)}>
                        <DeleteIcon />
                        <Typography tag={"span"} variant={"small"}>
                            Удалить
                        </Typography>
                    </div>
                    <ModalWindow isVisible={isVisibleDeleteResource} setIsVisible={setIsVisibleDeleteResource}>
                        <DeleteResource id={video.id} setVisible={setIsVisibleDeleteResource}/>
                    </ModalWindow>
                    <div className={cls.video__lessons}>
                        <video
                            src={`${API_URL}${video.file}`}
                            controls
                        >
                            <source src={`${API_URL}${video.file}`}/>
                        </video>
                        <Comments id={video.id} />
                    </div>
                </div>
            )}
        </div>
    );
};

export const VideoList = React.memo(Component);
