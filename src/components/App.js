// create your App component here
import React, {useEffect, useState} from "react"

function App() {
 const [randomizedImage, setRandomizedImage] = useState(null)
 const [fetchComplete, setFetchComplete] = useState(false);
    useEffect(  ()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then( (response)=>response.json() )
        .then( (responseData)=>{
            setRandomizedImage(responseData.message);
            setFetchComplete(true);
        } )
    }  , []);

    if(!fetchComplete) {
        return(<p>Loading...</p>);
    }

    return(
        <>
        <img src={randomizedImage} alt="A Random Dog"/>
        </>
    );


}

export default App;