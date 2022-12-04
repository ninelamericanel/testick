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
        let t1 = gsap.timeline();

            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    // scroller: '#root',
                    scrub: true,
                    pin: true,
                    // markers: true,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none'
            })

            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    // scroller: '#root',
                    // scroller: '.container',
                    scrub: true,
                    // markers: true,
                },
                x: -pinWrapWidth,
                ease: 'none'
            })
    }, [])
    return (
        <section ref={gallery} className="gallery">
            <div className="horizontal-scroll" ref={horizontalScroll}>
                {arrayOfPhoto.map((src, i) => {
                    return <div key={i} className="gallery__image">
                        <img src={src}/>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Gallery