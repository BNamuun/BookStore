import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
export function SignUp() {
  const [userNumber, setUserNumber] = useState();
  const [password, setPassword] = useState();
  console.log({ userNumber, password });
  function handleSignUp() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/signUp`, {
        userNumber,
        password,
      })
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          alert("Амжилттай хадгалагдлаа");
          setUserNumber("");
          setPassword("");
        } else {
          alert("Бүртгэлтэй хэрэглэгч байна");
        }
      });
  }
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      /> */}
            ErdemStore
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Бүртгэл
              </h1>
              <Form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Бүртгэх утасны дугаар
                  </label>
                  <input
                    type="phoneNumber"
                    name="phoneNumber"
                    id="phoneNumber"
                    maxLength={8}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Утасны дугаар"
                    required=""
                    onChange={(e) => setUserNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Нууц үг
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  for="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>
          </div> */}
                <Button
                  // type="submit"
                  variant="primary"
                  className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleSignUp}
                >
                  Бүртгэх
                </Button>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </a>
          </p> */}
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
