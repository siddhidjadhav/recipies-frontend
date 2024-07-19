import { useEffect, useState } from "react"
import { fetchRecipes } from "../utils/utilities"
import RecipiesList from "./RecipiesList"


export default function Main() {
    const [isloading, setIsLoading] = useState(true)
    const [recipies, setRecipies] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedRecipes = await fetchRecipes();
                setRecipies(fetchedRecipes);
                setIsLoading(false);
            } catch (error) {
                setError('Error Connecting to EndPoint');
                setIsLoading(false);
            }
        };

        fetchData();
    }, [])

     return (<div style={{marginTop: "20px"}}>
        {error ? <div>{error}</div>
        : <RecipiesList recipies={recipies} isloading={isloading}/>}
     </div>)
}

