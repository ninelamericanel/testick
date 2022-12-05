import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './styles.css'
import {useLayoutEffect, useRef} from "react";
import useWindowDimensions from "../../hook/useWindowDimensions";

const Gallery = ({content}) => {
    const {width} = useWindowDimensions();

    gsap.registerPlugin(ScrollTrigger)
    const gallery = useRef(null)
    const horizontalScroll = useRef(null);

    useLayoutEffect(() => {
        if (width >= 1024) {
            let element = gallery.current;
            let scrollingElement = horizontalScroll.current;
            gsap.to(scrollingElement, {
                scrollTrigger: {
                    trigger: element,
                    start: `center center`,
                    end: `80% center`,
                    pin: true,
                    scrub: 2,
                },
                xPercent: -120,
                duration: 90,
                ease: 'none',

            })
        }
    }, [])
    return (
        <div ref={gallery} className="gallery__section">
            <div className="container">
                <div className="gallery__block">
                    <h2 className="title gallery__title">{content.title}</h2>
                    <div className="horizontal-scroll" ref={horizontalScroll}>
                        {content.photos.map((src, i) => {
                            return <div key={i} className="gallery__image">
                                <img src={src}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery