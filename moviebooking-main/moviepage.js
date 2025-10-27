

document.addEventListener("DOMContentLoaded", function() {
    const rateBtn = document.getElementById("rate-btn");
    const ratingContainer = document.getElementById("rating-container");
    const starLabels = document.querySelectorAll(".star-label");
    const reviewBox = document.getElementById("review-box");
    const submitBtn = document.getElementById("submit-btn");

    rateBtn.addEventListener("click", function() {
        ratingContainer.style.display = "flex";
        rateBtn.style.display = "none";
    });

    starLabels.forEach((label, index) => {
        label.addEventListener("click", function() {
            reviewBox.style.display = "block";
            submitBtn.style.display = "block";
            // Highlight all stars up to the clicked one
            starLabels.forEach((star, i) => {
                star.style.backgroundImage = i <= index
                    ? 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgaGVpZ2h0PSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN0YXItc29saWQiPjxwYXRoIGQ9Ik0zMTYuOSAxOEMzMTEuNiA3IDI5OS40IDAgMjg4LjEgMHMtMjMuNCA3LTI4LjggMThMMTk1IDE1MC4zIDUxLjQgMTcxLjVjLTEyIDEuOC0yMiAxMC4yLTI1LjcgMjEuN3MtLjcgMjQuMiA3LjkgMzIuN0wxMzcuOCAzMjkgMTEzLjIgNDc0LjdjLTIgMTIgMyAyNC4yIDEyLjkgMzEuM3MyMyA4IDMzLjgtMi4zbDEyOC4zLTY4LjUgMTI4LjMgNjguNWMxMC44IDUuNyAyMy45IDQuOSAzMy44LTIuM3MxNC45LTE5LjMgMTIuOS0zMS4zTDQzOC41IDMyOSA1NDIuNyAyMjUuOWM4LjYtOC41IDExLjctMjEuMiA3LjktMzIuN3MtMTMuNy0xOS45LTI1LjctMjEuN0wzODEuMiAxNTAuMyAzMTYuOSAxOHoiPjwvcGF0aD48L3N2Zz4=")'
                    : 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgaGVpZ2h0PSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN0YXItc29saWQiPjxwYXRoIGQ9Ik0zMTYuOSAxOEMzMTEuNiA3IDI5OS40IDAgMjg4LjEgMHMtMjMuNCA3LTI4LjggMThMMTk1IDE1MC4zIDUxLjQgMTcxLjVjLTEyIDEuOC0yMiAxMC4yLTI1LjcgMjEuN3MtLjcgMjQuMiA3LjkgMzIuN0wxMzcuOCAzMjkgMTEzLjIgNDc0LjdjLTIgMTIgMyAyNC4yIDEyLjkgMzEuM3MyMyA4IDMzLjgtMi4zbDEyOC4zLTY4LjUgMTI4LjMgNjguNWMxMC44IDUuNyAyMy45IDQuOSAzMy44LTIuM3MxNC45LTE5LjMgMTIuOS0zMS4zTDQzOC41IDMyOSA1NDIuNyAyMjUuOWM4LjYtOC41IDExLjctMjEuMiA3LjktMzIuN3MtMTMuNy0xOS45LTI1LjctMjEuN0wzODEuMiAxNTAuMyAzMTYuOSAxOHoiPjwvcGF0aD48L3N2Zz4=")';
            });
        });
    });

    submitBtn.addEventListener("click", function() {
        alert("Thank you for your rating and review!");
        ratingContainer.style.display = "none";
        rateBtn.style.display = "block";
        reviewBox.value = '';
        reviewBox.style.display = "none";
        submitBtn.style.display = "none";
        starLabels.forEach((star) => {
            star.style.backgroundImage = 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgaGVpZ2h0PSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InN0YXItc29saWQiPjxwYXRoIGQ9Ik0zMTYuOSAxOEMzMTEuNiA3IDI5OS40IDAgMjg4LjEgMHMtMjMuNCA3LTI4LjggMThMMTk1IDE1MC4zIDUxLjQgMTcxLjVjLTEyIDEuOC0yMiAxMC4yLTI1LjcgMjEuN3MtLjcgMjQuMiA3LjkgMzIuN0wxMzcuOCAzMjkgMTEzLjIgNDc0LjdjLTIgMTIgMyAyNC4yIDEyLjkgMzEuM3MyMyA4IDMzLjgtMi4zbDEyOC4zLTY4LjUgMTI4LjMgNjguNWMxMC44IDUuNyAyMy45IDQuOSAzMy44LTIuM3MxNC45LTE5LjMgMTIuOS0zMS4zTDQzOC41IDMyOSA1NDIuNyAyMjUuOWM4LjYtOC41IDExLjctMjEuMiA3LjktMzIuN3MtMTMuNy0xOS45LTI1LjctMjEuN0wzODEuMiAxNTAuMyAzMTYuOSAxOHoiPjwvcGF0aD48L3N2Zz4=")';
        });
    });
});
