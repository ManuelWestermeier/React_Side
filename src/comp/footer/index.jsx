import "./index.css"

const Email="luca.sturmat@akg-traunstein.de"
const Telephone="xxxxxx"

export default function Footer() {  
    return (
      <>
        <section className="footer">
            <p><a href="https://www.youtube.com/">Youtube</a></p>
            <p><a href={"mailto:"+Email}>Email</a></p>
            <p><a href={"tel:"+Telephone}>Telephone</a></p>
            <p><a href="">About</a></p>
            <p><a href="./datenschutz.html">Datenschutz</a></p>
            <p><a href="./impressum.html">Impressum</a></p>
        </section>
      </>
    )
}