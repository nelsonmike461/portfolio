document.addEventListener("DOMContentLoaded", function () {
  var projectSection = document.getElementById("projects").offsetTop;

  // Add event listener for navigation list
  document.querySelector(".nav-list").addEventListener("click", function (e) {
    e.preventDefault();
    var target = e.target;
    const id = target.getAttribute("href");

    if (id === "#projects" || id === "#contact") {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    } else if (id === "#about") {
      e.preventDefault();
      var headerContent = document.querySelector(".header__text-box");

      // Check if the "aboutme" section already exists
      var aboutMeSection = document.querySelector(".aboutme");

      if (!aboutMeSection) {
        // Create a new div element
        var newDiv = document.createElement("div");
        newDiv.classList.add("aboutme");
        newDiv.innerHTML =
          "<p>A Computer Science graduate with a passion for coding and problem-solving. I have a strong foundation in <span class='heading-primary--highlight'>HTML, CSS, JavaScript, Python, SQL,</span> and I'm experienced with <span class='heading-primary--highlight'>frameworks such as Django, Flask, React, and Node.js.</span> As a self-motivated learner, I'm eager to apply my knowledge and contribute to the tech industry. Excited to turn great ideas into reality!</p>";

        // Append the new div element to the header
        headerContent.parentNode.appendChild(newDiv); // Append after hiding the header content

        // Trigger reflow to apply the animation
        newDiv.offsetWidth;
        // Add animation class
        newDiv.classList.add("animate-in");

        // Hide the header content after the animation starts
        setTimeout(function () {
          headerContent.style.display = "none";
          target.textContent = "Home"; // Change link text to "Home"
          target.setAttribute("href", "#header"); // Change link href to "#header"
        }, 0);
      } else {
        // If it exists, remove it to show the original content
        aboutMeSection.classList.add("animate-out"); // Add animation class
        // Show the header content after the animation finishes
        setTimeout(function () {
          aboutMeSection.remove();
          headerContent.style.display = "block";
          target.textContent = "About"; // Change link text to "About"
          target.setAttribute("href", "#about"); // Change link href to "#about"
        }, 500); // Adjust delay as needed
      }
    } else if (id === "#header") {
      e.preventDefault();
      var headerText = document.querySelector(".heading-primary--main");
      var headerSubText = document.querySelector(".heading-primary--sub");
      var headerButton = document.querySelector(".btn--animated");

      headerText.textContent = "Hey I'am Nelson Michael"; // Restore original header text
      headerSubText.textContent = "A Web Developer";
      headerButton.textContent = "Download";

      document.getElementById("header").scrollIntoView({ behavior: "smooth" });

      // Check if the "aboutme" section exists
      var aboutMeSection = document.querySelector(".aboutme");
      if (aboutMeSection) {
        // If it exists, remove it to show the original content
        aboutMeSection.classList.add("animate-out"); // Add animation class
        // Show the header content after the animation finishes
        setTimeout(function () {
          aboutMeSection.remove();
          document.querySelector(".header__text-box").style.display = "block";
        }, 500); // Adjust delay as needed
      }

      target.textContent = "About"; // Change link text to "About"
      target.setAttribute("href", "#about"); // Change link href to "#about"
    }
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > projectSection ||
      document.documentElement.scrollTop > projectSection
    ) {
      document.getElementById("navbar").style.top = "-80px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
  }

  // Add event listener for footer navigation list
  document
    .querySelector(".footer__list")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var target = e.target;
      const id = target.getAttribute("href");

      if (id === "#header" || id === "#projects") {
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      }
    });
});
