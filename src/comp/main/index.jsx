import MyWork from "./../mywork/index.jsx"
import "./index.css"

export default function Main(){
    return (
        <section className="main">
            <br/>
            <div className="home">
                <h1>Hallo</h1>
                <p>Ich bin <b>Manuel Westermeier</b> aktuell 14 Jahre.</p>
                <br />
                <i><a href="#programming">{">> "}Meine Ersten Programmier Erfahrungen</a></i>
                <br />
                <i><a href="#projects">{">> "}Meine Projeckte bis jetzt sind</a></i>
            </div>
            <MyWork></MyWork>
        </section>
    )
} 