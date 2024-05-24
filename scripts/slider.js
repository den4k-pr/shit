const imagePaths2 = [
    "./images/products/product-2-1.jpg",
    "./images/products/product-2-2.jpg",
    "./images/products/product-2-3.jpg",
    "./images/products/product-2-4.jpg",
    "./images/products/product-2-5.jpg",
    "./images/products/product-2-6.jpg",
    "./images/products/product-2-7.jpg",
    "./images/products/product-2-8.jpg",
    "./images/products/product-2-9.jpg"
];

const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');
const sliderImage2 = document.getElementById('sliderImage2');
const sliderNextImage2 = document.getElementById('sliderNextImage2');
let currentIndex2 = 6;

// Preload images
const preloadedImages2 = [];
imagePaths2.forEach((path) => {
    const img = new Image();
    img.src = path;
    preloadedImages2.push(img);
});

function showImage2(index) {
    sliderImage2.src = preloadedImages2[index].src;
}

function showNextImage2(index) {
    sliderNextImage2.src = preloadedImages2[index].src;
}

function updateImages() {
    showImage2(currentIndex2)
    const nextIndex2 = (currentIndex2 + 1) % preloadedImages2.length;
    showNextImage2(nextIndex2)
}

prevButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : preloadedImages2.length - 1;
    updateImages();
});

nextButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 < preloadedImages2.length - 1) ? currentIndex2 + 1 : 0;
    updateImages();
});

updateImages();
