import { cookies } from "next/headers";

export const getTokenDataBackend = async ():Promise<string> => {
  const token = cookies().get("jwt_back");
  if (!token) {
    return ''
  }
  return token.value;
};
