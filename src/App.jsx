import {Navbar, Welcome, Dock, Home} from "#components"
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import {Safari, Terminal, Resume, Finder, Text, ImageWindowContent, Contact, Photos} from "#windows";


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
            <Photos />
            <Home/>
        </main>
    )
}
export default App
