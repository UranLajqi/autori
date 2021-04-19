function shfaqPdf1() {
    document.getElementById("book1").style.display = "block";
    document.getElementById("butonat").style.display = "none";
}

function shfaqPdf2() {
    document.getElementById("book2").style.display = "block";
    document.getElementById("butonat").style.display = "none";
}

function search_book() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('librat');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
