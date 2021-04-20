function shfaqPdf1() {
    document.getElementById("book1").style.display = "block";
    document.getElementById("butonat").style.display = "none";
    document.getElementById("pjesa").style.display = "none";
}

function shfaqPdf2() {
    document.getElementById("book2").style.display = "block";
    document.getElementById("butonat").style.display = "none";
    document.getElementById("pjesa").style.display = "none";
}

function shfaqPdf3() {
	document.getElementById("nukEshte3").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf4() {
	document.getElementById("nukEshte4").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf5() {
	document.getElementById("nukEshte5").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf6() {
	document.getElementById("nukEshte6").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf7() {
	document.getElementById("nukEshte7").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf8() {
	document.getElementById("nukEshte8").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf9() {
	document.getElementById("nukEshte9").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf10() {
	document.getElementById("nukEshte10").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf11() {
	document.getElementById("nukEshte11").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf12() {
	document.getElementById("nukEshte12").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf13() {
	document.getElementById("nukEshte13").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf14() {
	document.getElementById("nukEshte14").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf15() {
	document.getElementById("nukEshte15").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf16() {
	document.getElementById("nukEshte16").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf17() {
	document.getElementById("nukEshte17").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf18() {
	document.getElementById("nukEshte18").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf19() {
	document.getElementById("nukEshte19").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf20() {
	document.getElementById("nukEshte20").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf21() {
	document.getElementById("nukEshte21").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf22() {
	document.getElementById("nukEshte22").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf23() {
	document.getElementById("nukEshte23").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf24() {
	document.getElementById("nukEshte24").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf25() {
	document.getElementById("nukEshte25").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf26() {
	document.getElementById("nukEshte26").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf27() {
	document.getElementById("nukEshte27").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf28() {
	document.getElementById("nukEshte28").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf29() {
	document.getElementById("nukEshte29").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf30() {
	document.getElementById("nukEshte30").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf31() {
	document.getElementById("nukEshte31").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf32() {
	document.getElementById("nukEshte32").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf33() {
	document.getElementById("nukEshte33").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf34() {
	document.getElementById("nukEshte34").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf35() {
	document.getElementById("nukEshte35").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf36() {
	document.getElementById("nukEshte36").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf37() {
	document.getElementById("nukEshte37").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf38() {
	document.getElementById("nukEshte38").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf39() {
	document.getElementById("nukEshte39").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf40() {
	document.getElementById("nukEshte40").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf41() {
	document.getElementById("nukEshte41").innerHTML = "Nuk ekziston libri";
}

function shfaqPdf42() {
	document.getElementById("nukEshte42").innerHTML = "Nuk ekziston libri";
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
