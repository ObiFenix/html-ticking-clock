// ===================
// 		App JS
// ===================

var animate, date, hh, mm, ss;

function clock() {
	datetime = new Date(),
	hh = datetime.getHours();
	mm = datetime.getMinutes();
	ss = datetime.getSeconds();
	ticking();
}

function ticking() {
	ss++;
	if (ss == 60) { ss = 0; mm++; }
	if (mm == 60) { mm = 0; hh++; }
	if (hh == 24) { hh = 0; }

	$digitsdisplayed('ss', ss);
	$digitsdisplayed('mm', mm);
	$digitsdisplayed('hh', hh);
	animate = setTimeout(clock, 1000);
}

function $digitsdisplayed(id, val) {
	if (val < 10) { val = '0' + val }
	document.getElementById(id).innerHTML = val;
}

window.onload = clock;