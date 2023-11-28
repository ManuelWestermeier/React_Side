import { useState } from "react"
import "./index.css"

export default function MainHeader(props) {
    const [hide,setHide]=useState("")
    return (
      <>
        <div className='header'>
            <h1>{props.headline}</h1>
            <button>
                <div className={`sidebar ${hide}`}>
                    <p onClick={()=>setHide("")}>
                        <a href="#Home">Home</a>
                    </p>
                    <p onClick={()=>setHide("")}>
                        <a href="#programming">Meine Programmier Erfahrungen</a>
                    </p>
                    <p onClick={()=>setHide("")}>
                        <a href="#projects">Meine Projeckte</a>
                    </p>
                    <p onClick={()=>setHide("")}>
                        <a href="./datenschutz.html">Datenschutz</a>
                    </p>
                    <p onClick={()=>setHide("")}>
                        <a href="./impressum.html">Impressum</a>
                    </p>
                    <p onClick={()=>setHide("")}>
                        <a href="mailto:Manuel.Westermeier111@gmail.de">E-Mail</a>
                    </p>
                    <p onClick={()=>setHide("")}>
                        <a href="tel:4915256427900">Telephon</a>
                    </p>
                </div>
                <svg onClick={()=>{
                    hide == "" ? setHide("sidebar-fous")
                    : setHide("")
                }
                } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
        </div>
      </>
    )
}