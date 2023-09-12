import React from "react";
import homeImg from "../assets/avataaars.png";


export default function Home() {
  return (
    <>
      <div className="bgMain paddingSection">
        <div className="container d-flex flex-column justify-content-center align-items-center m-auto py-4">
          <img src={homeImg} alt="" className=" mb-5" />
          <h2
            className="text-white fw-bolder fs-1 text-center" >
           START FRAMEWORK
          </h2>
          <div className=" d-flex justify-content-center align-items-center py-4">
            <div className="line me-3"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="line ms-3"></div>
          </div>
          <h3 className="text-white fw-light h4 text-center">Graphic Artist - Web Designer - Illustrator</h3>
        </div>
      </div>
    </>
  );
}
