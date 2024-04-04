import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] "></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form
        action="#"
        method="GET"
        className="py-12 px-10 bg-[rgba(0,0,0,0.7)] rounded-md absolute w-3/12 mx-auto right-0 left-0 mt-20"
      >
        <h1 className="font-bold text-white text-4xl pb-8">Sign In</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-[rgba(255,255,255,0.07)] border rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full bg-[rgba(255,255,255,0.07)] border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full border rounded-md bg-[rgba(255,255,255,0.07)]"
        />
        <button className="m-2 p-2 text-white font-semibold w-full bg-red-600 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <>
            <h1 className="text-center text-[rgba(255,255,255,0.7)] py-1 text-xl">
              OR
            </h1>
            <button className="m-2 p-2 text-white font-semibold w-full bg-[rgba(255,255,255,0.25)] rounded-md">
              Use a sign-in code
            </button>
            <div className=" text-center py-2">
              <a
                className=" text-white font-semibold hover:underline hover:text-[rgba(255,255,255,0.7)]"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex ms-2 p-2">
              <input
                className="text-3xl m-1"
                type="checkbox"
                name="Remember-me"
                id=""
              />
              <span className="text-white">Remember me</span>
            </div>
          </>
        )}
        <div className="ps-4 pt-4 text-white">
          <span className="text-[rgba(255,255,255,0.7)]" href="#">
            {isSignInForm ? "New to Netflix?" : "Already registered?"}
          </span>
          <a
            className="hover:underline ps-1 font-semibold"
            href="#"
            onClick={() => setIsSignInForm(!isSignInForm)}
          >
            {!isSignInForm ? "Sign-up" : "Sign-in"} now
          </a>
        </div>

        <div className="text-white text-xs ps-4 pt-2 text-[rgba(255,255,255,0.5)]">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-600">Learn more.</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
