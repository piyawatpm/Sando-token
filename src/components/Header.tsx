import React, { useState, useEffect, useRef } from "react";
import ModalPopup from "./ModalPopup";
import SideBar from "./Sidebar";

function Header(): JSX.Element {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpenModal = ()=>{
    setShowModal(true)
  }
  const handleCloseModal = ()=>{
    setShowModal(false)
  }
  return (
    <header className="sticky top-0 z-50 navbar white bg-cover bg-center bg-no-repeat bg-[#0f0f0f] ">
      <div className="relative mx-auto container">
        <nav className="flex justify-between text-white">
          <div className="flex px-5 py-3 xl:px-12 w-full items-center md:w-screen sm:w-screen lg:w-screen">
            <a className="flex  font-heading" href="/">
              <img
                src="/images/sando-logo-text.svg"
                alt="sando logo image"
                className="w-11/12"
              />
            </a>

            {/*  Search component
            <div className="flex ml-20">
              <input
                className=" placeholder:italic placeholder:text-slate-400 placeholder:pl-3 block bg-white w-64  rounded-full py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                placeholder="Search item here..."
                type="text"
                name="item"
              />
            </div>

             */}
            <ul className="sr-only xl:not-sr-only 2xl:not-sr-only hidden md:flex  mx-auto font-bold font-heading space-x-5">
            
              <li className="ml-10">
                <a className="hover:text-gray-200" href="/sale">
                  Tokensale
                </a>
              </li>

              <li>
                <a className="hover:text-gray-200" href="/staking">
                  Staking
                </a>
              </li>

              <li>
                <a className="hover:text-gray-200" href="/buy">
                  Buy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200 mr-5" href="https://www.sandotoken.io/pdf/Sando-Token.pdf" target="_blank">
                  Whitepaper
                </a>
              </li>
            </ul>

            {/* <div className=" dropdown inline-block relative z-10">
              <button className=" text-white font-semibold py-1 px-1  inline-flex items-center">
                <span className="mr-1">English</span>
                <svg
                  className="fill-current h-5 w-5 mr-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-white pt-1 font-bold bg-zinc-800 rounded-lg mt-1">
                <li className="">
                  <a
                    className="flex rounded hover:text-gray-300 py-2 px-4  block whitespace-no-wrap ml-2"
                    href="#"
                  >
                    <span className="mr-2">Thai</span>
                  </a>
                </li>
                <li className="">
                  <a
                    className="flex rounded  hover:text-gray-300 py-2 px-4  block whitespace-no-wrap ml-2"
                    href="#"
                  >
                    <span className="mr-2">Turkish</span>
                  </a>
                </li>
                <li className="">
                  <a
                    className="flex rounded  hover:text-gray-300 py-2 px-4  block whitespace-no-wrap ml-2"
                    href="#"
                  >
                    <span className="mr-2">Russian</span>
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="flex flex-col md:flex-row mt-5 md:mt-0 items-end md:items-center md:justify-end">
              {/*
              <button
                type="submit"
                className="block px-4 text-sm text-white font-medium rounded-md py-2 disabled:bg-none btn-connect"
              >
                Connect Wallet
              </button>
               */}
              <div className="flex sr-only  xl:not-sr-only 2xl:not-sr-only ">
                
                {/* <div className="relative top-2.5 mb-5 sm:mb-0 sm:mr-5 group text-white font-bold ">
                  <a href="/login">Login</a> | <a href="/register">Register</a>
                </div> */}
                <button
                  // href="/"
                  className=" bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-3 px-5 rounded-full"
                  type="submit"
                  onClick={handleOpenModal}
                >
                  Connect Wallet
                </button>
              </div>

              {showModal && <ModalPopup closePopup={handleCloseModal}/>}
            </div>
          </div>
          <div className="float-right xl:hidden">
            <SideBar className=" text-white xl:hidden" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
