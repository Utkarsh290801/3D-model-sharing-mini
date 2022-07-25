import { TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const AddModel = () => {

    const AddForm = {
      title: "",
      description: "",
      size: "",
      triangle: "",
      materials: "",
      uploadedBy: "",
      support: "",
    };
    const addSubmit = async(formdata) => {
      console.log(formdata);
      const response= await fetch( 'http://localhost:5000/3dmodel/add',{
      method : 'POST',
        body : JSON.stringify(formdata),
        headers:{
          "Content-Type" : "application/json",
         }
        })
        if(response.status===200){
          console.log(response.status);
          console.log('success')
          Swal.fire({
                icon : "success",
                   title:"Well Done",
                   text:'You have done a wonderful job !! 👍👍'
               })     
                                  
  
        } else{
          console.log(response.status);
          console.log('something went wrong')
          Swal.error({
            icon : "error",
               title:"OOPS",
               text:'!! something went wrong!!'
           })     
        }      
    }
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
            <fieldset><legend>Add Model</legend>
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
            <button className="btn btn-primary w-100 mb-4">Submit</button>
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
      
    
  )
}

export default AddModel;