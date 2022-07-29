import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { useParams } from "react-router-dom";

const ViewModel = () => {
  const { id } = useParams();
  const url = "http://localhost:5000";
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getModelById = () => {
    setLoading(true);
    fetch(url + "/3dmodel/getbyid/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setModelData(data);
        setLoading(false);
        console.log(url + "/extracted/" + data.file + "/scene.gltf");
      });
  };

  useEffect(() => {
    getModelById();
  }, []);

  const displayModelData = () => {
    console.log(loading);
    if (!loading && modelData) {
      return (
        <div className="card">
          <div className="row">
            <div className="col-md-6 col-sm-6 mx-auto">
              <div className="card-body">
                <h5 className="card-title">Title: {modelData.title}</h5>
                <p className="card-text">Description:{modelData.description}</p>
                <p className="card-text">Triangle : {modelData.triangle}</p>
                    <p className="card-text">Size : {modelData.size}</p>
                    <p className="card-text">Material : {modelData.materials}</p>
                    <p className="card-text">Support : {modelData.support}</p>
                    <p className="card-text">Uploaded BY : {modelData.uploadedBy}</p>
                    <p className="card-text">File : {modelData.file}</p>
                    <p className="card-text">Image: {modelData.image}</p>

                <p className="card-text">
                  <small className="text-muted">Uploaded By:</small>
                </p>
              </div>
            </div>
          </div>
          {showModel(modelData.file)}
        </div>
      );
    }
  };

  const Model = ({ path }) => {
    const gltf = useLoader(GLTFLoader, path);
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
  };

  const showModel = (modelname) => {
    console.log(url + "/extracted/" + modelname + "/scene.gltf");
    return (
      <Canvas style={{ height: "100vh" }}>
        <Suspense fallback={null}>
          <Model path={url + "/extracted/" + modelname + "/scene.gltf"} />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    );
  };

  return <div>{displayModelData()}</div>;
};

export default ViewModel;
