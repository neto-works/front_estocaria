export const initUserState: FormCreateUserState = {userName: '',email: '',password: '',passwordTwo: '',tipoUsuario: 'ESTOQUISTA'};
export type FormCreateUserState = {userName: string;email: string;password: string;passwordTwo: string;tipoUsuario: "ESTOQUISTA" | "ADMIN";}
export interface IFormCreateUserProps { }