$(function() {
  var d = new Date(),
      t = 2000;

  setTimeout(function() {
    window.location.reload();
  }, Math.random()*t/5 + (t*Math.sin(d.getMinutes()/60*Math.PI)+t));

  if(Math.random() > 0.6) {
    $.ajax({
      url: 'http://s.thebrighttag.com/api',
      data: {
        site: 'KHHSZpV',
        referrer: 'purchase',
        price: 35,
        email: 'test@test.com'
      },
      type: 'POST',
      success: function() {
        console.log('hi');
      }
    });
  }
  
  $.ajax({
    url: 'http://s.thebrighttag.com/api',
    data: {
      site: 'KHHSZpV',
      referrer: 'sync',
      test_attr: 10,
      bck: 'l_0FsFQm1xs5yaGuApQB02oD'
    },
    type: 'POST',
    success: function() {
      console.log('hi');
    }
  });
});
