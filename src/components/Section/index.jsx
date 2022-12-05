import './styles.css'

const Section = ({content: {block1, block2}}) => {
    return (
        <section className="section">
            <div className="container section__wrapper">
                <h2 className="main__title title">{block1.title}</h2>
                <div className="wrapper">
                    <div className="section__block outside">
                        <div className="section__image">
                            <img src={block1.src}/>
                        </div>
                        <div className="section__description">
                            <h3>{block1.subtitle}</h3>
                            <div className="section__text">
                                <p>{block1.text}</p>
                                <p>{block1.text2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="section__block">
                        <div className="section__description">
                            <h3>{block2.subtitle}</h3>
                            <div className="section__text">
                                <p>{block2.text}</p>
                                <p>{block2.text2}</p>
                            </div>
                        </div>
                        <div className="section__image">
                            <img src={block2.src}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;