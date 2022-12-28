// conditional back to top button display 
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

// Back to top function
const goToTop = () => {
    document.body.scrollIntoView();
  };

// Back to top button call

backToTopButton.addEventListener("click", goToTop)

// Scroll smothenning function

const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };