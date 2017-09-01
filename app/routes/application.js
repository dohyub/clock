import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    function time() {
      var time=new Date();
      var s=time.getSeconds();
      var m=time.getMinutes();
      var h=time.getHours();
      document.getElementById('clock').innerHTML=h + " : " + m + " : " + s;
    }
    return setInterval(time,1000);
  }
});
