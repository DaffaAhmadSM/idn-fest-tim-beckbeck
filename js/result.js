//show score from local storage
score = localStorage.getItem("score");
scorezone = document.getElementById("score");
scorezone.innerHTML = score;