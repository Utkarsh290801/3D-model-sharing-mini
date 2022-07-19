import { TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react'

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
    const addSubmit = (formdata) => {
      console.log(formdata);
    }
  return (
    <div>
      <h1>AddModel</h1>
      <Formik initialValues={AddForm} onSubmit={addSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              id="title"
              value={values.title}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              id="description"
              value={values.description}
              onChange={handleChange}
            />
            <TextField
              label="Size"
              id="size"
              value={values.size}
              onChange={handleChange}
            />
            <TextField
              label="Triangle"
              id="triangle"
              value={values.triangle}
              onChange={handleChange}
            />
            <TextField
              label="Materials"
              id="materials"
              value={values.materials}
              onChange={handleChange}
            />
            <TextField
              label="UploadedBy"
              id="uploadedBy"
              value={values.uploadedBy}
              onChange={handleChange}
            />
            <TextField
              label="Support"
              id="support"
              value={values.support}
              onChange={handleChange}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddModel;