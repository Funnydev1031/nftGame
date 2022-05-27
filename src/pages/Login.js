import React from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout/layout";
import { LoginWrapper } from "../components/Login/Login";

export default function Login() {
    console.log('*******login');
    return (
        <Layout>
            <Header />
            <LoginWrapper/>
        </Layout>
    )
}