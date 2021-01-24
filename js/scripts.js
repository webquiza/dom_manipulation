$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul").prepend("<li>Hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>I said goodbye!</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>I said stop!</li>");
  });
});