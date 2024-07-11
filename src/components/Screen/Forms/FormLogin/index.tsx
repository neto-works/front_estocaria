"use client";
import { toast } from "react-toastify";
import React, { FormEvent, ReactNode } from 'react';
import Styles from "./loginForm.module.css";
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = (): ReactNode => {
    const router = useRouter();

    const handleSumitAuth = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dados = { email: formData.get("email"), password: formData.get("senha") }
        try {
            const response = await signIn("credentials", {
                redirect: false,
                ...dados,
                callbackUrl: "/admin"
            });

            if (response?.error) {
                toast.error("Credenciais invalidas! tente novamente com as credenciais certas, vlw major");
                router.push("/signin");
            } else if (response?.url) {
                router.push(response.url);
            }
        } catch (error) {
            toast.error("Esse erro aqui foi fuderoso: " + error);
            router.push("/signin");
        }

    };

    return (
        <div className='w-full lg:w-1/2 sm:w-full'>
            <form onSubmit={handleSumitAuth}>
                <div className={`${Styles.card2} ${Styles.card} border-0 px-4 py-5`}>

                    <div className="flex flex-col px-3">
                        <h2 className='text-center py-10'>Logue no Sistema</h2>
                    </div>

                    <div className="flex flex-col px-3">
                        <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label>
                        <input className="mb-4 p-2 border border-gray-300 rounded" type="email" name="email" placeholder="Enter a valid email address" />
                    </div>
                    <div className="flex flex-col px-3">
                        <label className="mb-1">
                            <h6 className={`mb-0 ${Styles.textSm}`}>Password</h6>
                        </label>
                        <input className="p-2 border border-gray-300 rounded" type="password" name="senha" placeholder="Enter password" />
                    </div>
                    <div className="flex items-center px-3 mb-4">
                        <div className="custom-control custom-checkbox custom-control-inline">
                        </div>
                        <a href="#" className="ml-auto mb-0 text-sm text-blue-500">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex justify-center mb-3 px-3">
                        <button type="submit" className="btn-primary text-white py-2 px-4 rounded w-1/4 text-center">Login</button>
                    </div>
                    <div className="flex justify-center mb-4 px-3">
                        <small className="font-bold text-blue-500">
                            Dont have an account?{" "}
                            <Link href="/create-user" className="text-green-500">Register</Link>
                        </small>
                    </div>
                </div>
            </form >
        </div>

    );
};

export default LoginForm;