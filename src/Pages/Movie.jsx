import { useLoaderData } from "react-router-dom"
import { Card } from "../Components/layout/UI/Card"

export const Movie=(search)=>{
    const moviesData=useLoaderData()
    console.log(moviesData)
    return(
        <ul className=" container grid grid-four-cols">
            {moviesData && moviesData.Search.map((currElem)=>{
                return <Card key={currElem.imdbID} currElem={currElem}/>
            })}
        </ul>
    )
}