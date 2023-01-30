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


const BTN_GARDENS = document.querySelectorAll('.btn_service')[0];
const BTN_LAWN = document.querySelectorAll('.btn_service')[1];
const BTN_PLANTING = document.querySelectorAll('.btn_service')[2];
const SERVICE_BUTTONS = document.querySelector('.service__buttons');
const ADD_COLOR = 'active-service';
const SERVICE_CARD = document.querySelectorAll('.service__card');
const BLUR_CARD = 'blur-card';

const showClick = () => {

    SERVICE_BUTTONS.addEventListener('click', (e) => {
        if (e.target === BTN_GARDENS) {
            BTN_LAWN.classList.remove(ADD_COLOR);
            BTN_PLANTING.classList.remove(ADD_COLOR);
            SERVICE_CARD[0].classList.remove(BLUR_CARD);
            SERVICE_CARD[4].classList.remove(BLUR_CARD);

            BTN_GARDENS.classList.add(ADD_COLOR);
            SERVICE_CARD[1].classList.add(BLUR_CARD);
            SERVICE_CARD[2].classList.add(BLUR_CARD);
            SERVICE_CARD[3].classList.add(BLUR_CARD);
            SERVICE_CARD[5].classList.add(BLUR_CARD);
        }

        if (e.target === BTN_LAWN) {
            BTN_GARDENS.classList.remove(ADD_COLOR);
            BTN_PLANTING.classList.remove(ADD_COLOR);
            SERVICE_CARD[2].classList.remove(BLUR_CARD);

            BTN_LAWN.classList.add(ADD_COLOR);
            SERVICE_CARD[0].classList.add(BLUR_CARD);
            SERVICE_CARD[1].classList.add(BLUR_CARD);
            SERVICE_CARD[3].classList.add(BLUR_CARD);
            SERVICE_CARD[4].classList.add(BLUR_CARD);
            SERVICE_CARD[5].classList.add(BLUR_CARD);
        }

        if (e.target === BTN_PLANTING) {
            BTN_GARDENS.classList.remove(ADD_COLOR);
            BTN_LAWN.classList.remove(ADD_COLOR);
            SERVICE_CARD[1].classList.remove(BLUR_CARD);
            SERVICE_CARD[3].classList.remove(BLUR_CARD);
            SERVICE_CARD[5].classList.remove(BLUR_CARD);

            BTN_PLANTING.classList.add(ADD_COLOR);
            SERVICE_CARD[0].classList.add(BLUR_CARD);
            SERVICE_CARD[2].classList.add(BLUR_CARD);
            SERVICE_CARD[4].classList.add(BLUR_CARD);
        }
    })

}



showClick();

// const dropdown = document.querySelector('.dropdown');
// const input = document.querySelector('.dropdown-input');
// const listOfOptions = document.querySelectorAll('.option');
// const body = document.body;

// const toggleDropdown = (event) => {
//     event.stopPropagation();
//     dropdown.classList.toggle('opened');
// };

// const selectOption = (event) => {
//     input.value = event.currentTarget.textContent;
// };

// const closeDropdownFromOutside = () => {
//     if (dropdown.classList.contains('opened')) {
//         dropdown.classList.remove('opened');
//     }
// };

// body.addEventListener('click', closeDropdownFromOutside);
// listOfOptions.forEach((option) => {
//     option.addEventListener('click', selectOption);
// });

// dropdown.addEventListener('click', toggleDropdown);

const dropdown = document.querySelector('.dropdown-basic');
const dropdownStandard = document.querySelector('.dropdown-standard');
const dropdownProCare = document.querySelector('.dropdown-pro-care');
const dropdownContacts = document.querySelector('.dropdown-contacts');
// const input = document.querySelector('.dropdown-basic-input');
const input = document.querySelector('.dropdown-basic');
// const inputStandard = document.querySelector('.dropdown-standard-input');
const inputStandard = document.querySelector('.dropdown-standard');
const inputProCare = document.querySelector('.dropdown-pro-care');
const inputContacts = document.querySelector('.dropdown-contacts-input');
const listOfOptions = document.querySelectorAll('.option-basic');
const listOfOptionsStandard = document.querySelectorAll('.option-standard');
const listOfOptionsProCare = document.querySelectorAll('.option-pro-care');
const listOfOptionsContacts = document.querySelectorAll('.option-contacts');
const body = document.body;
const canandaigua = document.querySelector('.address__canandaigua');
const ny = document.querySelector('.address__ny');
const yonkers = document.querySelector('.address__yonkers');
const sherrill = document.querySelector('.address__sherrill');

const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('opened');
};
const toggleDropdownStandard = (event) => {
    event.stopPropagation();
    dropdownStandard.classList.toggle('opened');
};
const toggleDropdownProCare = (event) => {
    event.stopPropagation();
    dropdownProCare.classList.toggle('opened');
};
const toggleDropdownContacts = (event) => {
    event.stopPropagation();
    dropdownContacts.classList.toggle('opened');
    if (dropdownContacts.classList.contains('opened')) {
        inputContacts.style.backgroundColor = '#C1E698';
    } 
};

const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
};
const selectOptionStandard = (event) => {
    inputStandard.value = event.currentTarget.textContent;
};
const selectOptionProCare = (event) => {
    inputProCare.value = event.currentTarget.textContent;
};
const selectOptionContacts = (event) => {
    inputContacts.value = event.currentTarget.textContent;
    inputContacts.classList.add('cg-color-input');

    if (inputContacts.value === 'Canandaigua, NY') {
        ny.style.display = 'none';
        yonkers.style.display = 'none';
        sherrill.style.display = 'none';
        canandaigua.style.display = 'block';
    } 

    if (inputContacts.value === 'New York City') {
        canandaigua.style.display = 'none';
        yonkers.style.display = 'none';
        sherrill.style.display = 'none';
        ny.style.display = 'block';
    }

    if (inputContacts.value === 'Yonkers, NY') {
        canandaigua.style.display = 'none';
        sherrill.style.display = 'none';
        ny.style.display = 'none';
        yonkers.style.display = 'block';
    }

    if (inputContacts.value === 'Sherrill, NY') {
        canandaigua.style.display = 'none';
        yonkers.style.display = 'none';
        ny.style.display = 'none';
        sherrill.style.display = 'block';
    }
};

const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains('opened')) {
        dropdown.classList.remove('opened');
    }
};
const closeDropdownFromOutsideStandard = () => {
    if (dropdownStandard.classList.contains('opened')) {
        dropdownStandard.classList.remove('opened');
    }
};
const closeDropdownFromOutsideProCare = () => {
    if (dropdownProCare.classList.contains('opened')) {
        dropdownProCare.classList.remove('opened');
    }
};
const closeDropdownFromOutsideContacts = () => {
    if (dropdownContacts.classList.contains('opened')) {
        dropdownContacts.classList.remove('opened');
    }
};


body.addEventListener('click', (closeDropdownFromOutside, closeDropdownFromOutsideStandard));
listOfOptions.forEach((option) => {
    option.addEventListener('click', selectOption);
});
listOfOptionsStandard.forEach((option) => {
    option.addEventListener('click', selectOptionStandard);
});
listOfOptionsProCare.forEach((option) => {
    option.addEventListener('click', selectOptionProCare);
});
listOfOptionsContacts.forEach((option) => {
    option.addEventListener('click', selectOptionContacts);
});


dropdown.addEventListener('click', toggleDropdown);
dropdownStandard.addEventListener('click', toggleDropdownStandard);
dropdownProCare.addEventListener('click', toggleDropdownProCare);
dropdownContacts.addEventListener('click', toggleDropdownContacts);
