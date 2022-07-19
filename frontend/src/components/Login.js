import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";

import { EmailOutlined,  Visibility, VisibilityOff } from "@mui/icons-material";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const signin = {
    
    email: "",
    password: "",
  };
  const userSubmit = (formdata) => {
    console.log(formdata);
  };
 
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div
          class="col-sm-6 px-0 d-none d-sm-block banner"
          style={{
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <img
            className="img-fluid image"
            // style={{background:"content",backgroundSize:'fixed'}}
            src="https://cdn.creators3d.com/site/stripe_2.jpg"
            alt=""
          />
          <h1 className="heading">WELCOME BACK</h1>
          <p className="paragraph"></p>
        </div>
        <div class="col-sm-6 " style={{ color: "white" }}>
          <div className="signup-cont">
            <div className="">
              <div className="col-md-6 col-sm-6 mx-auto">
        <button className="btn btn-success w-100 mt-2">Continue with Google</button>
        <button className="btn btn-primary w-100 mt-4">Continue with Facebook</button>
                <div className="">
                  <div className="card-body">
                    <h4 style={{ textAlign: "center", marginTop: "2%" }}>
                      <i style={{top:''}}>OR</i>
                    </h4>
                    <hr className="mb-4" />
                    <h4 style={{ textAlign: "center" }}>Login</h4>
                    <Formik
                      initialValues={signin}
                      onSubmit={userSubmit}
                      
                    >
                      {({
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          
                          <TextField
                            label="Email"
                            variant="standard"
                            className="w-100 mb-3"
                            id="email"
                            s
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <EmailOutlined />
                                </InputAdornment>
                              ),
                            }}
                            onChange={handleChange}
                            value={values.email}
                            
                          />
                          <TextField
                            label="Password"
                            variant="standard"
                            className="w-100 mb-4"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={(e) =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            onChange={handleChange}
                            value={values.password}
                            />
                          <Button type="submit" variant="contained" fullWidth>
                            {" "}
                            Sign Up
                          </Button>
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
    </div>
  );
};

export default Login;