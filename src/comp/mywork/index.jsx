import { useState } from "react"
import Toggler from "./../toggler/index.jsx"
import "./index.css"

var Things = {
    programming:(
        <>
        <h1>I'm a good Developer</h1>
        <p>Hallo2</p>
        </>),
    AffilietLinks:(
        <>
        <h1>Affiliet Links</h1>
        <h3>My links</h3>
        <ul className="m30">
            <li key={1}>
                <a href="">Link 1</a>
            </li>
            <li key={2}>
                <a href="">Link 2</a>
            </li>
            <li key={3}>
                <a href="">Link 3</a>
            </li>
            <li key={4}>
                <a href="">Link 4</a>
            </li>
        </ul>
        </>),
    projects:(
        <>
        <h1>Bulilding Projects</h1>
        <p>May Projects Are</p>   
        <div className="projects">
            <Toggler title="Ein Projeckt (1)" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente, quae beatae sint libero eum culpa rem velit officiis vero, aperiam vitae harum blanditiis voluptatem unde tempora officia. Illo, possimus."></Toggler>
               
            <Toggler title="Ein Projeckt (2)" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente, quae beatae sint libero eum culpa rem velit officiis vero, aperiam vitae harum blanditiis voluptatem unde tempora officia. Illo, possimus."></Toggler>
                    
            <Toggler title="Ein Projeckt (3)" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente, quae beatae sint libero eum culpa rem velit officiis vero, aperiam vitae harum blanditiis voluptatem unde tempora officia. Illo, possimus."></Toggler>
        
            <Toggler title="Ein Projeckt (4)" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente, quae beatae sint libero eum culpa rem velit officiis vero, aperiam vitae harum blanditiis voluptatem unde tempora officia. Illo, possimus."></Toggler>        
        </div> 
        </>
    ),
    hardware:(
        <>
        <h1>Testing Hardware</h1>
        <img width={"60%"} src="https://v2com.com/wp-content/uploads/2018/09/hd.jpg"></img>
        </>
    )
}


window.addEventListener("hashchange",e=>{
    var hash=(document.location.hash).replace("#","")
    if(hash=="Home"){
        window.scrollTo({
            top:0
        })
    }
    if(Things[hash]){
        document.querySelector(".ml20").scrollIntoView({
            block:"center",
        })
    }
})


export default function MyWork(){
    const [Thing, setThing] = useState("programming")

    return(
        <>
            <br />
            <br />
            <hr />
           <p className="list">
                <a href="#programming" className={Thing=="programming"?"a-focus":""} onClick={()=>{setThing("programming")}}>Programming</a>
                <a href="#AffilietLinks" className={Thing=="AffilietLinks"?"a-focus":""} onClick={()=>{setThing("AffilietLinks")}}>Affiliet Links</a>
                <a href="#projects" className={Thing=="projects"?"a-focus":""} onClick={()=>{setThing("projects")}}>Building Projects</a>
                <a href="#hardware" className={Thing=="hardware"?"a-focus":""} onClick={()=>{setThing("hardware")}}>Testing Hardware</a>
            </p>
            <hr />
            <br />
            <br />
            <div className="ml20">
                {Things[Thing]}
            </div>
        </>
    )
}