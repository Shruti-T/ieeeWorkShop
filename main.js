if (document.getElementById("formSubmit1")) {
  document
    .getElementById("formSubmit1")
    .addEventListener("submit", (formresponse) => {
      formresponse.preventDefault();
      formData["name"] = document.getElementById("name").value;
      formData["email"] = document.getElementById("email").value;
      formData["event"] = "squabble";
      sendRegistration(formData);
      return false;
    });
} else if (document.getElementById("formSubmit2")) {
  document
    .getElementById("formSubmit2")
    .addEventListener("submit", (formresponse) => {
      formresponse.preventDefault();
      formData["name"] = document.getElementById("name").value;
      formData["email"] = document.getElementById("email").value;
      formData["name2"] = document.getElementById("name2").value;
      formData["email2"] = document.getElementById("email2").value;

      formData["event"] = "inquisitive";
      sendRegistration(formData);
      return false;
    });
}

let formData = {};
function sendRegistration() {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxJgQYTmyW9LksxyaPvY8hMXKaLdFXIku9uydJ_HUkU6sVk24qEvumMJyJM9BWGYIOJ-Q/exec",
    type: "POST",
    data: formData,

    success: function (res) {
      if (res.status == "success") {
        alert("DONE");
      } else {
        alert("FAIL");
      }
    },
    error: function (res) {
      alert(res.status);
    },
  });
}
