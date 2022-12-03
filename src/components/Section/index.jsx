import photo1 from "../../img/julia-d-FlNTu2Bj4Dg-unsplash-1.png";
import photo2 from "../../img/taisiia-stupak-viq7xx1boxo-unsplash 1-1.png";
import './styles.css'

const Section = ({ title, blockTitle, text }) => {
    return (
        <section className="section">
            <h2 className="main__title title">{title}</h2>
            <div className="wrapper">
                <div className="section__block outside">
                    <div className="section__image">
                        <img src={photo1}/>
                    </div>
                    <div className="section__content">
                        <h3>{blockTitle}</h3>
                        <p>{text}</p>
                    </div>
                </div>
                <div className="section__block">
                    <div className="section__content">
                        <h3>{blockTitle}</h3>
                        <p>{text}</p>
                    </div>
                    <div className="section__image">
                        <img src={photo2}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;