import { v4 as uuidv4 } from 'uuid';

export  const generateUniqueKey = (): string => { return uuidv4(); };
export const URL_BACKEND = "http://localhost:5017/api";
