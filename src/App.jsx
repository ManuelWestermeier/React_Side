import MainHeader from "./comp/heder/index.jsx"
import Main from "./comp/main/index.jsx"
import Footer from "./comp/footer/index.jsx"

var log = console.log

function App() {
  return (
    <>
    <div>
      <MainHeader headline="Willkommen"></MainHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App