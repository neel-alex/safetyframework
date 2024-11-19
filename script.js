document.addEventListener('DOMContentLoaded', () => {
    // Show first section's auxiliary content by default
    showSection('1');
    showTab('1');

    // Add click listeners to all sections
    document.querySelectorAll('.content-block').forEach(section => {
        section.addEventListener('click', () => {
            const sectionId = section.dataset.section;
            showSection(sectionId);
        });
    });

    // Add click listeners to all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            showTab(tabId);
        });
    });
});

function showSection(sectionId) {
    // Update active section styling
    document.querySelectorAll('.content-block').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector(`.content-block[data-section="${sectionId}"]`).classList.add('active');

    // Show corresponding auxiliary content
    document.querySelectorAll('.section-auxiliary').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelector(`.section-auxiliary[data-section="${sectionId}"]`).classList.add('active');
}

function showTab(tabId) {
    // Update active tab styling
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');

    // Show corresponding tab content for current section
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const activeSection = document.querySelector('.section-auxiliary.active');
    activeSection.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
}

// Optional: Add scroll into view functionality
function scrollSectionIntoView(sectionId) {
    const section = document.querySelector(`.content-block[data-section="${sectionId}"]`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
