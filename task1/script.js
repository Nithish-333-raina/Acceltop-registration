
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("mail").value;
    

    if (!name || !email || !phone) {
      alert("Please fill in all the fields.");
      return;
    }

    window.location.href='thank.html';
    
  });