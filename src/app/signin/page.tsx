import Styles from "./login.module.css";
import Image from "next/image";
import ImagemOriginal from "@public/assets/imgs/original.png";
import Link from "next/link";
import { LoginForm, NavLink } from "@/components/Screen";

export default function Login() {

  return (
    <div className={`w-full ${Styles.container} min-h-full flex flex-col items-center justify-center py-5 bg-white round-side`}>
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
