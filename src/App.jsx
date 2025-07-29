import {useState} from "react";
import {Navbar} from "./Components/Navbar.jsx";
import {MobileMenu} from "./Components/MobileMenu.jsx";
import {LoadingScreen} from "./Components/LoadingScreen.jsx";
import {Home} from "./Components/section/Home.jsx"
import './App.css'

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

return (
    <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>} {" "}

        <div className={`min-h-screen transition-opacity duration-700
       ${isLoaded ? "opacity-100" : "opacity-0"} bg-whitesmoke text-black-100`}>

            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

            <Home/>

        </div>



    </>
  )
}

export default App
