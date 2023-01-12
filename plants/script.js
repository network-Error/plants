console.log('Nice Job')

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
const animationTime = 300;
const framesCount = 20;

anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

        let scroller = setInterval(function() {
            let scrollBy = coordY / framesCount;

            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, animationTime / framesCount);
    });
});

const links = [].slice.call(document.querySelectorAll('a[href*="#"]'));
const frames = 35;

links.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        let elCoordinateY = document.querySelector(item.getAttribute('#href')).getBoundingClientRect().top + window.pageYOffset;

        let scroller = setInterval( () => {
            let scrollBy = elCoordinateY / frames;

            if (scrollBy > window.pageYOffset - elCoordinateY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, elCoordinateY);
                clearInterval(scroller);
            }
        }, animationTime / frames)
    })
});

// burger menu
const menuLinks = document.querySelectorAll('.burger__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick)
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gototBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gototBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }
const iconMenu = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.burger__body');
    if (iconMenu) {
        iconMenu.addEventListener('click', function(e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        })
    } 
    window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.burger__icon') && !target.closest('.burger__body')) {
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }
    })