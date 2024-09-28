let slideIndex = 0;
showSlides(slideIndex);

// Fungsi untuk menampilkan slide sesuai indeks
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Loop untuk menyembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Loop untuk menghapus kelas 'active' dari semua indikator
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Tampilkan slide yang sesuai dengan index dan aktifkan indikator yang sesuai
    slides[n].style.display = "flex";  // Gunakan 'flex' agar konten tetap teratur
    dots[n].className += " active";
}

// Fungsi untuk mengubah slide sesuai dengan indikator yang diklik
function currentSlide(n) {
    showSlides(slideIndex = n);
}
