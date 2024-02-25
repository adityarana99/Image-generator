import React from "react";

// import memeData from "./memeData";



export default function Main(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "https://source.unsplash.com/random/?Cryptocurrency&2"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(apiData => setAllMemeImages(apiData.data.memes))
    }, [])

    // WE CAN USE THIS SIMPLE METHOD ALSO INSTEAD OF ABOVE THIS WILL NOT WORK
    // React.useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemeImages(data.data.memes)
    // }, [])


    function getRandomMemeImage(){
        const randomNum = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNum].url
        setMeme(prevState => ({
            ...prevState,
            randomImg: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target

        setMeme(preState => ({
            ...preState,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    className="form-input" 
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    className="form-input" 
                />
                <button className="form-button" onClick={getRandomMemeImage}>Get a new Meme Image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} className="meme-image" />
                <h2 className="meme-toptext">{meme.topText}</h2>
                <h2 className="meme-bottomtext">{meme.bottomText}</h2>
            </div>
        </main>
    );
}