import './styles.css'

const Section = ({text2, title, blockTitle, text, photo1, photo2}) => {
    return (
        <section className="section">
            <div className="container section__wrapper">
                <h2 className="main__title title">{title}</h2>
                <div className="wrapper">
                    <div className="section__block outside">
                        <div className="section__image">
                            <img src={photo1}/>
                        </div>
                        <div className="section__description">
                            <h3>{blockTitle}</h3>
                            <div className="section__text">
                                <p>{text}</p>
                                <p>{text2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="section__block">
                        <div className="section__description">
                            <h3>{blockTitle}</h3>
                            <div className="section__text">
                                <p>{text}</p>
                                <p>{text2}</p>
                            </div>
                        </div>
                        <div className="section__image">
                            <img src={photo2}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;