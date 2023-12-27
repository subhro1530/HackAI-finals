// pages/index.js

import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Your App Name</title>
      </Head>
      <Navbar />
      {/* Rest of your content */}
      <h1>Welcome to StreetSync</h1>
    </div>
  );
};

export default Home;
