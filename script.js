let slideIndex = 0;
showSlides(slideIndex);

// Fungsi untuk mengubah slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk menampilkan slide yang sesuai
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;  // Kembali ke slide pertama jika melebihi slide terakhir
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;  // Kembali ke slide terakhir jika kurang dari slide pertama
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Sembunyikan semua slide
    }
    slides[slideIndex].style.display = "block";  // Tampilkan slide yang aktif
}
