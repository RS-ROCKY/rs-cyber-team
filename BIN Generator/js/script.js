// ============ Helpers ============
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// ============ Global Variables ============
let sidebar, overlay, sidebarToggle;

// ============ Theme toggle ============
const themeBtn = $('#themeToggle');
function applyTheme(t) {
  document.body.classList.toggle('light', t === 'light');
  const icon = themeBtn.querySelector('i');
  if (t === 'light') { 
    icon.classList.remove('fa-moon'); 
    icon.classList.add('fa-sun'); 
  } else { 
    icon.classList.remove('fa-sun'); 
    icon.classList.add('fa-moon'); 
  }
}

// ============ Sidebar toggle ============
// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing sidebar...');
  
  // Initialize theme
  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);
  
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = document.body.classList.contains('light') ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }
  
  // Initialize sidebar elements
  sidebar = $('#sidebar');
  overlay = $('#overlay');
  sidebarToggle = $('#sidebarToggle');
  
  console.log('Sidebar element found:', sidebar);
  console.log('Overlay element found:', overlay);
  console.log('Sidebar toggle button found:', sidebarToggle);
  
  if (sidebarToggle) {
    console.log('Adding click event to sidebar toggle');
    sidebarToggle.addEventListener('click', () => {
      console.log('Sidebar toggle clicked!');
      console.log('Current sidebar classes:', sidebar.classList.toString());
      
      const isOpening = !sidebar.classList.contains('show');
      
      if (isOpening) {
        // Opening sidebar
        openSidebarCategories();
      } else {
        // Closing sidebar
        closeSidebar();
      }
    });
  } else {
    console.error('Sidebar toggle button not found!');
  }
  
  if (overlay) {
    overlay.addEventListener('click', () => {
      console.log('Overlay clicked, closing sidebar');
      closeSidebar();
    });
  }
  
  // Initialize other functionality after DOM is ready
  initializeAccordions();
  initializeDropdowns();
  initializeSidebarSearch();
  initializeSeeAllButton();
  initializeMobileTouch();
  initializeSmoothScroll();
  initializeToolButtons();
  initializeKeyboardNavigation();
});

// ============ Accordion ============
function initializeAccordions() {
  $$('.accordion-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const accordion = btn.parentElement;
      const isActive = accordion.classList.contains('active');
      
      // Close all accordions
      $$('.accordion').forEach((acc) => {
        acc.classList.remove('active');
      });
      
      // Open current if it wasn't active
      if (!isActive) {
        accordion.classList.add('active');
      }
    });
  });
}

// ============ Dropdown ============
function initializeDropdowns() {
  $$('.dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subsection = btn.parentElement;
      subsection.classList.toggle('active');
    });
  });
}

