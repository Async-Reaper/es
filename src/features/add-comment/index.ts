export { AddComment } from './ui';
export { addComment } from './model/api';

export {
  addCommentActions,
  addCommentReducer,
} from './model/slice';

export { type AddCommentType, type AddCommentSchema } from './model/types';
export {
  getStatusAddCommentSelector,
} from './model/selectors';
