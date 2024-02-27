export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('checkShadowByRouteName', (routeName: string): boolean => {
        return routeName == 'index' || routeName == 'vosstanovlenie-trub' || routeName == 'procurement' || routeName == 'about-company' || routeName == 'kontakty';
    });
    nuxtApp.provide('initializeParallax', () => {
        const parallaxElements = document.querySelectorAll(".parallax");

        if (!(parallaxElements.length <= 0)) {
            function calculateParallaxVelocity(element) {
                const img = element.querySelector("img");
                const imgHeight = img.offsetHeight;
                const elementHeight = element.offsetHeight;
                const elementOffsetTop = element.offsetTop + elementHeight;

                element.setAttribute("data-parallax-velocity", (imgHeight - elementHeight) / elementOffsetTop);
            }

            function updateParallax() {
                const windowHeight = window.innerHeight;
                const scrollTop = window.scrollY;

                parallaxElements.forEach(function (element) {
                    if (windowHeight + scrollTop >= element.offsetTop) {
                        const parallaxVelocity = parseFloat(element.getAttribute("data-parallax-velocity"));
                        const img = element.querySelector("img");

                        img.style.top = -parallaxVelocity * scrollTop + "px";
                    }
                });
            }

            function resizeParallax() {
                parallaxElements.forEach(calculateParallaxVelocity);
            }

            parallaxElements.forEach(calculateParallaxVelocity);
            updateParallax();

            window.addEventListener("scroll", updateParallax);
            window.addEventListener("resize", resizeParallax);
        }
    });
});
