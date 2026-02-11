// Smooth scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation to sections as they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, observerOptions);

  // Observe all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
  });

  // Add subtle scale effect to avatar on scroll
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const scrolled = window.pageYOffset;
          const scale = Math.max(0.85, 1 - (scrolled / 1000));
          if (scrolled < 300) {
            avatar.style.transform = `scale(${scale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Add subtle hover effect to resume items
  const resumeItems = document.querySelectorAll('.resume-item');
  resumeItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(8px)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
});
