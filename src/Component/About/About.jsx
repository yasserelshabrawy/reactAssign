import React from "react";

export default function About() {
  return (
    <>
      <div className="bgMain py-5">
        <div className="container d-flex flex-column justify-content-center align-items-center py-4">
          <h2 className="text-white fw-bolder fs-1 text-center">
            ABOUT COMPONENT
          </h2>
          <div className=" d-flex justify-content-center align-items-center py-4">
            <div className="line me-3"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="row py-5 ">
            <p className="col-md-5 text-white mx-auto fw-normal">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="col-md-5 text-white mx-auto  fw-normal">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
