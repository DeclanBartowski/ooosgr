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
    nuxtApp.provide('openB24AgreementModal', () => {
        const overlay = document.querySelector('#b24-window-mount .b24-window-overlay');
        const popup = document.querySelector('#b24-window-mount .b24-window-popup');
        if (overlay){
            overlay.style.display = '';
        }
        if (popup){
            popup.style.display = '';
        }
    });
    nuxtApp.provide('variableTitle', () => {
        const a = document.querySelector(".js-title");
        const c = document.querySelector(".js-short-title");
        const queryInput = document.querySelector("header .form .query");

        queryInput.addEventListener("focus", function () {
            queryInput.style.width = "455px";
            fadeInAndOut(a, c);
        });

        queryInput.addEventListener("blur", function () {
            queryInput.style.width = "250px";
            fadeInAndOut(c, a);
        });
        function fadeInAndOut(fadeOutElement, fadeInElement) {
            fadeOutElement.style.transition = "opacity 0.25s";
            fadeOutElement.style.opacity = 0;

            setTimeout(function () {
                fadeOutElement.style.display = "none";
                fadeInElement.style.display = "block";

                setTimeout(function () {
                    fadeInElement.style.opacity = 1;
                }, 0);
            }, 250);
        }
    });
    nuxtApp.provide('initSlidingMenus', (target) => {
        target = target ? target : document.body;
        const menus = target.querySelectorAll('.js-menu');

        if (menus.length <= 0) {
            return false;
        }

        menus.forEach(function (menu) {
            const mode = menu.dataset.mode;
            const switcher = menu.querySelector('.js-menu__switcher');
            const options = menu.querySelector('.js-menu__options');

            switcher.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                switcher.classList.toggle('menu-switcher--active');

                if (mode) {
                    options.classList.toggle('menu-options--active');
                } else {
                    if (options.style.display === 'none' || options.style.display === '') {
                        options.style.display = 'block';
                    } else {
                        options.style.display = 'none';
                    }
                }
            });
        });
    });
});
