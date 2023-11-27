function generateSquare(event) {
    event.preventDefault();
  
    let panjang = parseInt(document.getElementById("panjang").value);
    let karakter = document.getElementById("karakter").value;
  
    if (Number.isInteger(panjang) && panjang > 0) {
      let persegi = "";
      for (let i = 1; i <= panjang; i++) {
        for (let j = 1; j <= panjang; j++) {
          persegi += karakter;
        }
        persegi += "<br>";
      }
  
      document.getElementById("squareResult").innerHTML = persegi;
    } else {
      document.getElementById("squareResult").innerHTML = "Panjang persegi harus berupa bilangan bulat positif.";
    }
  }
  