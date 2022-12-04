import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './styles.css'
import arrayOfPhoto from "../../img/slider";
import {useLayoutEffect, useRef} from "react";

const Gallery = () => {
    gsap.registerPlugin(ScrollTrigger)
    const gallery = useRef(null)
    const horizontalScroll = useRef(null);

    useLayoutEffect(() => {
        let element = gallery.current;
        let scrollingElement = horizontalScroll.current;
        let pinWrapWidth = scrollingElement?.offsetWidth
        console.log(pinWrapWidth)
        // let t1 = gsap.timeline();
        gsap.to(scrollingElement, {
            scrollTrigger: {
                trigger: element,
                start: `top top`,
                end: pinWrapWidth,
                pin: true,
                scrub: true,
                markers: true,
            },
            x: -pinWrapWidth + 1000,
            ease: 'none',

        })
    }, [])
    return (
        <div ref={gallery} className="container">
            {/*<div className="container">*/}
                <h2 className="title">Title</h2>
            {/*</div>*/}
            <div className="horizontal-scroll" ref={horizontalScroll}>
                {arrayOfPhoto.map((src, i) => {
                    return <div key={i} className="gallery__image">
                        <img src={src}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Gallery