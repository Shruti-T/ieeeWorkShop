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

    // console.log(formData);
    formData["event"] = "squabble";
    sendRegistration(formData);
    return true;
  });

let formData = {};
function sendRegistration(formData) {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzFJDNTdfDQCBz13L5xNsYptRO31otbYZPGEZMwcItuLqyA-NiT_BxAuoyMfZ9631oY/exec",
    type: "POST",
    data: formData,
    success: function (res) {
      if (res.status == "success") {
        alert("Done");
      } else {
        alert("Fail");
      }
    },
    error: function (res) {
      alert(res.status);
    },
  });
}
