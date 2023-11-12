document.getElementById("openFormButton").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
    history.pushState({ formOpen: true }, '', '/s0177158.github.io');
    
  });
  


  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    var slapform = new Slapform();
slapform.submit({
form: 'h1g3zZhDr',
data: {
name: '',
message: '',
}
})
    .then(function (response) {
    console.log('Success', response)
    })
    .catch(function (e) {
    console.error('Fail', e)
    })

    document.getElementById("popupForm").style.display = "none"; 
  });
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    window.location.href = "https://s0177158.github.io/S0177158_L.github.io/web/web1/number1.html";
  }
