var myHeaders = new Headers();
myHeaders.append("apikey", "plvutomEGdFRP4hlEOHqEoDMDZ6yhR9p");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

let precio_dolar = document.getElementById("precio_dolar");
let precio_euro = document.getElementById("precio_euro");

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=UYU&base=USD", requestOptions)
    .then(response => response.json())
    .then(result => {
            
            console.log(result.rates.UYU);
            let dolar = result.rates.UYU;
            precio_dolar.innerHTML = `${dolar.toFixed(2)} UYU`;
        })
    .catch(error => console.log('error', error))
;


fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=UYU&base=EUR", requestOptions)
    .then(response => response.json())
    .then(result => {
            
            console.log(result.rates.UYU);
            let euro = result.rates.UYU;
            precio_euro.innerHTML = `${euro.toFixed(2)} UYU`;
        })
    .catch(error => console.log('error', error))


