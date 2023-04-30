import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getTopicSelector = () => useAppSelector((state) => state.topic);
