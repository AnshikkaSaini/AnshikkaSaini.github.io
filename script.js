<script src="js/project-script.js" defer></script>

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project Showcase Loaded!');
    
    // Image zoom on click (for gallery images)
    document.querySelectorAll('.grid img').forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" class="modal-img">
                </div>
            `;
            document.body.appendChild(modal);

            // Close modal
            modal.querySelector('.close').addEventListener('click', () => {
                modal.remove();
            });
        });
    });
});
