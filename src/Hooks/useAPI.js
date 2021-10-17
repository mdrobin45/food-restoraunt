import { useEffect, useState } from "react";

    
const useAPI = () =>
{
    const [foods, setFoods] = useState([]);
    useEffect(() =>
    {
       fetch('/foods.JSON')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    
    return foods;
};
export default useAPI;