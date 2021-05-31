for (var i = 1; i < 31; i++) {
let btn = document.createElement("button");
document.body.appendChild(btn);
container.appendChild(btn);
btn.innerText = i;
btn.onclick = function(a) {changecolor(this)};
}

function changecolor(a) {
	button.backgroundcolor = a.backgroundcolor; }

