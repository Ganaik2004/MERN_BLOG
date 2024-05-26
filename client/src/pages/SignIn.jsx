import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useToast } from '@chakra-ui/react'
import { Button, Spinner } from "flowbite-react";
export default function SignIn() {
  const [formData,setFormData] = useState({});
  const [loading,setLoading] = useState(false);
  const toast = useToast()
  const navigate = useNavigate();
   const handleChange = (e)=>{
        setFormData({...formData,[e.target.id] : e.target.value.trim()});
   };
const handleSubmit = async(e)=>{
 e.preventDefault();
 if( !formData.email || !formData.password){
  toast({
    title: 'Please fill all the fields',
    status: 'error',
    variant: 'top-accent',
    duration: 5000,
    isClosable: true,
    position:"top"
  });
  return;
 }
 try{
  setLoading(true);
   const res = await fetch('/api/auth/signin',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
      },
      body:JSON.stringify(formData)
      });
  const data = await res.json();
  if(data.success===false){
      setLoading(false);
      toast({
        title: `${data.message}`,
        status: 'error',
        variant: 'top-accent',
        duration: 5000,
        isClosable: true,
        position:"top"
      });
      return;
    }
    setLoading(false);
    toast({
      title: `User Login Successfully`,
      status: 'success',
      variant: 'top-accent',
      duration: 5000,
      isClosable: true,
      position:"top"
    });
  navigate('/');

 }catch(err){
  setLoading(false);
  toast({
    title: `${err.message}`,
    status: 'error',
    variant: 'top-accent',
    duration: 5000,
    isClosable: true,
    position:"top"
  });
  return;
 }
}
  return (
    <section >
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-lg 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
          Don&apos;t have an account?{' '}
            <Link to="/signup">
              {/* Sign In */}
              <span className="text-black font-semibold"> Sign Up</span>
            </Link>
          </p>
          <form  className="mt-8">
            <div className="space-y-5">
              {/* <div>
                <label
                  htmlFor="username"
                  className="text-base font-medium text-gray-900"
                >
               
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="username"
                    onChange={handleChange}
                  ></input>
                </div>
              </div> */}
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                 
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <Button color={'dark'} disabled= {loading}   onClick={handleSubmit}
             
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5  font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {loading? (<><Spinner size={'sm'}/> <span>Loading...</span></>):(  'Get started ')}
                  
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
