// ===========================================
// JAVASCRIPT UNTUK MODAL (FITUR KLIK FOTO)
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen DOM
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPeriod = document.getElementById('modalPeriod');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');
    const experienceItems = document.querySelectorAll('.experience-item');

    // 1. Fungsi untuk membuka modal dan mengisi konten
    experienceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Ambil data dari atribut HTML data-*
            const title = this.getAttribute('data-title');
            const period = this.getAttribute('data-period');
            const desc = this.getAttribute('data-description');
            const imgSrc = this.getAttribute('data-image');

            // Isi konten modal
            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalPeriod.textContent = period;
            modalDescription.textContent = desc;

            // Tampilkan modal
            modal.style.display = 'block';
        });
    });

    // 2. Fungsi untuk menutup modal saat tombol 'x' diklik
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // 3. Fungsi untuk menutup modal saat mengklik di luar konten modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});