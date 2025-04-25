document.addEventListener('DOMContentLoaded', function() {
  const shareBtn = document.querySelector('.share-button');
  const popup = document.querySelector('.share-popup');
  const authorInfo = document.querySelector('.author-info');
  const container = document.querySelector('.container');

  if (shareBtn && popup) {
    shareBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        popup.classList.toggle('active');
        authorInfo.classList.toggle('hidden');
        this.classList.toggle('active');
        
        // Toggle container border radius
        container.style.borderBottomLeftRadius = popup.classList.contains('active') ? '0' : '10px';
        container.style.borderBottomRightRadius = popup.classList.contains('active') ? '0' : '10px';
      } else {
        popup.classList.toggle('active');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth > 768) return;
      
      if (!e.target.closest('.share-wrapper') && 
          popup.classList.contains('active')) {
        popup.classList.remove('active');
        authorInfo.classList.remove('hidden');
        shareBtn.classList.remove('active');
        container.style.borderBottomLeftRadius = '10px';
        container.style.borderBottomRightRadius = '10px';
      }
    });
  }
});