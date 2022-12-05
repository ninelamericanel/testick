import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Gallery from "./components/Gallery";
import { data } from './contentData'
import './App.css';

function App() {
    return (
        <>
            <Header/>
            <div className="main-wrapper">
                <section className='section start'>
                    <Section content={data.content1}/>
                </section>
                <section className="gallery section">
                    <Gallery content={data.gallery}/>
                </section>
                <section className='section end'>
                    <Section content={data.content2}/>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default App;
