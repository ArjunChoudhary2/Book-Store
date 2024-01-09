import React, { useContext, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
// import Link from 'next/link';
import { useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.svg";
const Login = () => {
  const { loginWithPassword , loginWithGoogle} = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";

  //signup using google

  const handleGoogleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        alert("Sign up completed");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center h-screen sm:py-12">
      <div className="bg-gray-200 p-4 rounded-md w-full sm:max-w-md">
        <form className="flex flex-col gap-4 h-full" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password"
              name="password"
              type="password"
              required
              shadow
            />
          </div>
          {error ? <p className="text-red-700 ">Email or Password is not correct</p> : ""}
          <div className="flex items-center gap-2">
            <Label htmlFor="agree" className="flex">
              Don't have an account?
              <Link to="/signup" className="px-2 text-blue-700 underline">
                click here
              </Link>
            </Label>
          </div>
          <Button type="submit">Login</Button>
        </form>

        <hr />

        <div className="flex w-full items-center flex-col mt-5 gap-3 bg-slate-300 rounded">
          <button onClick={handleGoogleRegister} className="block">
            Signup with Google
            <img src={googleLogo} alt="" className="w-12 h-10 inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
