document.addEventListener('DOMContentLoaded', function() {

    // --- Efek Ketik untuk Hero Subtitle ---
    const typedTextSpan = document.getElementById('typed-text');
    // Ganti array ini dengan profesi/keahlian Anda
    const textArray = ["Compositor", "Animator",]; 
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 1000; // Jeda sebelum mengetik teks baru
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // --- Header menjadi sticky saat scroll ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Toggle Menu Mobile ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Tutup menu saat link di-klik (untuk pengalaman pengguna mobile yang lebih baik)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    });

    // Mulai efek ketik setelah halaman dimuat
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

