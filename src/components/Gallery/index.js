import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './styles.css'
import {useLayoutEffect, useRef} from "react";

const Gallery = ({content}) => {
    gsap.registerPlugin(ScrollTrigger)
    const gallery = useRef(null)
    const horizontalScroll = useRef(null);

    useLayoutEffect(() => {
        let element = gallery.current;
        let scrollingElement = horizontalScroll.current;
        let pinWrapWidth = scrollingElement?.offsetWidth
        console.log(element)
        // let t1 = gsap.timeline();
        gsap.to(scrollingElement, {
            scrollTrigger: {
                trigger: element,
                //`блок рабочаяОбласть`
                start: `center center`,
                end: `80% center`,
                // end: pinWrapWidth,
                //закрепляется на самой галерее пока она не прокрутится
                pin: true,
                //задает плавность, в течении этого значения после остановки скролла
                //идет анимация
                scrub: 2,
                // markers: true,
            },
            xPercent: -120,
            duration: 90,
            ease: 'none',

        })
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