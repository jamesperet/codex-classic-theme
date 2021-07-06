$("a").each(function(e, data) {
    var link = $(this).attr('href');
    $(this).addClass("internal-link");
})

$("a[href^='http']").each(function(e, data) {
  var link = $(this).attr('href');
  $(this).removeClass("internal-link");
})
