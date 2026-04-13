const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = document.querySelectorAll(".gallery .item");

let currentIndex = 0;

// Open modal when image clicked
items.forEach((item, index) => {
  const img = item.querySelector("img");
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    modal.style.display = "flex";
  });
});

// Display image + caption in modal
function showImage() {
  const currentItem = items[currentIndex];
  const img = currentItem.querySelector("img");
  const caption = currentItem.querySelector(".caption").textContent;

  modalImg.src = img.src;
  modalCaption.textContent = caption;
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Navigate next
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % items.length;
  showImage();
});

// Navigate previous
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showImage();
});

// Close on click outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") closeBtn.click();
  }
});
