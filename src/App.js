import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Gallery from "./components/Gallery";
import photo1 from "./img/julia-d-FlNTu2Bj4Dg-unsplash-1.png";
import photo2 from "./img/taisiia-stupak-viq7xx1boxo-unsplash1-2.png";
import photo3 from './img/julia-d-FlNTu2Bj4Dg-unsplash.png'
import photo4 from './img/taisiia-stupak-viq7xx1boxo-unsplash-2.png'

function App() {
    const title = 'ut aliquip ex ea commodo consequat'.toUpperCase()
    const blockTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    const text = 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'


    return (
        <>
            <Header/>
            <div className="wrapper scroll-wrapper">
                <section className='section'>
                    <Section title={title} text={text} blockTitle={blockTitle} photo1={photo1} photo2={photo2}/>
                </section>
                <section className="gallery section">
                    <Gallery title={title}/>
                </section>
                <section className='section'>
                    <Section title={title} text={text} blockTitle={blockTitle} photo1={photo3}
                             photo2={photo4}/>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default App;
