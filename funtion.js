
document.addEventListener('DOMContentLoaded', function() {
    const showPopupButtons = document.querySelectorAll('.show-popup');
    const popups = document.querySelectorAll('.infor');
    
    showPopupButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Ẩn tất cả các popup
        popups.forEach(popup => {
          popup.style.display = 'none';
        });
  
        // Hiển thị popup tương ứng
        popups[index].style.display = 'block';
  
        // Hiển thị popup chính
        togglePopup();
      });
    });
  
    function togglePopup() {
      const popup = document.getElementById("group-popup");
      const closeButton = document.querySelector(".close-button");
  
      if (popup.style.display === "none") {
        popup.style.display = "block";
      } else {
        popup.style.display = "none";
      }
  
      closeButton.onclick = function() {
        popup.style.display = "none";
      }
  
      window.onclick = function(event) {
        if (event.target == popup) {
          popup.style.display = "none";
        }
      }
    }
  });