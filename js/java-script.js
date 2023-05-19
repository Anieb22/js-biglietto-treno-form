let enter = document.getElementById('enter');
enter.addEventListener('click', function(){
    let km_percorsi = parseInt(document.getElementById('km_percorsi').value);
    let eta = parseInt(document.getElementById('eta').value);
    let nome = document.getElementById('nome').value;
    let prezzo = km_percorsi * 0.21;

    if(eta === 0){
    prezzo = prezzo * 0.8;
    }


    else if(eta === 2){
    prezzo = prezzo * 0.6;
    }

    else(eta === 2)
        prezzo
    
    document.getElementById('nome-cliente').innerText=nome;
    document.getElementById('prezzo').innerText=prezzo.toFixed(2);
}
)
