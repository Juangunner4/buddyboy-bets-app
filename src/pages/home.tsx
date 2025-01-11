import React from "react";
import NavBar from "../components/NavBar";

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
      </main>
    </div>
  );
};

export default HomePage;
