import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/commons/Button";
import TextInput from "../../components/commons/TextInput";

const AdminLogin = () => {
  return (
    <div
      className="container h-screen mx-auto p-5 "
      style={{
        background: "url('/assets/backgrounds/footer_background.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-8 relative after:content-[''] after:w-[360px] after:left-[100%] after:h-[360px] after:bottom-[100%] after:blur-[200px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <div className="flex w-full flex-col items-center relative gap-6 lg:gap-8 ">
          <h1 className="text-white font-aero text-center text-[32px] lg:text-[48px] uppercase  leading-[1.2]">
            Admin <span className="text-primary font-aero">login</span>
          </h1>
          <div className="w-full max-w-[500px] lg:mr-8  ">
            <div className="text-white product-ask-section p-7 lg:p-10 space-y-6 bg-white/5 backdrop-blur-md w-full">
              <label className="w-full">
                <span className="mb-3 block">Email address</span>
                <TextInput
                  placeholder="Enter email address"
                  inputClassName="placeholder:text-white/60"
                />
              </label>
              <div className="w-full">
                <label className="w-full">
                  <span className="mb-3 block">Password</span>
                  <TextInput
                    placeholder="Enter password"
                    inputClassName="placeholder:text-white/60"
                    type="password"
                    endIcon={<img src="/assets/icons/icon-eye-slash.svg" />}
                  />
                </label>
                <button className="text-primary mt-3 w-fit ml-auto flex">
                  Forgot Password?
                </button>
              </div>
              <Button isActive>Login</Button>
              <Button>
                <img src="/assets/logos/google.svg" className="mr-3" /> Login
                with Google
              </Button>
              <button className="text-center w-full flex justify-center">
                Don’t have an account?{" "}
                <Link className="text-primary ml-2" to={"/register"}>
                  Sign up
                </Link>
              </button>
            </div>
          </div>
          <img
            className="w-full max-w-[120px] lg:max-w-[180px]"
            src="/assets/logos/logo.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
