document.addEventListener("DOMContentLoaded", function () {
            const starRatingGroups = document.querySelectorAll(".star-rating");

            starRatingGroups.forEach(starGroup => {
                const stars = starGroup.querySelectorAll(".star");
                const ratingInput = starGroup.querySelector("input");

                stars.forEach((star, index) => {
                    star.addEventListener("click", () => {
                        // Set the rating field value to the selected star index + 1
                        ratingInput.value = index + 1;

                        // Remove the 'active' class from all stars
                        stars.forEach(s => s.classList.remove("active"));

                        // Add the 'active' class to the clicked star and previous stars
                        for (let i = 0; i <= index; i++) {
                            stars[i].classList.add("active");
                        }
                    });
                });
            });
        });