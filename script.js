 
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);

        const menuToggle = document.getElementById('menu-toggle');
        let nav = document.querySelector('.nav');
        function toggleMenu() {
            nav.classList.toggle('open');
        }

        // Simple section navigation (minimal JS)
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const sections = document.querySelectorAll('.section');
                sections.forEach(sec => sec.classList.remove('active'));
                document.getElementById(targetId).classList.add('active');


               
          
            });
        });

        
    
        document.getElementById('newsletter-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            if (email) {
                alert('Thank you for subscribing! We will send updates to ' + email);
                document.getElementById('newsletter-email').value = ''; // Clear input after submission
            } else {
                alert('Please enter a valid email address.');
            }
        });
        // Image error handling for all images in the footer
        document.querySelectorAll('footer img').forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZGRkIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2Y8L3RleHQ+Cjwvc3ZnPg=='; // Fallback SVG
                this.alt = 'Image not available due to loading error: ' + this.alt;
            });
        });
    
