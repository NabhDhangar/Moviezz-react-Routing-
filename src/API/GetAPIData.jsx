let value="avengers";
export const getApiData=async({search})=>{
    console.log(search)
    // value=search
    try{
        const response= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=${value}&page=1`)
        const data=response.json()
        return data
    } catch(error){
        console.log(error);
    }
}