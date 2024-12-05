import { Outlet, useNavigate, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout=()=>{

    const navigation=useNavigation();
    if(navigation==="loading")
        return <Loading/>
    // console.log(navigation)

    return(<>
        <Header/>
        <Outlet/>
        <Footer/>
    </>)
}