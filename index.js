
function calc(){
    let rank;
    let wins = document.querySelector('#wins').value
    let loses = document.querySelector('#loses').value
    let kd = Number(wins - loses)
    if(kd < 11){
        rank = "Ferro"
    }else if(kd < 21){
        rank = "Bronze"
    }else if(kd < 51){
        rank = "Prata"
    }else if(kd < 81){
        rank = "Ouro"
    }else if(kd < 91){
        rank = "Diamante"
    }else if(kd < 101){
        rank = "Lendário"
    }else if(kd <= 101) {
        rank = "Imortal"
    }
    console.log(`O Herói tem de saldo de ${kd} está no nível de ${rank}`)
    const message = `O Herói tem de saldo de ${kd} está no nível de ${rank}`

    showToast(message)
}

function showToast(message, duration = 3000){
    const toastContainer = document.querySelector('.toast_container');

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, duration);


}