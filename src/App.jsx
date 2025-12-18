import {Navbar,Welcome,Dock} from"#components"
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import {Safari, Terminal, Resume, Finder, Text, ImageWindowContent, Contact} from "#windows";


gsap.registerPlugin(Draggable);
const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
           <ImageWindowContent />
            <Contact />
        </main>
    )
}
export default App
