let seach = document.querySelector('#seach');
let input = document.querySelector('#input');
let res = document.querySelector('#res')
let img = document.querySelector('img')

seach.addEventListener('click', () => {

    let contryInput = input.value;
    let URL = `https://restcountries.com/v3.1/name/${contryInput}?fullText=true`


    fetch(URL).then((response)=> response.json())
    .then((data) => { res.innerHTML=`${data[0].capital[0]}`} ).catch(() => alert(`"${input.value}" não encontrado`))   
})

//Função do taclado
input.addEventListener('keyup', (e) => {
    let key = e.wich || e.keyCode

    if ( key == 13){
        let contryInput = input.value;
        let URL = `https://restcountries.com/v3.1/name/${contryInput}?fullText=true`
    
        fetch(URL).then((response)=> response.json())
        .then((data) => { 

            console.log(data[0])
            console.log(data[0].flags.png)

            img.setAttribute('src', data[0].flags.png)
            res.innerHTML=`${data[0].capital[0]}`}).catch(() => alert(`"${input.value}" não encontrado`))
         
    }
})
   






