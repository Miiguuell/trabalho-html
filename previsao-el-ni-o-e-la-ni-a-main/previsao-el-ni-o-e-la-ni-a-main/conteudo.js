const btn = document.querySelectorAll('.btn');
const certo = document.querySelector('#certo')

btn.forEach( btnR => {

    btnR.addEventListener('mouseenter', () => {
        btnR.style.transform = 'scale(1.05)';
        btnR.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });

    btnR.addEventListener('mouseleave', () => {
        btnR.style.transform = 'scale(1)';
        btnR.style.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.1)';
    });

    

    btnR.addEventListener('click', () => {

            btnR.innerText = 'Resposta incorreta';
            btnR.style.backgroundColor = "red";
    
        if (btnR == certo)
        {
            btnR.innerText = 'Resposta correta';
            btnR.style.backgroundColor = "green";
        }
});
})