// ============ Sidebar Search ============
function initializeSidebarSearch() {
  const searchInput = $('#menuSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      const items = $$('#menuList a');
      
      items.forEach(a => {
        const show = a.textContent.toLowerCase().includes(q);
        a.style.display = show ? '' : 'none';
      });
      
      // Open all accordions and dropdowns when searching
      const anyQ = q.length > 0;
      $$('.accordion').forEach(acc => {
        if (anyQ) { 
          acc.classList.add('active');
          $$('.subsection').forEach(subsection => {
            subsection.classList.add('active');
          });
        } else { 
          acc.classList.remove('active');
          $$('.subsection').forEach(subsection => {
            subsection.classList.remove('active');
    });
  }

  // ============ Floating Notice Functions ============
  // Check if notice should be shown
  const hiddenTime = localStorage.getItem('canvaNoticeHidden');
  const notice = document.querySelector('.floating-notice');
  
  if (hiddenTime && notice) {
    const timeDiff = Date.now() - parseInt(hiddenTime);
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    
    // Hide notice if it was closed less than 24 hours ago
    if (hoursDiff < 24) {
      notice.style.display = 'none';
    }
  }
});

// ============ Global Functions ============
// Floating Notice Close Function
function closeFloatingNotice() {
  const notice = document.querySelector('.floating-notice');
  if (notice) {
    notice.style.animation = 'fadeOutUp 0.5s ease-in-out forwards';
    setTimeout(() => {
      notice.style.display = 'none';
      // Store in localStorage so it doesn't show again for 24 hours
      localStorage.setItem('canvaNoticeHidden', Date.now());
    }, 500);
  }
}

// Add simple fadeOut animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeOutUp {
    from { 
      opacity: 1; 
      transform: translateY(0); 
    }
    to { 
      opacity: 0; 
      transform: translateY(-20px); 
    }
  }
`;
document.head.appendChild(styleSheet);
    });
  }
}

// ============ Sidebar Close Function ============
function closeSidebar() {
  console.log('closeSidebar called');
  console.log('Before close - Sidebar classes:', sidebar.classList.toString());
  console.log('Before close - Overlay classes:', overlay.classList.toString());
  
  if (sidebar && overlay) {
    // Remove CSS classes
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    
    // Remove inline styles (force visibility styles)
    sidebar.style.left = '';
    sidebar.style.display = '';
    sidebar.style.position = '';
    sidebar.style.top = '';
    sidebar.style.width = '';
    sidebar.style.height = '';
    sidebar.style.zIndex = '';
    sidebar.style.backgroundColor = '';
    overlay.style.opacity = '';
    overlay.style.visibility = '';
    overlay.style.position = '';
    overlay.style.top = '';
    overlay.style.left = '';
    overlay.style.width = '';
    overlay.style.height = '';
    overlay.style.zIndex = '';
    overlay.style.backgroundColor = '';
    
    console.log('After close - Sidebar classes:', sidebar.classList.toString());
    console.log('After close - Overlay classes:', overlay.classList.toString());
    console.log('Sidebar closed successfully');
  } else {
    console.error('Cannot close sidebar - sidebar or overlay not found');
  }
}

// ============ See All Button ============
function openSidebarCategories(){
  console.log('openSidebarCategories called');
  console.log('Sidebar element:', sidebar);
  console.log('Overlay element:', overlay);
  
  if (sidebar && overlay) {
    console.log('Opening sidebar...');
    console.log('Before - Sidebar classes:', sidebar.classList.toString());
    console.log('Before - Overlay classes:', overlay.classList.toString());
    
    sidebar.classList.add('show');
    overlay.classList.add('show');
    
    // Force visibility as backup
    sidebar.style.left = '0px';
    sidebar.style.display = 'block';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0px';
    sidebar.style.width = '300px';
    sidebar.style.height = '100vh';
    sidebar.style.zIndex = '400';
    sidebar.style.backgroundColor = 'var(--surface)';
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.position = 'fixed';
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '350';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    
    console.log('After - Sidebar classes:', sidebar.classList.toString());
    console.log('After - Overlay classes:', overlay.classList.toString());
    console.log('Sidebar computed style left:', window.getComputedStyle(sidebar).left);
    console.log('Overlay computed style opacity:', window.getComputedStyle(overlay).opacity);
    console.log('Overlay computed style visibility:', window.getComputedStyle(overlay).visibility);
    
    // Automatically expand all submenus when opening
    $$('.subsection').forEach(subsection => {
      subsection.classList.add('active');
    });
    
    // Expand all accordions if any exist
    $$('.accordion').forEach(accordion => {
      accordion.classList.add('active');
    });
    
    console.log('Sidebar opened successfully');
  } else {
    console.error('Cannot open sidebar - sidebar or overlay not found');
    console.error('Sidebar:', sidebar);
    console.error('Overlay:', overlay);
  }
}

function initializeSeeAllButton() {
  const seeAllButton = $('#seeAllMain');
  console.log('See All button found:', seeAllButton);
  if (seeAllButton) {
    console.log('Adding click event to See All button');
    seeAllButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('See All button clicked!');
      openSidebarCategories();
    });
  } else {
    console.error('See All button not found!');
  }
}

// ============ Mobile Touch Support ============
function initializeMobileTouch() {
  document.addEventListener('click', (e) => {
    if (!sidebar) return;
    
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggle = sidebarToggle && sidebarToggle.contains(e.target);
    const isClickOnOverlay = overlay && overlay.contains(e.target);
    
    if (!isClickInsideSidebar && !isClickOnToggle && !isClickOnOverlay && sidebar.classList.contains('show')) {
      console.log('Click outside sidebar, closing...');
      closeSidebar();
    }
  });
}

// ============ Smooth Scroll ============
function initializeSmoothScroll() {
  const logo = $('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ============ Tool Button Effects ============
function initializeToolButtons() {
  $$('.tool-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      btn.style.transform = 'scale(0.95)';
      btn.style.opacity = '0.8';
      setTimeout(() => {
        btn.style.transform = '';
        btn.style.opacity = '1';
      }, 150);
    });
  });
}

// ============ Keyboard Navigation ============
function initializeKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (!sidebar) return;
    
    // ESC to close sidebar
    if (e.key === 'Escape' && sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (!sidebar.classList.contains('show')) {
        sidebar.classList.add('show');
        overlay.classList.add('show');
      }
      const searchInput = $('#menuSearch');
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
}