import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <div className="border-b bg-[#F1F2F6] border-[#B4BBBA4D] ">
      <header className="container flex items-center justify-between w-full py-8 mx-auto">
        <div className="flex items-center gap-x-12">
          <LinkContainer to="/">
            <div className="w-[67px] h-[67px] bg-teal-600 rounded-full "></div>
          </LinkContainer>
          <div>
            <ul className="flex items-center gap-x-5 ">
              <li className="text-[24px] hover:cursor-pointer !font-normal">
                <LinkContainer to="/history">
                  <span>Home</span>
                </LinkContainer>
              </li>
              <li className="text-[24px] hover:cursor-pointer !font-normal">
                <LinkContainer to="/profile">
                  <span>Profile</span>
                </LinkContainer>
              </li>
              <li className="text-[24px] hover:cursor-pointer !font-normal">
                <LinkContainer to="/summary">
                  <span>Summary</span>
                </LinkContainer>
              </li>
              <li className="text-[24px] hover:cursor-pointer !font-normal">
                <LinkContainer to="/about">
                  <span>About</span>
                </LinkContainer>
              </li>
              <li className="text-[24px] hover:cursor-pointer !font-normal">
                <LinkContainer to="/contact">
                  <span>Contact</span>
                </LinkContainer>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <LinkContainer to="/login">
            <button className="px-3 py-2 !font-normal transition-colors duration-300 border-2 rounded-md border-paysonarTeal-normal hover:text-white hover:bg-paysonarTeal-normal ">
                Sign In
            </button>
          </LinkContainer>
          <LinkContainer to="/signup">
            <button className="px-3 py-2 !font-normal text-white transition-colors duration-300 border-2 rounded-md border-paysonarTeal-normal hover:text-black bg-paysonarTeal-normal hover:bg-white ">
                Sign Up
            </button>
          </LinkContainer>
        </div>
      </header>
    </div>
  );
}

export default Header;
