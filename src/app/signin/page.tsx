import Styles from "./login.module.css";
import Image from "next/image";
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
            <Image src="/assets/imgs/original.png" width={300} height={200} layout="responsive" priority={true} alt="Imagem referencia login" />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}