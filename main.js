$(function() {
  var d = new Date();

  setTimeout(function() {
    window.location.reload();
  }, Math.random()*5000*Math.sin(d.getMinutes()/60*2*Math.PI)+5000);
});
