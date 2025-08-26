    const filterLinks = document.querySelectorAll(".filter_link");
    const boxes = document.querySelectorAll(".box");

    filterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter");

            boxes.forEach(box => {
                if (filter === "All" || box.getAttribute("data-category") === filter) {
                    box.style.display = "flex"; 
                } else {
                    box.style.display = "none"; 
                }
            });
        });
    });

