document.addEventListener('DOMContentLoaded', () => {
    // Ambil ID proyek dari parameter URL (?id=...)
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    // Cari data proyek yang sesuai di dalam projectsData
    const project = projectsData[projectId];

    if (project) {
        // Jika data proyek ditemukan, update konten halaman
        document.title = `${project.title} - Portofolio Surya`;
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-image').alt = `Gambar ${project.title}`;
        document.getElementById('project-description-text').innerHTML = project.description;

        const techList = document.getElementById('project-tech-list');
        techList.innerHTML = ''; // Kosongkan list untuk diisi ulang
        
        project.tech.forEach(techItem => {
            const li = document.createElement('li');
            li.textContent = techItem;
            techList.appendChild(li);
        });

    } else {
        // Jika proyek tidak ditemukan (misal, URL salah), tampilkan pesan error
        const detailSection = document.getElementById('project-detail');
        detailSection.innerHTML = `
            <div class="container">
                <h2>Proyek Tidak Ditemukan</h2>
                <p>Maaf, proyek yang Anda cari tidak ada atau URL tidak valid.</p>
                <a href="index.html#portfolio" class="back-button">Kembali ke Portofolio</a>
            </div>
        `;
    }
});