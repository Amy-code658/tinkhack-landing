function toggleMenu() {
  const nav = document.getElementById('nav-links');
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Hide menu on mobile after clicking
        const nav = document.getElementById('nav-links');
        if(nav.style.display === "block") {
            nav.style.display = "none";
        }
    });
});
