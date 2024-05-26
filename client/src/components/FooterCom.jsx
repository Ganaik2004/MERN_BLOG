import {Footer} from 'flowbite-react'
import {BsFacebook,BsInstagram,BsTwitter,BsGithub} from 'react-icons/bs'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterCom() {
  return (
   
    <section className="relative overflow-hidden bg-white py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center lg:justify-between justify-center">
          <div className="w-auto p-8">
            <Link to={"/"}>
              <div className="inline-flex items-center">
                <span className="ml-4 text-lg font-bold">UseDev</span>
              </div>
            </Link>
          </div>
          <div className="w-auto p-8">
                      <ul className="-m-5 flex flex-wrap items-center justify-center">
              <li className="p-5">
                <Link color='dark' to={"/about"} className='font-semibold'>
                  About
                </Link>
              </li>
              <li className="p-5">
              <Link color='dark' to={"/signup"} className='font-semibold'>
                  SignUp
                </Link>
              </li>
              <li className="p-5">
              <Link color='dark' to={"/signin"} className='font-semibold'>
                  SignIn
                </Link>
              </li>
              <li className="p-5">
              <Link color='dark' to={"/"} className='font-semibold'>
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap justify-center gap-2">

             
             
            
            
             
              <div className="w-auto p-1.5">
              <Footer.Icon href="#" icon={BsFacebook} color='dark'/>
              </div>
              <div className="w-auto p-1.5">
              <Footer.Icon href="#" icon={BsInstagram} color='dark'/>
              </div>
              <div className="w-auto p-1.5">
              <Footer.Icon href="#" icon={BsGithub} color='dark'/>
              </div>
              <div className="w-auto p-1.5">
              <Footer.Icon href="#" icon={BsTwitter} color='dark'/>

               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  )
}
