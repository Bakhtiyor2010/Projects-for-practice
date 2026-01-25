let bitcoin = document.getElementById("bitcoin");
let ethereum = document.getElementById("ethereum");
let dogecoin = document.getElementById("dogecoin");

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  bitcoin.innerHTML = response.bitcoin.usd;
  ethereum.innerHTML = response.ethereum.usd;
  dogecoin.innerHTML = response.dogecoin.usd;
});