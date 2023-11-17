document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/api/submit", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        form.reset();
        console.error("Request failed with status:", xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error("Request failed");
    };

    xhr.send(JSON.stringify(formData));
  });
});
