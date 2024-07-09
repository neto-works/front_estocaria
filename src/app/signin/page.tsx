import Styles from "./login.module.css";
import Image from "next/image";
import ImagemOriginal from "@public/assets/imgs/original.png";
import Link from "next/link";
import { LoginForm, NavLink } from "@/components/Screen";

export default function Login() {

  return (
    <div className={`w-full ${Styles.container} flex flex-col items-center justify-center py-5 bg-white round-side`}>
      <div className="w-72 flex flex-col items-center py-5">
        <NavLink>
          <Link className="link" href={"/"}>Home</Link>
          <Link className="link" href={"/admin"}>Admin</Link>
        </NavLink>
      </div>

      <div className={`${Styles.card} m-10`}>
        <div className="flex flex-col  lg:flex-row">
          <div className="">
            <Image src={ImagemOriginal} alt="Imagem referencia login" priority={true}  />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
