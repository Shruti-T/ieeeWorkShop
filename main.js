document
  .getElementById("formSubmit")
  .addEventListener("submit", (formresponse) => {
    formresponse.preventDefault();
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    sendRegistration(formData);
    return false;
  });

let formData = {};
function sendRegistration() {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzSRcVAyBlu6I4LJA4sw9cv8REuH_t_aOBFUWEwYQRQEOhJHIQCtjm_Xqxu0WsVfMF6eg/exec",
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
