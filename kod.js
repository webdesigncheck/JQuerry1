$(document).on("click", '.deleteRow', function () {
  $(this).closest('tr').remove();
});

function tabela(){
  var strana5 = document.getElementById("novizaposleni");
strana5.style.display = "block";
}

$(document).ready(function () {
  $('#završi').click(function () {
      var tbody = $('#tabela').children('tbody');
      var ime1 = $("#ime").val();
      var prezime1 = $("#prezime").val();
      var email1 = $("#email").val();
      tbody.append('<tr><td id="1" class="text">' + ime1 + '</td> <td id="2" class="text">' + prezime1 + '</td><td id="3" class="text">' + email1 + '</td><td><i class="fa-solid fa-xmark deleteRow xField text-secondary"></i></td></tr>');
      $("#ime").val("");
      $("#prezime").val("");
      $("#email").val("");
      $("#podacinovizaposleni").hide();
  })
})

$(document).on("click", 'td.text', function () {
  var promena = prompt("Izmena:");
  if (promena != null) {
      $(this).closest('td').text(promena);
  }
});






