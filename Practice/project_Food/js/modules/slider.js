function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
    // ? Slider 
    // * более простой слайдер

    const slides = document.querySelectorAll(slide);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow),
        current = document.querySelector(currentCounter),
        total = document.querySelector(totalCounter);
    let slidesIndex = 1;

    // * пересенные для более сожного слайдера
    const slider = document.querySelector(container);

    const slidesWrapper = document.querySelector(wrapper),
        slidesFild = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;

    // showSlides(slidesIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {

    //     if (n > slides.length) {
    //         slidesIndex = 1;
    //     }

    //     if (n < 1) {
    //         slidesIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slidesIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slidesIndex}`;
    //     } else {
    //         current.textContent = slidesIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slidesIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    // * более сложный слайдер

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slidesIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slidesIndex;
    }

    slidesFild.style.width = 100 * slides.length + '%';
    slidesFild.style.display = 'flex';
    slidesFild.style.transsition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function widthReplaceDeleteNotDigits(str) {
        return +str.replace(/\D/g, '')
    }

    next.addEventListener('click', () => {
        if (offset == widthReplaceDeleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += widthReplaceDeleteNotDigits(width);
        }

        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (slidesIndex == slides.length) {
            slidesIndex = 1;
        } else {
            slidesIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slidesIndex}`;
        } else {
            current.textContent = slidesIndex;
        }

        indicators.forEach(dot => dot.style.opacity = '.5');
        indicators[slidesIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = widthReplaceDeleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= widthReplaceDeleteNotDigits(width);
        }

        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (slidesIndex == 1) {
            slidesIndex = slides.length;
        } else {
            slidesIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slidesIndex}`;
        } else {
            current.textContent = slidesIndex;
        }

        indicators.forEach(dot => dot.style.opacity = '.5');
        indicators[slidesIndex - 1].style.opacity = 1;
    });

    // * dots for slider

    const indicators = [];

    slider.style.position = 'relative';

    const dots = document.createElement('ol');
    dots.classList.add('carousel-indicators');

    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.append(dot);

        indicators.push(dot);
    }

    indicators.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slidesIndex = slideTo;

            offset = /*+width.slice(0, width.length - 2)*/ +width.replace(/\D/g, '') * (slideTo - 1);

            slidesFild.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slidesIndex}`;
            } else {
                current.textContent = slidesIndex;
            }

            indicators.forEach(dot => dot.style.opacity = '.5');
            indicators[slidesIndex - 1].style.opacity = 1;
        });
    });
}

export default slider;