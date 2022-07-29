import { TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddModel = () => {
  const [selImage, setSelImage] = useState("");
  const [selFile, setSelFile] = useState("");

  const url = "http://localhost:5000";

  const AddForm = {
    title: "",
    description: "",
    size: "",
    triangle: "",
    materials: "",
    uploadedBy: "",
    support: "",
    image: "",
    file: "",
  };
  const addSubmit = async (formdata) => {
    formdata.image = selImage;
    formdata.file = selFile;
    console.log(formdata);
    const response = await fetch("http://localhost:5000/3dmodel/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log(response.status);
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "You have done a wonderful job !! 👍👍",
      });
    } else {
      console.log(response.status);
      console.log("something went wrong");
      Swal.error({
        icon: "error",
        title: "OOPS",
        text: "!! something went wrong!!",
      });
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/3dmodel/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myimage", file);
    fetch(url + "/3dmodel/uploadimage", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("image uploaded");
      }
    });
  };

  return (
    <div>
      <div className="container-fluid pt-3 bg-dark">
        <div className="row">
          <div className="">
            <div className="col-md-6 col-sm-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <Formik initialValues={AddForm} onSubmit={addSubmit}>
                    {({ values, handleSubmit, handleChange }) => (
                      <form onSubmit={handleSubmit}>
                        <fieldset>
                          <legend>Add Model</legend>
                          <TextField
                            label="Title"
                            id="title"
                            value={values.title}
                            onChange={handleChange}
                            className="w-100 mb-4"
                          />
                          <TextField
                            label="Description"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            className="w-100 mb-4"
                          />
                          <TextField
                            label="Size"
                            id="size"
                            value={values.size}
                            onChange={handleChange}
                            className="w-100 mb-4"
                          />
                          <TextField
                            label="Triangle"
                            id="triangle"
                            value={values.triangle}
                            onChange={handleChange}
                            className="w-100 mb-4"
                          />
                          <TextField
                            label="Materials"
                            id="materials"
                            value={values.materials}
                            onChange={handleChange}
                            className="w-100 mb-4"
                          />
                          <TextField
                            label="UploadedBy"
                            id="uploadedBy"
                            value={values.uploadedBy}
                            onChange={handleChange}
                            className="w-100 mb-4"
                          />
                          <TextField
                            label="Support"
                            id="support"
                            value={values.support}
                            onChange={handleChange}
                            className="w-100 mb-4"
                          />

                          <label>Uploade Image</label>
                          <input
                            className="form-control"
                            type="file"
                            onChange={uploadImage}
                          />

                          <label>Uploade File</label>
                          <input
                            className="form-control"
                            type="file"
                            onChange={uploadFile}
                          />

                          <button className="btn btn-primary w-100 mt-5">
                            Submit
                          </button>
                        </fieldset>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
