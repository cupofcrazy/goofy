import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

// plugin
const VueScrollTrigger = {
    install(Vue) {
        console.log('Installed custom ScrollTrigger Plugin.')
        // directive
        Vue.directive('scroll-y', {
            inserted(el) {
                gsap.from(el, 1, {
                    scrollTrigger: el,
                    clipPath: 'inset(0% 0% 100% 0%)',
                    yPercent: 100,
                    ease: 'expo.out',
                    // autoAlpha: 0
                })
            }
        })
        Vue.directive('scroll-fade', {
            inserted(el) {
                gsap.from(el, 1, {
                    scrollTrigger: el,
                    y:  100,
                    // scale: .25,
                    ease: 'expo.out',
                    autoAlpha: 0
                })
            }
        })
        Vue.mixin({
            methods: {
                getAspectRatio({ width, height }) {
                    return width / height
                },
            }
        })

    }
}

export default VueScrollTrigger