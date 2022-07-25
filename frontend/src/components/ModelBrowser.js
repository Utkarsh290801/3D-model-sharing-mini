import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ModelBrowser = () => {
  const [threeDArray, setthreeDArray] = useState([]);

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/3dmodel/getall");
    const data = await response.json();
    console.log(data);
    setthreeDArray(data);
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);
         
  return (
    <div>
      <div className="container-fluid mt-5 ">
        <div className="row text-center">
          {threeDArray.map((curr) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src={"https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"} class="img-fluid"/>
      <a href="#!">
        <div className="mask" ></div>
      </a>
    </div>
                  <div className="card-body">
                    <h5 className="card-title">TITLE : {curr.title}</h5>
                    <p className="card-text">Description : {curr.description}</p>
                    <p className="card-text">Triangle : {curr.triangle}</p>
                    <p className="card-text">Size : {curr.size}</p>
                    <p className="card-text">Material : {curr.materials}</p>
                    <p className="card-text">Support : {curr.support}</p>
                    <p className="card-text">Uploaded BY : {curr.uploadedBy}</p>
                    {/* <a href="#!" className="btn btn-primary">
                      Button
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ModelBrowser;
