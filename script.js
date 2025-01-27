// Add a toggle button
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙 Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});

// Add dark mode styles (add this to your styles.css)
/*
.dark-mode {
    background-color: #121212;
    color: #ffffff;
}
.dark-mode header {
    background-color: #1f1f1f;
}
.dark-mode .featured {
    background-color: #1f1f1f;
}
.dark-mode .category {
    background-color: #333;
}
*/
// Add a comment section to each article
document.querySelectorAll('article').forEach(article => {
    const commentSection = document.createElement('div');
    commentSection.innerHTML = `
        <h3>Comments</h3>
        <textarea placeholder="Add a comment..." style="width: 100%; height: 60px; margin-bottom: 10px;"></textarea>
        <button style="padding: 5px 10px; cursor: pointer;">Post Comment</button>
        <ul style="list-style: none; padding: 0; margin-top: 10px;"></ul>
    `;
    article.appendChild(commentSection);

    const commentList = commentSection.querySelector('ul');
    const commentButton = commentSection.querySelector('button');
    const commentInput = commentSection.querySelector('textarea');

    commentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentItem = document.createElement('li');
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = ''; // Clear the input
        }
    });
});
// Create the button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.display = 'none'; // Hide by default
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Create the form
const newsletterForm = document.createElement('div');
newsletterForm.innerHTML = `
    <div style="position: fixed; bottom: 20px; right: 20px; background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h3>Subscribe to Our Newsletter</h3>
        <input type="email" placeholder="Enter your email" style="padding: 5px; width: 100%; margin-bottom: 10px;">
        <button style="padding: 5px 10px; cursor: pointer;">Subscribe</button>
    </div>
`;
document.body.appendChild(newsletterForm);

// Show the form when the user tries to leave
window.addEventListener('mouseout', (e) => {
    if (e.clientY < 0) {
        newsletterForm.style.display = 'block';
    }
});

// Hide the form when the user clicks outside
document.addEventListener('click', (e) => {
    if (!newsletterForm.contains(e.target)) {
        newsletterForm.style.display = 'none';
    }
});
