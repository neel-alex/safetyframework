// MODIFIED: Simplified JavaScript as we don't need to handle separate mobile/desktop sections
document.addEventListener('DOMContentLoaded', () => {
    // Handle tab clicks
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
});

// Optional: Helper function to programmatically switch tabs
function switchTab(tabId, auxiliaryBox) {
    const tab = auxiliaryBox.querySelector(`.tab[data-tab="${tabId}"]`);
    if (tab) {
        tab.click();
    }
}