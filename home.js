//your age in days


function ageindays(){
var birthyear = prompt('what year were you born?.... good friend');
var ageindays = (2020 - birthyear) * 365;
var h1 = document.createElement('h1')
var textanswer = document.createTextNode('You are ' + ageindays +'days old !!')
h1.setAttribute('id', 'ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
  document.getElementById('ageindays').remove();

}
