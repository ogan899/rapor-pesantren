// Toggle sidebar untuk HP
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('open');
}

// Tutup sidebar saat klik overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }
});

// ===== MODAL (Edit Profil Guru) =====
function openModal(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = 'flex';
        el.classList.add('open');
    }
}
function closeModal(el) {
    if (el) {
        el.style.display = 'none';
        el.classList.remove('open');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Sembunyikan semua modal saat halaman dimuat (jaga-jaga)
    document.querySelectorAll('.modal-overlay').forEach(function(ov) {
        ov.style.display = 'none';
    });
    // Buka modal
    document.querySelectorAll('[data-open-modal]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(this.getAttribute('data-open-modal'));
        });
    });
    // Tutup via tombol [data-close-modal]
    document.querySelectorAll('[data-close-modal]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            closeModal(this.closest('.modal-overlay'));
        });
    });
    // Tutup saat klik area gelap di luar modal
    document.querySelectorAll('.modal-overlay').forEach(function(ov) {
        ov.addEventListener('click', function(e) {
            if (e.target === ov) closeModal(ov);
        });
    });
    // Tutup dengan tombol Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach(closeModal);
        }
    });
});

