import React from "react";
import darkImage from "../assets/images/david-by-michelangelo.jpg";
import lightImage from "../assets/images/lightDavid.jpeg";
import Nav from "../components/Nav";

function Home({ darkMode }) {
  const backgroundImage = darkMode ? `url(${darkImage})` : `url(${lightImage})`;

  return (
    <main className="Home main-font p-3" style={{ backgroundImage }}>
      <div className="grid grid-rows-3">
        <div className="grid grid-cols-3 text-start">
          <div className="scroll-container">
            <h1 className="text-4xl">Developer</h1>
          </div>
          <div className="scroll-animation col-start-1 flex">
            <h1 className="text-3xl flex">
              {" "}
              <p className="mr-1">&</p> Designer
            </h1>
          </div>
          <div className="mt-10 col-start-1">
            <Nav />
          </div>
        </div>
        <div className="grid grid-cols-4 row-start-3">
          <p className="col-start-4 col-span-1 font-bold">
            Thank you for visiting my page!<br></br><br></br> My name is <a className=" text-teal-300" href="https://www.linkedin.com/in/david-dowell95/" target="_blank" rel="noreferrer">David Dowell</a> and I am an
            aspiring web designer.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
