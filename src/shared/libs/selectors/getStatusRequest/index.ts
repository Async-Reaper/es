import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusRequest = () => useAppSelector((state) => state.request);
