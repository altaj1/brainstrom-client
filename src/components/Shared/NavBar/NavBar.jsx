import { useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
// import { TbLayoutNavbarExpand } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import Name from "../Name";

const NavBar = () => {
  const { user, setUser, logOut, setDarkMode, darkMode } = useAuth();
  console.log(user);
  const listItems = (
    <div className=" lg:flex  items-center gap-7">
      <div className="flex  md:flex-row md:gap-6 flex-col text-white lg:flex-row lg:gap-7 lg:space-y-0 space-y-4 ">
        {user ? (
          ""
        ) : (
          <Link
            className=" p-3 mt-5 text-center font-medium  transition duration-200 rounded shadow-md bg-[#360951]"
            to="/login"
          >
            {" "}
            Login
          </Link>
        )}
        <li className=" md:hidden lg:hidden block">
          <button onClick={() => logOut()} className=" w-full ">
            Logout
          </button>
        </li>
        <li className=" md:hidden lg:hidden block">
              <Link to="/dashboard">Dashbord</Link>
            </li>
      </div>
    </div>
  );

  return (
    <div
      className={`navbar shadow-md top-0  z-50 lg:pl-20 lg:pr-20  fixed ${
        darkMode ? "bg-[#061f31] text-rose-200 " : "bg-slate-100"
      } dark:bg-[#0F172A] `}
    >
      <div className="navbar-start lg:pl-14">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden"
          >
            <p className="font-semibold text-4xl">
              <GiHamburgerMenu />
            </p>
            {/* <img
              className="lg:h-20 md:h-16 h-9 "
              src="https://i.ibb.co/9tTHdQG/nav-Sm-img-removebg-preview.png"
              alt=""
            /> */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-[#360951]  "
          >
            {listItems}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/">
            <img
              className=" lg:h-16 md:h-16 h-11 pt-2  hidden md:block lg:block"
              src="https://i.ibb.co/FgwgMQV/logo-removebg-preview.png"
              alt=""
            />
          </Link>
          <Link to="/"
          className="lg:block hidden md:block"
          >
            {/* <h1 className="text-2xl font-bold lg:block hidden inline-block  text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
              BrainStrom
            </h1> */}
            <Name></Name>
          </Link>
        </div>
        <div className=" md:block   hidden lg:flex ml-5">
          {/* <ul className="menu menu-horizontal   px-1">{listItems}</ul> */}
        </div>
      </div>
      <Link to={'/'} className="navbar-center md:hidden lg:hidden block"><Name></Name></Link >

      <div className="navbar-end space-x-3">
        <div className="dropdown dropdown-hover drop-shadow-none">
          <div tabIndex={0} role="button" className=" m-1 ">
            <Link>
              {user ? (
                <img
                  className="h-10 rounded-full"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/fQZMVfT/profile-removebg-preview.png"
                  }
                  alt=""
                />
              ) : (
                ""
              )}
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadoww w-52 bg-[#360951] text-white opacity-85 font-semibold rounded-lg"
          >
            <li>
              <a>{user?.displayName}</a>
            </li>
            <li className=" md:block lg:block hidden">
              <Link to="/dashboard">Dashbord</Link>
            </li>
            <li className=" md:block lg:block hidden">
              <button onClick={() => logOut()} className=" w-full ">
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="md:block lg:block hidden">
          {listItems}
          {/* {user ? (
          ""
        ) : (
          <Link
            className=" p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]"
            to="/login"
          >
            {" "}
            Login
          </Link>
        )} */}
        </div>

        {/* dark mood button */}
        <div className=" m-0 ">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" p-1 mr-3 flex items-center text-4xl"
          >
            {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
