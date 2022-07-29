import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <div className="container " style={{padding:"5rem"}}>
      <TextField
            // className="w-100"
            sx={{ width: "100%" }}
            label="Explore"
            placeholder="Search Your 3D Model...."
          ></TextField>
      </div>
      <div className="container-fluid mt-5 ">
        <div className="row ">
          {threeDArray.map((curr) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={
                        "http://localhost:5000/images/"+curr.image
                      }
                      className="img-fluid"
                    />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title text-center"> {curr.title}</h3>
                    <p className="card-text">
                      Description : {curr.description}
                    </p>
                    <p className="card-text">Triangle : {curr.triangle}</p>
                    <p className="card-text">Size : {curr.size}</p>
                    <p className="card-text">Material : {curr.materials}</p>
                    <p className="card-text">Support : {curr.support}</p>
                    <p className="card-text">Uploaded BY : {curr.uploadedBy}</p>
                    <Link to={'/viewer/'+curr._id} className="btn btn-primary w-100"  >
                      View Model
                    </Link>
                       
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
