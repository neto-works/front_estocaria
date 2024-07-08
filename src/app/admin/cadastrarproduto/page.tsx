import { SpaceX10 } from "@/components/Atons";
import FormProduto from "@/components/Screen/FormCreateProduto";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function CreateNewProduto() {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }


    return (
        <div className="w-full h-full flex flex-col items-center content-center p-10 ">
            <h2 className="text-5xl py-5">Area de cadastro de Produtos </h2>
            <SpaceX10 />
            <FormProduto/>

        </div>
    );
}