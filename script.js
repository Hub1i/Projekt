const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('show');
    hamburger.classList.toggle('active');
    
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Zamknij menu po kliknięciu gdziekolwiek
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('nav')) {
        navList.classList.remove('show');
        hamburger.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const totalSlides = slideItems.length;
    let currentIndex = 0;
    let slideInterval;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startSlider() {
        slideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 4000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    prevBtn.addEventListener('click', () => {
        stopSlider();
        goToSlide(currentIndex - 1);
        startSlider();
    });

    nextBtn.addEventListener('click', () => {
        stopSlider();
        goToSlide(currentIndex + 1);
        startSlider();
    });

    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    startSlider();

    // Theme switcher
    const themeSwitcher = document.getElementById('themeSwitcher');
    const icon = themeSwitcher.querySelector('i');
    const themeText = themeSwitcher.querySelector('span');
    let currentTheme = localStorage.getItem('theme') || 'dark';

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'light') {
            icon.className = 'fas fa-sun';
            themeText.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            themeText.textContent = 'Dark Mode';
        }
    }

    themeSwitcher.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });

    // Initialize theme
    setTheme(currentTheme);
});

// Modal for opinions
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("opinieModal");
    const opinieLink = document.querySelector('a[href="#opinie"]');
    const closeBtn = document.querySelector(".close");

    opinieLink.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});