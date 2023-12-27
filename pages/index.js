// pages/index.js

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div>
      <Head>
        <title>ChatMate - Your Automated Customer Support Agent</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
