import MyWork from "./../mywork/index.jsx"
import "./index.css"

var ytVideoURL="https://www.youtube.com/watch?v=O3fZwiukM_I&ab_channel=J%C3%BCrgenTV"
var ytVideoTitel="Ein video Über mein unternehmen"

export default function Main(){
    return (
        <section className="main">
            <br/>
            <div className="home">
                <h1>Hallo</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, aliquid voluptatem vel impedit ullam dolores est qui, dignissimos dolorum quod mollitia explicabo illum temporibus itaque quas veritatis similique accusamus maiores!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, aliquid voluptatem vel impedit ullam dolores est qui, dignissimos dolorum quod mollitia explicabo illum temporibus itaque quas veritatis similique accusamus maiores!</p>
            </div>
            {/*<iframe src={`https://www.youtube.com/embed/${new URL(ytVideoURL).searchParams.get("v")}`} title={ytVideoTitel} autoFocus frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>*/}

            <MyWork></MyWork>
        </section>
    )
} 