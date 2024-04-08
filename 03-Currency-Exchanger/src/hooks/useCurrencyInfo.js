// Here we are talking about the custom hook 
import { useEffect , useState } from "react";

// Here this is costume hooks
function useCurrencyInfo(currency){ // This hook take an argument

    const [data , setData] = useState({})

    // Why I am using useEffect here ? 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    } , [currency])
    
    return data
}

export default useCurrencyInfo;