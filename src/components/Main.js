import React from "react";

const Main = () => {
  return (
    <main className="flex justify-between p-10 bg-indigo-200 text-white">
      {/* left */}
      <div className="w-1/2 my-20 mr-10">
        <h1 className="text-6xl mb-10 text-yellow-200">
          Welcome to Doggy City
        </h1>
        <p className="text-2xl mb-10">There is never a sad day here.</p>
        <button>Explore More</button>
        <button>Get Started</button>
      </div>
      {/* right */}
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Welcome Dog"
          className="w-full rounded shadow-2xl"
        />
      </div>
    </main>
  );
};

export default Main;
