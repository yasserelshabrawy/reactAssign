import React from "react";

export default function Footer() {
  return (<>
  
  <footer>
   <div className="container py-5 text-white">
    <div className="row mx-auto text-center">
      <div className="col-md-4">
        <h2>LOCATION</h2>
        <h6>2215 John Daniel Drive</h6>
        <p>Clark, MO 65243</p>
      </div>
      <div className="col-md-4">
        <h2>AROUND THE WEB</h2>
      <div className="social">
        <ul className="list-unstyled d-flex justify-content-center align-items-center gap-3">
          <li><i class="fa-brands fa-facebook pt-1"></i></li>
          <li><i class="fa-brands fa-twitter pt-1"></i></li>
          <li><i class="fa-brands fa-linkedin-in pt-1"></i></li>
          <li><i class="fa-solid fa-globe pt-1"></i></li>
        </ul>
      </div>
      </div>
      <div className="col-md-4">
        <h2>ABOUT FREELANCER</h2>
        <p className="text-white-50">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
      </div>
      </div></div> 
  </footer>
  <div className="copyright text-center py-3 text-white bg-dark">
  Copyright © Your Website 2021
  </div>
  </>
  );
}
