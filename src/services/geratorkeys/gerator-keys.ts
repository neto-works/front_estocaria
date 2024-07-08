import { v4 as uuidv4 } from 'uuid';

export  const generateUniqueKey = (): string => { return uuidv4(); };