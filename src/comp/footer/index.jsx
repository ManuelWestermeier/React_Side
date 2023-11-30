import "./index.css"

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