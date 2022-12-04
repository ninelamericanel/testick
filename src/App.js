import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Gallery from "./components/Gallery";

function App() {
    const title = 'ut aliquip ex ea commodo consequat'.toUpperCase()
    const blockTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    const text = 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'


    return (
        <>
            <Header/>
            <div className="container">
                <Section title={title} text={text} blockTitle={blockTitle}/>
                <Gallery title={title}/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
