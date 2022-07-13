import React, { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    return (
        <main className="main">
            <div className="main--form">
                <input
                    type="text"
                    name="topText"
                    className="main--input"
                    onChange={handleChange}
                    value={meme.topText}
                    placeholder="Top Text"
                ></input>
                <input
                    type="text"
                    name="bottomText"
                    className="main--input"
                    onChange={handleChange}
                    value={meme.bottomText}
                    placeholder="Bottom Text"
                ></input>
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img
                    src={meme.randomImage}
                    alt="random memes"
                    className="meme--image"
                />
                <h1 className="meme--text top">{meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
            </div>
        </main>
    )
}
