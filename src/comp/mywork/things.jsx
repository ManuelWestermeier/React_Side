import Toggler from "./../toggler/index.jsx"

export var Things = {
    programming:(
        <>
        <h1>Mein Einstieg in die Programmierung</h1>
        <p>Ich programmiere Websiten seid ca. einem Jahr.</p>
        <p><b>Alles begann mit...</b></p>
        <p>Schon mit 11 habe ich mich für das Thema Programmieren und Hacken begeistern können.</p>
        <p>Mit 13 hab ich über Youtube ein Tutorial für eine Eieruhr in  einer Website gesehen.</p>
        <p>Wenige Wochen später erlernte ich die Grundlagen für den Bau einer Website (HTML und CSS).
            Gleichzeitig begann ich mit der Spieleentwicklung mit Unity und C#.
        </p>
        <p>Als ich diese Grundlagen beherschte fing ich mit Javascript an.</p>
        <p>Ich codete leidenschaftlich viele Projeckte bis ich mit Node JS anfing.</p>
        <p><a href="#projects">{">>zu den Projeckten"}</a></p>
        </>),
    projects:(
        <>
        <h1>Meine Projeckte</h1>
        <br />
        <div className="projects">
           
            <Toggler title="Ein eigenes Twitter/Facebook"
            text={(
                <>
                <br />
                <h4>Ich dachte mir dass ich ein eigenes Twitter/Facebook auch programmieren könne...</h4>
                <br />
                <p>...Nach 3 Wochen harter Arbeit hebe ich es geschaft...</p>
                <br />
                <p>Ein zu 100% selbstgecodetet Sotial-Media Dienst mit : </p>
                <li>Abbo Funktion</li>
                <li>Like Funktion</li>
                <li>Kommentar Funktion</li>
                <li>Profielbild Funktion (Haupt & Background)</li>
                <li>Textupload Funktion</li>
                <li>Chatt Funktion</li>
                <li>Für Mobielgeräte angepasst</li>
                <li>For-You-Page</li>
                <li>Keyboard ShortCuts</li>
                <li>Anti-Hack sicherheit</li>
                <img src="img/Twitter3.jpg" alt="Bild" />
                <img src="img/Twitter.jpg" alt="Bild" />
                <img src="img/Twitter2.jpg" alt="Bild" />
                </>
            )}
            ></Toggler>
            <Toggler title="Einen eigenen Browser"
            text={(
                <>
                <b>Ich habe ein eigenen Browser in electron entwickelt.</b>
                <p>Funktionen</p>
                <li>Color Themes</li>
                <li>Extension Support</li>
                <li>Wird nicht abgehört</li>
                <li>Mit eigener Suchfuntion</li>
                <li>Mit Tab Funktion</li>
                <li>Mit Keyboard-Shortcuts</li>
                <img src="img/Browser.jpg" alt="Browser Bild" />
                <img src="img/Browser2.jpg" alt="Browser Bild" />
                </>
            )}
            ></Toggler>
            <Toggler title="Einen eigenen Messenger"
            text={(
                <>
                <b>Ich habe ein eigenen Messenger programmiert.</b>
                <p>Funktionen</p>
                <li>Room Support</li>
                <li>User online see Funktion</li>
                <li>Mit Emoji Funktion</li>
                <li>Mit Multichattroom support</li>
                <li>Mit Keyboard-Shortcuts</li>
                <img src="img/Messenger.jpg" alt="Messenger Bild" />
                </>
            )}
            ></Toggler>
            <Toggler title="Ein Auto Racing Game"
            text={(
                <>
                <b>Ich habe ein Autogame programmiert.</b>
                <p>In dem Game muss man mit einem Auto in 3D so weit wie möglich kommen ohne einen Tank zu verpassen (man kann das Auto auch Upgraden).</p>
                <p>Funktionen</p>
                <li>Map Modus</li>
                <li>Upgrade Menue</li>
                <li>Auto Aussehen Verändebahr</li>
                <li>Gegner-Ramm Modus</li>
                <img src="img/CarGame.jpg" alt="Cargame Bild" />
                <img src="img/CarGame2.jpg" alt="Cargame Bild" />
                </>
            )}
            ></Toggler>
            <Toggler title={(<h5>Kanzlei Gabl Webside (am Anfang)</h5>)}
            text={(
                <>
                <b>Mein erstes Projeckt war eine Websie für eine Anwältin.</b>
                <br />
                <a href="https://kanzlei-gabl.de/startseite.html" target="_blank">Der Link zu der Webside ist Hier</a>  
                <img src="img/Kanzlei.jpg" alt="Kanzlei Gabl Bild" />
                </>
            )}
            ></Toggler>
        </div>
        <br />
        <h4>...Und vieles mehr</h4>
        <p><b>All diese Beispiele habe ich zu 100% selbstgecodetet</b></p>
        </>
    ),
    contact: (
        <>
            <h1>Kontakt</h1>
            <p><a href="https://www.youtube.com/@__fireworks" target="__blank">Youtube https://www.youtube.com/@__fireworks</a></p>
            <p><a href={"mailto:"+Email}>E-Mail ({Email})</a></p>
            <p><a href={"tel:"+Telephone}>Telephon ({Telephone})</a></p>
        </>
    )
}