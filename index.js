document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactPopup').style.display = 'none'; // Ẩn modal khi trang được tải lần đầu tiên
});

document.getElementById('contact-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    var contactPopup = document.getElementById('contactPopup');
    if (contactPopup.style.display === 'block') {
        contactPopup.style.display = 'none'; // Nếu modal đang hiển thị, ẩn nó
    } else {
        contactPopup.style.display = 'block'; // Nếu modal không hiển thị, hiển thị nó
    }
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('contactPopup').style.display = 'none'; // Đóng modal khi nút đóng được nhấp vào
});