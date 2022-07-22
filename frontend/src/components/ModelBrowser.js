import React, { useState } from "react";
import { useEffect } from "react";
const ModelBrowser = () => {
    const [threeDArray, setthreeDArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const getDataFromBackend = async () => {
        setLoading(true);
        const response = await fetch("http://localhost:5000/3dmodel/getall");
        const data = await response.json();
        console.log(data);
        setthreeDArray(data);
        setLoading(false);
      }; 
      useEffect(() => {
        getDataFromBackend();
      }, []);
      const displayUsers = () => {
        if (loading) {
      return (
        <div class="text-center">
              <div class="spinner-border text-primary " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          );
        } else {
          return threeDArray.map(({ _id,title,
          description,
          size,
          triangle,
          materials,
          uploadedBy,
          support }) => (
            <tr key={_id}>
              <td>{title}</td>
              <td>{description}</td>
              <td>{size}</td>
              <td>{triangle}</td>
              <td>{materials}</td>
              <td>{support}</td>
              <td>{uploadedBy}</td>
            </tr>
          ));
        }
      };
      return (
        <div>
          <h1>Model Browser</h1>
          <div className="row">
            <div className="col-md">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Size</th>
                    <th>Triangle</th>
                    <th>Materials</th>
                    <th>Support</th>
                    <th>UploadedBy</th>
                  </tr>
                </thead>
                <tbody>{displayUsers()}</tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };
    export default ModelBrowser;