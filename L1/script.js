for (var i = 1; i < 31; i++) {
let btn = document.createElement("button");
document.body.appendChild(btn);
container.appendChild(btn);
btn.innerText = i;
var color = ["red", "purple", "blue", "black", "white", "yellow"];
btn.onclick = function() {click (this,color) 
	} 
function click(button,color) {
var color2 = color.indexOf(button.style.backgroundColor)
 button.style.backgroundColor = color[color2+1]
if( button.style.backgroundColor == "yellow"){
	button.remove()	};
}


}

