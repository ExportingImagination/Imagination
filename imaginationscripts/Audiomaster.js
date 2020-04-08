<script>   ///Music script 

(function () { // vol on load
     document.getElementById('play').volume = 0.02;
})();

var Yes = new Boolean(true);
document.getElementById('playbutton').onclick = function () {
playSound ();
}

function playSound () {
if (Yes == true) {
 Yes = false;

 
 document.getElementById('play').play();
}else{
 Yes = true;
  document.getElementById('play').pause();
 }
}

   
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var Audiomaster = document.getElementById('play');

volume = document.querySelector('.slidecontainer');

volume.addEventListener('change', function(e){
  
 //Audiomaster.volume = (e.target.value / 100);
  Audiomaster.volume = (e.this.value / 100);


});


</script> 
