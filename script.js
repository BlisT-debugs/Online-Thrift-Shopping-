function login() {
    alert("Login functionality coming soon!");
  }

function openModal(imageSrc, captionText) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const caption = document.getElementById('caption');

  modal.style.display = 'flex';
  modalImg.src = imageSrc;
  caption.textContent = captionText;
}
  
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
  
  
function addToCart(productName) {
  alert(`${productName} added to cart!`);
}
  