import React from "react";

export default function Contact() {
  return (
    <>
      \
      <div className="container">
        <h2 className="textDark fw-bolder mt-3 fs-1 text-center">
          CONATCT SECTION
        </h2>
        <div className=" d-flex justify-content-center align-items-center pb-5">
          <div className="lineDark me-3"></div>
          <i class="fa-solid fa-star textDark"></i>
          <div className="lineDark ms-3"></div>
        </div>
        <div className="row py-5">
          <div className="col-md-6 mx-auto ">
            <label htmlFor="">userName:</label>
            <input type="text" className="form-control" />
            <label htmlFor="">urAge:</label>
            <input type="number" className="form-control" />
            <label htmlFor="">userEmail:</label>
            <input type="email" className="form-control" />
            <label htmlFor="">userPassword:</label>
            <input type="password" className="form-control" />
            <button className="btn bgMain  my-3 text-white">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
