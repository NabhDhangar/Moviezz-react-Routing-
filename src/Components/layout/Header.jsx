import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
    };
  };

  const[search,setSearch]=useState("");
  console.log(search)

  useEffect(()=>{
    
  },[search])

  return (
    <>
      <header className="section-navbar">
      <section className="top_txt">
          <div className="head container">
            <div className="head_txt rounded-full">
              <NavLink to="/movie"><input 
                className="border rounded-full" 
                type="text" 
                placeholder="Search Movie"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              /></NavLink>

            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>Moviezz..</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="movie"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className=" bg-green-200 p-5 border rounded-xl"><NavLink to="#">Register</NavLink></button>
        </div>
      </header>
    </>
  );
};