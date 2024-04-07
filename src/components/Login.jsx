import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { BG_URL } from "../utils/constant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMes, setErrorMes] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = !isSignInForm
      ? checkValidData(
          email.current.value,
          password.current.value,
          fullName?.current?.value
        )
      : checkValidData(email.current.value, password.current.value);

    setErrorMes(message);

    if (message) return;

    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/61588179?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMes(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMes(errorCode);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMes(errorCode);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] "></div>
        <img src={BG_URL} alt="Background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="py-12 px-10 bg-[rgba(0,0,0,0.7)] rounded-md absolute w-3/12 mx-auto right-0 left-0 mt-20"
      >
        <h1 className="font-bold text-white text-4xl pb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full text-white bg-[rgba(255,255,255,0.07)] border rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full text-white bg-[rgba(255,255,255,0.07)] border rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full text-white border rounded-md bg-[rgba(255,255,255,0.07)]"
        />
        <p className="text-red-600 font-semibold m-2 ms-3 w-full">{errorMes}</p>
        <button
          className="m-2 p-2 text-white font-semibold w-full bg-red-600 rounded-md"
          onClick={handleButtonClick}
        >
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
            {isSignInForm ? "Sign-up" : "Sign-in"} now
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
