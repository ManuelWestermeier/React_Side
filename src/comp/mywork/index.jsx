import { useState } from "react"
import { Things } from "./things.jsx"
import "./index.css"

export default function MyWork(){
    const [Thing, setThing] = useState("programming")

    window.onhashchange = e => {
        var hash=(document.location.hash).replace("#","")

        if(hash=="Home"){
            window.scrollTo({
                top:0
            })
        }
        else if(Things[hash]){
            document.querySelector("#Things").scrollIntoView({
                block:"center",
                behavior:"smooth",
                inline:"nearest"
            })
            setThing(hash)
        }
    }

    return(
        <>
        <div className="myWork">
            <hr />
           <p className="list">
                <a href="#programming" className={Thing=="programming"?"a-focus":""} onClick={()=>{setThing("programming")}}>Meine Programmier Erfahrungen</a>
                <a href="#projects" className={Thing=="projects"?"a-focus":""} onClick={()=>{setThing("projects")}}>Meine Projeckte</a>
            </p>
            <hr />
            <br />
            <div style={{placeContent: "center"}} id="Things">
                {Things[Thing]}
            </div>
        </div>
        </>
    )
}