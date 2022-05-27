import React from "react";
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/layout";

import bgImage from '../assets/images/background.jpg'

export default function Home() {
    
   return(
        <Layout bgImage={bgImage}>
            <Header />
            
        </Layout>
    )

}