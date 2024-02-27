export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('alignCatText', () => {
        const a = document.querySelector<HTMLElement>(".js-column-text");
        const c = document.querySelector<HTMLElement>(".js-column-image");

        if (a && c && a.clientHeight >= c.clientHeight - 45) {
            a.style.height = c.clientHeight - 45 + "px";
            a.style.overflow = "hidden";
            a.style.position = "relative";

            if (isOverflowed(a)) {
                const moreText = document.createElement('a');
                moreText.href = "javascript:;";
                moreText.className = "more_text";
                moreText.textContent = "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435";
                a.appendChild(moreText);

                moreText.addEventListener("click", function () {
                    const parent = this.parentNode as HTMLElement;
                    parent.style.height = "";
                    parent.style.marginBottom = "20px";
                    this.style.display = "none";
                });
            }
        }
    });

    function isOverflowed(element: HTMLElement) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }
});
