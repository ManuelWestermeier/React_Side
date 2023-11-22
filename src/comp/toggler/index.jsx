import { useState } from "react"
import './index.css'

const toggle=b=>b?false:true

export default function Toggler(props){
    const [hide, setHide] = useState(false)

    return (
        <>
            <div className="toggler">
                <h2 title="Click To See Or Hide" onClick={()=>setHide(toggle(hide))}>{props.title} </h2>
                <p className={hide?"true":"false"}>{props.text}</p>
            </div>
        </>
    )
}