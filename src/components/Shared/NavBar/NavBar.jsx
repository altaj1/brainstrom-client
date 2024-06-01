import { useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
// import { TbLayoutNavbarExpand } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



const NavBar = ({ setDarkMode, darkMode }) => {
  const { user, setUser, logOut } = useAuth();
  console.log(user)

  const listItems = (
    <div className=" lg:flex  items-center gap-7">
      <div className="flex  md:flex-row md:gap-6 flex-col lg:flex-row lg:gap-7 lg:space-y-0 space-y-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400  font-bold lg:mt-0 mt-4"
              : "font-bold mt-4 lg:mt-0"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400  font-bold lg:mt-0 mt-4"
              : "font-bold mt-4 lg:mt-0"
          }
        >
          Services
        </NavLink>

        {/* {
          user ?  <div className="dropdown w-full " >
          <NavLink to='#'
            tabIndex={0}
            role="button"
            className={({ isActive }) =>
              !isActive
                ? "text-blue-500 font-bold lg:mt-0 mt-4"
                : "font-bold mt-4 lg:mt-0"
            }
          >
          <div className="flex items-center justify-center ">
          <span>Dashboard </span> <MdArrowDropDown  className="text-xl"/>
          </div>
          </NavLink>
          <ul tabIndex={0} className="dropdown-content z-[1] menu  w-48 space-y-5 ">
            <NavLink
              to="/addservice"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold lg:mt-0 mt-4"
                  : "font-bold mt-4 lg:mt-0 text-pink-400"
              }
            >
               Add Service
            </NavLink>
            <NavLink
              to="/manageservice"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold lg:mt-0 mt-4"
                  : "font-bold mt-4 lg:mt-0 text-pink-400"
              }
            >
              Manage Service
            </NavLink>
            <NavLink
              to="/booked-services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold lg:mt-0 mt-4"
                  : "font-bold mt-4 lg:mt-0 text-pink-400"
              }
            >
              Booked-Services
            </NavLink>
            <NavLink
              to="/service-to-do"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold lg:mt-0 mt-4"
                  : "font-bold mt-4 lg:mt-0 text-pink-400"
              }
            >
              Service-To-Do
            </NavLink>
          </ul>
        </div>
        : ""
        } */}
       
      
      </div>
    </div>
  );
//   console.log(user);
//   useEffect(() => {
//     if (user) {
//       setUser(user);
//     }
//   }, [user]);
  return (
    <div className={`navbar shadow-md top-0  z-50 lg:pl-72 lg:pr-72  fixed ${darkMode ? "bg-[#061f31] text-rose-200 " : "bg-slate-100"} dark:bg-[#0F172A] `}>
      <div className="navbar-start lg:pl-14">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden"
          >
            <img
              className="lg:h-20 md:h-16 h-9 "
              src="https://i.ibb.co/9tTHdQG/nav-Sm-img-removebg-preview.png"
              alt=""
            />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2    "
          >
            {listItems}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Link to='/'><img
          
            className=" lg:h-16 md:h-16 h-11 pt-2 "
            src="https://i.ibb.co/FgwgMQV/logo-removebg-preview.png"
            alt=""
          /></Link>
          <h1 className="text-2xl font-bold lg:block hidden inline-block  text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">BrainStrom</h1>
        </div>
      </div>
      <div className="navbar-center">
        <div className=" md:block   hidden lg:flex">
          <ul className="menu menu-horizontal   px-1">{listItems}</ul>
        </div>
      </div>

      <div className="navbar-end space-x-3">
        <div className="dropdown dropdown-hover drop-shadow-none">
          <div tabIndex={0} role="button" className=" m-1">
            <Link>
              {user ? (
                <img
                  className="h-14 rounded-full"
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
            className="dropdown-content z-[1] menu p-2 shadoww w-52 bg-rose-300 text-black opacity-85 font-semibold rounded-lg"
             
          >
            <li>
              <a>{user?.displayName}</a>
            </li>
            <li>
                <Link to='/dashboard'>Dashbord</Link>
            </li>
            <li>
              <a>
                <button onClick={() => logOut()} className=" w-full ">
                  Logout
                </button>
              </a>
            </li>
          </ul>
        </div>

        {user ? (
          ""
        ) : (
          <Link className="btn bg-blue-300" to="/login">
            {" "}
            Login
          </Link>
        )}

       

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
