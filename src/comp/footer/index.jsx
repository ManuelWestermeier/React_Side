import "./index.css"

const Email = "Manuel.Westermeier111@gmail.de"
const Telephone = "4915256427900"

export default function Footer() {  
    return (
      <>
        <section className="footer">
            <p><a href="https://www.youtube.com/@__fireworks" target="__blank">Youtube</a></p>
            <p><a href={"mailto:"+Email}>E-Mail</a></p>
            <p><a href={"tel:"+Telephone}>Telephon</a></p>
            <p><a href="#home">About</a></p>
            <p><a href="./datenschutz.html">Datenschutz</a></p>
            <p><a href="./impressum.html">Impressum</a></p>
        </section>
      </>
    )
}