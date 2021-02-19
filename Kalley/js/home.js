(() => {
    let akHomeContainer = document.querySelector('.k-categories-holder'),
        akHomeElementList = akHomeContainer.querySelector('.k-categories-list'),
        akHomeElements = akHomeElementList.querySelectorAll('.k-categories-list li'),
        akHomeElementsQty = akHomeElements.length,
        akHomeNavigation = akHomeContainer.querySelectorAll('.k-categories-navigation'),
        akHomeStep = 20;

    function akHomeResize() {
        let holderWidth = akHomeContainer.offsetWidth
        if (window.matchMedia('(min-width: 75rem)').matches) {
            let newWidth = holderWidth * .2;
            akHomeStep = newWidth;
            [...akHomeElements].map(element => element.style.flex = `0 0 ${newWidth}px`)
        }
    }
    window.addEventListener('resize', akHomeResize)
    akHomeResize()

    akHomeElementList.style.left = 0

    akHomeNavigation.forEach(navigation => navigation.addEventListener('click', e => {
            e.preventDefault()
            let newLeft = 0
            if (navigation.classList.contains('right')) {
                newLeft = parseFloat(akHomeElementList.style.left) - akHomeStep
                let limit = -1 * ((akHomeElementsQty * akHomeStep) - akHomeContainer.offsetWidth)
                if (newLeft < limit) newLeft = limit
            } else if (navigation.classList.contains('left')) {
                newLeft = parseFloat(akHomeElementList.style.left) + akHomeStep
                if (newLeft > 0) newLeft = 0
            }
            akHomeElementList.style.left = `${newLeft}px`
        })
    )
})();