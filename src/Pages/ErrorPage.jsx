import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage=()=>{
    const error=useRouteError();
    console.log(error)
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1)
    }

    if (error.status === 404) {
        return (
          <section className=" error-section">
            <div id="error-text">
              <figure>
                <img
                  src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                  alt="404 page"
                />
              </figure>
              <div className="text-center">
                <p className="p-a">
                  . The page you were looking for could not be found
                </p>
                <p className="p-b">... Back to previous page</p>
              </div>
            </div>
            {/* <NavLink to="/" className="flex items-center justify-center text-3xl border border-red-500 m-10 p-2">
              Go Back To HomePage
            </NavLink> */}
            <button className="btn" onClick={handleGoBack}>
              Go Back
            </button>
          </section>
        );
    }
    return <h1>The page u lokin for gone for gud...</h1>
    
}