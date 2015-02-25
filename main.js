$(function() {
  var d = new Date(),
      t = 2000;

  setTimeout(function() {
    window.location.reload();
  }, Math.random()*t/5 + (t*Math.sin(d.getMinutes()/60*Math.PI)+t));
});
