document.addEventListener("DOMContentLoaded", function() {
  const novelForm = document.getElementById("novel-form");
  const novelsGrid = document.getElementById("novels");

  novelForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const novelName = document.getElementById("novel-title").value;
    const novelCover = document.getElementById("cover-url").value;
    const novelDescription = document.getElementById("novel-desc").value;
    const novelLink = document.getElementById("novel-link").value;

    if (novelName && novelCover && novelDescription && novelLink) {
      const novelBox = document.createElement("div");
      novelBox.classList.add("novel-box");

      const novelCoverBox = document.createElement("div");
      novelCoverBox.classList.add("novel-cover-box");
      const coverImg = document.createElement("img");
      coverImg.src = novelCover;
      coverImg.alt = novelName;
      novelCoverBox.appendChild(coverImg);

      const novelDetailsBox = document.createElement("div");
      novelDetailsBox.classList.add("novel-details-box");
      const title = document.createElement("h3");
      title.textContent = novelName;

      const description = document.createElement("p");
      const words = novelDescription.split(" ");
      if (words.length > 34) {
        const descriptionShort = words.slice(0, 34).join(" ");
        const descriptionRest = words.slice(34).join(" ");
        description.innerHTML = `${descriptionShort} <span class="read-more">${descriptionRest}</span>`;
        description.addEventListener("click", function() {
          const readMoreOption = this.querySelector(".read-more");
          readMoreOption.classList.toggle("show");
        });
      } else {
        description.textContent = novelDescription;
      }

      const link = document.createElement("a");
      link.href = novelLink;
      link.textContent = "Read Novel";

      novelDetailsBox.appendChild(title);
      novelDetailsBox.appendChild(description);
      novelDetailsBox.appendChild(link);

      novelBox.appendChild(novelCoverBox);
      novelBox.appendChild(novelDetailsBox);
      novelsGrid.appendChild(novelBox);

      // Clear the form after submission
      novelForm.reset();
    }
  });

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add random color to CSS custom property on hover
  const novelDetailsLinks = document.querySelectorAll(".novel-details-box a");
  novelDetailsLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
      const randomColor = getRandomColor();
      document.documentElement.style.setProperty('--random-color', randomColor);
    });
  });

  // Reset CSS custom property on mouseout (optional)
  novelDetailsLinks.forEach(link => {
    link.addEventListener("mouseout", function() {
      document.documentElement.style.setProperty('--random-color', '');
    });
  });
});
