import { Box, IconButton, InputBase, TextField } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import "./ModelBrowser.css";
const ModelBrowser = () => {
  const url = "http://localhost:5000";
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
    <div style={{ background: "#7f9ead"}}>
      {/* style={{ background: "#7f9ead"}} */}
      <div className="container " style={{ padding: "5rem" }}>
        
        <model-viewer
          src={url + "/Drossel.gltf"}
          alt="model robot"
          auto-rotate
          camera-controls
          ar
          ios-src={url + "/Drossel.gltF"}
        ></model-viewer>
<form>
    <TextField
      id="search-bar"
      sx={{ marginLeft: "25%", width: "70%" }}
      className="text "
      // onInput={(e) => {
      //   setSearchQuery(e.target.value);
      // }}
      label="Explore"
      variant="outlined"
      placeholder="Search Your 3D Model..."
      // size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "", fontSize:"30px" }} />
    </IconButton>
  </form>
        {/* <TextField
          // className="w-100"
          sx={{ marginLeft: "25%", width: "70%" }}
          label="Explore"
          placeholder="Search Your 3D Model...."
          color="secondary"
          focused
        >
          
        </TextField> */}
        
        {/* <InputBase 
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Podcast to Search"
              inputProps={{ "aria-label": "Enter Podcast to Search" }}
            /> */}
            {/* <div className="" style={{float:'right',border:'2px solid'}}>
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton></div> */}
      </div>
      <div className="container-fluid mt-5">
        <div className="row ">
          {threeDArray.map((curr) => {
            return (
            <div className="col-10 col-md-4 mt-5">
              <div className="container style">

                {/* -----------------------      second code -------------------------------- */}
                 {/* <div className="card">
                  <div className="box"> 
                  <div className="card" style={{  background: "#ebf5fc"}}>
                   
                    <img
                      src={
                        "http://localhost:5000/images/"+curr.image
                      }
                      className="img-fluid"
                    />
                      <div className="card-body" >
                    <h2 className="card-title text-center"> {curr.title}</h2>
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
                  </div>  */}



                  {/*     ------------------------       first code                                                ---------- */}
                  {/* <div
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
                  <div className="card-body" >
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
                       
                  </div> */}

                  <div className="card outer">
                    <div className="card-body outer2">
                    <div className="imgbox">
                    <img
                      src={
                        "http://localhost:5000/images/"+curr.image
                      }
                      className="img-fluid im"
                    />
                    </div>
                    <div className="con">
                    <h2 className="card-title text-center"> {curr.title}</h2>
                    <p className="card-text">
                      Description : {curr.description}
                    </p>

                    <p className="card-text">Triangle : {curr.triangle}</p>
                    <p className="card-text">File : {curr.file}</p>
                    <p className="card-text">Image : {curr.image}</p>
                    <p className="card-text">Size : {curr.size}</p>
                    <p className="card-text">Material : {curr.materials}</p>
                    <p className="card-text">Support : {curr.support}</p>
                    <p className="card-text">Uploaded BY : {curr.uploadedBy}</p>
                    <Link to={'/viewer/'+curr._id} className="btn  btn-primary model w-100"  >
                      View Model
                    </Link>
                    </div>
                  </div>




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
