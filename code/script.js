// script.js
document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if(!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('open');
      if(this.classList.contains('open')) {
        this.innerHTML = '<i class="fas fa-times" style="font-size:1.5rem; color:#fff"></i>';
      } else {
        this.innerHTML = '<span></span><span></span><span></span>';
      }
    });
  }

  // --- Demo Modal ---
  const watchDemoBtns = document.querySelectorAll('#watchDemoBtn, #watchDemoBtn2');
  const demoModal = document.getElementById('demoModal');
  const closeDemoModal = document.getElementById('closeDemoModal');

  watchDemoBtns.forEach(btn => {
    if(btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(demoModal) demoModal.classList.add('active');
      });
    }
  });

  if (closeDemoModal) {
    closeDemoModal.addEventListener('click', () => {
      if(demoModal) demoModal.classList.remove('active');
    });
  }

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if(e.target === demoModal) {
        demoModal.classList.remove('active');
      }
    });
  }

  // --- Number Counter Animation ---
  function animateNumbers() {
    const statNums = document.querySelectorAll('.stat-num');
    statNums.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateNum = () => {
        current += step;
        if(current < target) {
          el.textContent = Math.ceil(current);
          requestAnimationFrame(updateNum);
        } else {
          el.textContent = target;
        }
      };
      
      updateNum();
    });
  }

  const heroStats = document.querySelector('.hero-stats');
  if(heroStats && 'IntersectionObserver' in window) {
    let fired = false;
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && !fired) {
        animateNumbers();
        fired = true;
      }
    });
    observer.observe(heroStats);
  } else if(document.querySelectorAll('.stat-num').length > 0) {
    animateNumbers();
  }

  // --- Typing Effect for Terminal ---
  const codeStream = document.querySelector('.code-stream');
  if(codeStream) {
    const lines = codeStream.querySelectorAll('.code-line');
    lines.forEach(line => line.style.display = 'none');
    let currentLine = 0;
    
    function showLine() {
      if(currentLine < lines.length) {
        lines[currentLine].style.display = 'block';
        currentLine++;
        setTimeout(showLine, 400);
      }
    }
    
    setTimeout(showLine, 1000);
  }
  
  // --- Chart.js for Home Page Progress ---
  const progressChartCanvas = document.getElementById('progressChart');
  if(progressChartCanvas && window.Chart) {
    const ctx = progressChartCanvas.getContext('2d');
    
    // Gradient fill
    let gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(0, 212, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 212, 255, 0.0)');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Learning Progress',
          data: [20, 45, 30, 60, 50, 90, 80],
          borderColor: '#00d4ff',
          backgroundColor: gradient,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#0f111a',
          pointBorderColor: '#00d4ff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#161b22',
            titleColor: '#8892b0',
            bodyColor: '#fff',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 10,
            displayColors: false
          }
        },
        scales: {
          x: { display: false },
          y: { display: false, min: 0 }
        }
      }
    });
  }
});
