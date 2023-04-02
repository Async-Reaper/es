import { useAppSelector } from 'shared/libs/hooks/useAppSelector';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getAllCoursesSelector = () => useAppSelector((state) => state.courses);
