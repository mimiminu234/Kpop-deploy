// Intersection Observer for Scroll Reveal
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Artist Gallery Logic (Using Image Proxy to ensure loading)
const imageProxy = "https://wsrv.nl/?url=";
const artistImages = {
    bts: {
        name: "BTS",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/4/4b/BTS_at_the_2019_The_Fact_Music_Awards.png"
    },
    blackpink: {
        name: "BLACKPINK",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/3/3b/Blackpink_Coachella_2023_02_%28cropped%29.jpg"
    },
    newjeans: {
        name: "NEWJEANS",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/a/a2/New_Jeans_for_Shinhan_Bank_Sol_01.jpg"
    },
    twice: {
        name: "TWICE",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/d/da/Twice_at_2019_MGMA.png"
    },
    seventeen: {
        name: "SEVENTEEN",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/c/cc/Seventeen_at_the_2019_The_Fact_Music_Awards.png"
    },
    ive: {
        name: "IVE",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/6/67/Ive_at_2022_MMA.jpg"
    },
    straykids: {
        name: "STRAY KIDS",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/5/5e/Stray_Kids_at_the_2019_The_Fact_Music_Awards.png"
    },
    aespa: {
        name: "AESPA",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/6/6e/Aespa_at_2021_KBS_Song_Festival.jpg"
    },
    lesserafim: {
        name: "LE SSERAFIM",
        url: imageProxy + "https://upload.wikimedia.org/wikipedia/commons/b/ba/Le_Sserafim_at_the_2022_The_Fact_Music_Awards.jpg"
    }
};

const artistViewer = document.getElementById('artist-viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerName = document.getElementById('viewer-name');
const closeViewer = document.getElementById('close-viewer');

document.querySelectorAll('#artist-tags button').forEach(button => {
    button.addEventListener('click', () => {
        const groupKey = button.getAttribute('data-group');
        const artist = artistImages[groupKey];

        if (artist) {
            // If clicking the same button and viewer is open, hide it
            if (!artistViewer.classList.contains('hidden') && viewerName.innerText === artist.name) {
                hideViewer();
                return;
            }

            // Show and update viewer
            viewerImg.src = artist.url;
            viewerName.innerText = artist.name;
            showViewer();
        }
    });
});

closeViewer.addEventListener('click', hideViewer);

function showViewer() {
    artistViewer.classList.remove('hidden');
    // Force reflow for transition
    void artistViewer.offsetWidth;
    artistViewer.classList.remove('opacity-0', 'scale-95');
    artistViewer.classList.add('opacity-100', 'scale-100');
}

function hideViewer() {
    artistViewer.classList.remove('opacity-100', 'scale-100');
    artistViewer.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        artistViewer.classList.add('hidden');
    }, 500);
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('header img');
    const scrollPos = window.pageYOffset;
    if (hero) {
        hero.style.transform = `translateY(${scrollPos * 0.3}px) scale(1.1)`;
    }
});
