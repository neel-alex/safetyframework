document.addEventListener('DOMContentLoaded', () => {
    // Handle desktop section clicks
    document.querySelectorAll('.desktop-main .content-block').forEach(section => {
        section.addEventListener('click', (e) => {
            const sectionId = section.dataset.section;
            
            // Update active section styling
            document.querySelectorAll('.desktop-main .content-block').forEach(s => {
                s.classList.remove('active');
            });
            section.classList.add('active');
            
            // Show corresponding auxiliary content
            document.querySelectorAll('.desktop-auxiliary .auxiliary-box').forEach(box => {
                box.classList.remove('active');
            });
            document.querySelector(`.desktop-auxiliary .auxiliary-box[data-section="${sectionId}"]`).classList.add('active');
        });
    });

    // Handle tab clicks for both desktop and mobile
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabId = e.target.dataset.tab;
            const auxiliaryBox = e.target.closest('.auxiliary-box');
            
            // Update active tab
            auxiliaryBox.querySelectorAll('.tab').forEach(t => {
                t.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Update active content
            auxiliaryBox.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            auxiliaryBox.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
        });
    });

    // Set initial active states
    const firstSection = document.querySelector('.desktop-main .content-block');
    if (firstSection) {
        firstSection.classList.add('active');
    }

    const firstAuxBox = document.querySelector('.desktop-auxiliary .auxiliary-box');
    if (firstAuxBox) {
        firstAuxBox.classList.add('active');
    }
});

// Optional: Helper function to programmatically switch sections
function switchSection(sectionId) {
    const section = document.querySelector(`.desktop-main .content-block[data-section="${sectionId}"]`);
    if (section) {
        section.click();
    }
}

// Optional: Helper function to programmatically switch tabs
function switchTab(tabId, auxiliaryBox) {
    const tab = auxiliaryBox.querySelector(`.tab[data-tab="${tabId}"]`);
    if (tab) {
        tab.click();
    }
}
