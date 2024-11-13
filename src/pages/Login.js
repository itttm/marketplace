import React from "react";
import TextInput from "../components/commons/TextInput";
import Button from "../components/commons/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="container h-screen mx-auto p-5"
      style={{
        background: "url('/assets/backgrounds/footer_background.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-8">
        <div className="flex w-full flex-col items-center relative  after:content-[''] after:h-full after:top-0 after:absolute after:w-full after:hidden lg:after:block lg:after:max-w-[400px] after:bg-[linear-gradient(to_left,#141414_0%,#14141400_100%)] after:right-0  after:pointer-events-none  before:content-['']  before:absolute before:h-full before:w-full before:max-w-[100px] lg:before:max-w-[400px] before:hidden lg:before:block before:left-0 before:bg-[linear-gradient(to_left,#14141400_0%,#141414_100%)] z-10 before:z-20  before:pointer-events-none">
          <h1 className="text-white font-aero text-center text-[32px] lg:text-[48px] uppercase  leading-[1.2]">
            <span className="text-primary font-aero">login</span> and <br /> get
            started
          </h1>
          <div className="">
            <div className="hidden lg:flex items-center my-12 gap-8 py-6 relative after:content-[''] after:w-[200px] after:h-[300px] after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] after:blur-[80px] after:bg-primary after:rounded-full after:absolute after:z-[-1]">
              <img
                src="/assets/decorations/auth_decoration_1.png"
                className="max-w-[160px]"
              />
              <img
                src="/assets/decorations/auth_decoration_2.png"
                className="max-w-[240px]"
              />
              <img
                src="/assets/decorations/auth_decoration_3.png"
                className="max-w-[160px]"
              />
            </div>
          </div>
          <img
            className="w-full max-w-[180px] hidden lg:block"
            src="/assets/logos/logo.svg"
            alt=""
          />
        </div>
        <div className="w-full max-w-[500px] lg:mr-8  relative after:content-[''] after:w-[360px] after:left-[100%] after:h-[360px] after:bottom-[90%] after:blur-[200px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
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
              <img src="/assets/logos/google.svg" className="mr-3" /> Login with
              Google
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
          className="w-full max-w-[180px]  lg:hidden"
          src="/assets/logos/logo.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
