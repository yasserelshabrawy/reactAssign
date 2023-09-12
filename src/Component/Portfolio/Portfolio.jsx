import React from "react";
import ph1 from "../assets/poert1.png";
import ph2 from "../assets/port2.png";
import ph3 from "../assets/port3.png";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="container">
      <div className="py-1">
      <h2 className="fs-10 textDark fw-bolder text-center ">
          PORTFOLIO COMPONENT
        </h2>
        <div className=" d-flex justify-content-center align-items-center pb-3">
          <div className="lineDark me-3"></div>
          <i class="fa-solid fa-star textDark"></i>
          <div className="lineDark ms-3"></div>
        </div>
      </div>
        <div className="row g-4 pb-3">
          <div className="col-lg-4 col-md-6 ">
            <div className=" position-relative overflow-hidden rounded-3">
              <img src={ph1} className="w-100 " alt="" />
              <div className="overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                <i className="fas fa-plus text-white fa-6x"></i> 
                </button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className=" position-relative overflow-hidden rounded-3">
              <img src={ph2} className="w-100 " alt="" />
              <div className="overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                <i className="fas fa-plus text-white fa-6x"></i> 
                </button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className=" position-relative overflow-hidden rounded-3">
              <img src={ph3} className="w-100 " alt="" />
              <div className="overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                <i className="fas fa-plus text-white fa-6x"></i> 
                </button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className=" position-relative overflow-hidden rounded-3">
              <img src={ph1} className="w-100 " alt="" />
              <div className="overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                <i className="fas fa-plus text-white fa-6x"></i> 
                </button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className=" position-relative overflow-hidden rounded-3">
              <img src={ph2} className="w-100 " alt="" />
              <div className="overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                <i className="fas fa-plus text-white fa-6x"></i> 
                </button>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className=" position-relative overflow-hidden rounded-3">
              <img src={ph3} className="w-100 " alt="" />
              <div className="overlay position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                <i className="fas fa-plus text-white fa-6x"></i> 
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal"
        tabindex="-1"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog d-flex justify-content-center align-items-center h-100">
          <img src={ph1} className="w-100 " alt="" />
        </div>
      </div>
      
      <div
        class="modal"
        tabindex="-1"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog d-flex justify-content-center align-items-center h-100">
          <img src={ph2} className="w-100 " alt="" />
        </div>
      </div>
      <div
        class="modal"
        tabindex="-1"
        id="exampleModal3"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog d-flex justify-content-center align-items-center h-100">
          <img src={ph3} className="w-100 " alt="" />
        </div>
      </div>

    </>
  );
}
