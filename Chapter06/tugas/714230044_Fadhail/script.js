let state = 0;
function change(){
  state++;
  if (state === 2) location.reload();
    const p = document.getElementById('p').innerHTML = "Power 147 kW <br> Horsepower 200 hp 197 bhp <br> Rev. at Max Power 7,000 rpm <br> Torque 205 Nm <br> Torque 151 lb-ft <br> Rev. at Max Torque 6,400 - 6,600 rpm";
    const gambar = document.getElementById('gambar').src = "img/engine.png"
    location.replace
  }

function calculateAmount(val){
var tot_price = val * 590000000;
var total = document.getElementById('tot_amount');
total.textContent = 'Rp. ' + tot_price;
}