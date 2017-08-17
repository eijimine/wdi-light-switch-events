document.addEventListener('DOMContentLoaded', function() {

var clickswitch = document.querySelector('button.switch.on');
var body = document.querySelector('body');
var text = document.querySelector('h1.status');

clickswitch.addEventListener('click', function(e) {
  // e.preventDefault();
  if (clickswitch.className === 'switch on') {
      clickswitch.className = 'switch off';
      body.className = 'dark';
      text.innerText = 'Hey, who turned off the lights?';
      text.innerText = 'Hey, who turned off the lights?';
  } else if (clickswitch.className === 'switch off') {
      clickswitch.className = 'switch on';
      body.className = 'light';
      text.innerText = 'It\'s so bright in here!';
  }
});
});
