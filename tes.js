let berat, tinggi, keterangan, bmi;

function hitung() {
	berat = parseFloat(document.getElementById("br").value);
	tinggi = parseFloat(document.getElementById("ti").value);
    tinggi /= 100;
	bmi = berat / (tinggi * tinggi);

	if (bmi > 30) {
		keterangan = "Obesity";
	}else if ((bmi >= 25) & (bmi <= 29.9)){
		keterangan = "Overweight";
	}else if ((bmi >= 18.5) & (bmi <= 24.9)){
		keterangan = "Normal weight";
	}else {
		keterangan = "Underweight";
	}
	document.getElementById('bmi').innerHTML = "Hasil perhitungan BMI : " + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = "Keterangan : " + keterangan;
}
