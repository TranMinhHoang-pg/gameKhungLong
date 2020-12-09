let character = document.getElementById('character')
let block = document.getElementById('block')
let count = document.getElementById('count');
let dem = 0;let timeClick = 0;
function jump() {
    timeClick = 1;
    if(character.classList == 'Jump') {return;}
	character.classList.add('Jump');
    block.classList.add('blockMove');
    setTimeout(function() {
        character.classList.remove('Jump');   
    },500);  
	
}
 
let checkDead = setInterval(function() {
    
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft > 0 && blockLeft <= 60 && characterTop >= 140) {
        block.classList.remove('blockMove');
        alert('đạt được: '+ Math.floor(dem/100) +' điểm');
		dem = 0;
		count.innerHTML = dem;
		timeClick = 0;
    }
},10);

let checkPoint = setInterval(function() {
	if(timeClick == 1) {
		count.innerHTML = Math.floor(dem/100);
        dem++;
	}
}, 10)
