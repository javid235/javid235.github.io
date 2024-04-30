
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    let ticking = false;

    function hideHeader() {
        header.classList.add("hide");
    }

    function showHeader() {
        header.classList.remove("hide");
    }

    window.addEventListener("scroll", function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                let scrollTop = window.scrollY || document.documentElement.scrollTop;
                if (Math.abs(scrollTop - lastScrollTop) > 80) { // Adjust the threshold value as needed
                    if (scrollTop > lastScrollTop) {
                        // Scrolling down
                        hideHeader();
                    } else {
                        // Scrolling up
                        showHeader();
                    }
                    lastScrollTop = scrollTop;
                }
                ticking = false;
            });
            ticking = true;
        }
    });