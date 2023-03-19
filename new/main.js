document
  .getElementById("formSubmit")
  .addEventListener("submit", (formresponse) => {
    formresponse.preventDefault();
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["branch"] = document.getElementById("branch").value;
    formData["year"] = document.getElementById("year").value;
    formData["college"] = document.getElementById("college").value;

    formData["event"] = "squabble";
    sendRegistration(formData);
    return false;
  });

let formData = {};
function sendRegistration() {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyW5hRjb1FKFGz2og-yl4RxrwDb9kaUDr14d2HjA9FWxthlSVcN-uj_KqJRiCa1vmfX0g/exec",
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
