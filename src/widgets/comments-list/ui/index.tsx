import React, {useCallback, useEffect, useState} from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Typography } from 'shared/ui';
import { Comment } from 'widgets/comments-list/ui/comment';
import { AnswerComment } from 'widgets/comments-list/ui/answer-comment';
import {commentsActions, getAllComments, getAllCommentsSelector} from 'entities/comments';
import { getStatusAddCommentSelector } from 'features/add-comment';
import { getStatusAddAnswerSelector } from 'features/add-answer-comment';
import cls from './styles.module.scss';
import {CommentType} from "../../../entities/comments/model/types";
import {API_URL, GET_ALL_COMMENTS_ENDPOINT} from "../../../shared/constants/baseURL";
import axios from "axios";

interface Props {
  id: number
}

const Component: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const statusAddComment = getStatusAddCommentSelector();
  const statusAddAnswerComment = getStatusAddAnswerSelector();

  const [comments, setComment] = useState<CommentType[]>([])

  const handleGetAllComment = useCallback(async () => {
      const response = await axios.get(`${API_URL + GET_ALL_COMMENTS_ENDPOINT + id}/comments/`);
      setComment(response.data)
      return response.data;
  }, [dispatch, id]);

  useEffect(() => {
    const allComments = handleGetAllComment();
  }, [statusAddComment.isSuccess, statusAddAnswerComment.isSuccess]);

  return (
     <div className={cls.comments__wrapper}>
        {comments?.length !== 0 && (
        <div className={cls.comments__title}>
           <Typography variant='body' color='violet-primary' tag='strong'>Комментарии</Typography>
        </div>
        )}
        {comments?.map((comment) => (
           <div className={cls.comment}>
              <Comment comment={comment} />
              <div className={cls.answers__wrapper}>
                 {comment.answers.map((answer) => (
                    <AnswerComment answerComment={answer} />
                 ))}
              </div>
           </div>
        ))}
     </div>
  );
};

export const CommentsList = React.memo(Component);
