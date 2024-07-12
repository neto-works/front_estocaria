import { cookies } from "next/headers";

export const getTokenDataBackend = async ():Promise<string | null> => {
  const token = cookies().get("jwt_back");
  if (!token) {
    return null;
  }
  return token.value;
};
