function clock () {
    //clock
    const areaDoRelogio = document.querySelector(".clo");
    const horaAgora = new Date();
    const hours = horaAgora.getHours ();
    const minutes = horaAgora.getMinutes ();
    const seconds = horaAgora.getSeconds ();
    const formatoHoras = hours.toString ().padStart(2, "0");
   
    //apagar depois a const abaixoconst formatoHoras = "19"
    const formatoMinutos = minutes.toString ().padStart(2, "0");
    const formatoSegundos = seconds.toString ().padStart(2, "0");
    
    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

    //calendar-frase

    const frase = document.querySelector(".frase");
    //Array é um arranjo ou estrutura de dados onde amarzemanamos uma coleção de elementos.
    //array Dias da semana
    dia = new Array ("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");
//Array Mês
    mes = new Array ("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

    hoje = new Date ()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,0)} de  ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`
//Desafio abaixo>
    /*
    if(formatoHoras <= "12"){
        document.body.style.backgroundImage = "url('https://s2.glbimg.com/SG0W62aEil5vYNi1oRh0LLZZKEM=/0x0:960x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/s/i/DWyBUHQg6dN3uGt6xfAw/whatsapp-image-2020-05-26-at-20.14.26-1-.jpeg')";
    }
     else if(formatoHoras == "14") {
        document.body.style.backgroundImage = "url('https://s2.glbimg.com/SG0W62aEil5vYNi1oRh0LLZZKEM=/0x0:960x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/s/i/DWyBUHQg6dN3uGt6xfAw/whatsapp-image-2020-05-26-at-20.14.26-1-.jpeg')";
    }
    else{
        document.body.style.backgroundImage = "url('https://s2.glbimg.com/kQvD9vQZbRL6hpLhVPljtLCAMDg=/0x0:3176x2104/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2022/a/9/U0NEPfTl6DqnfYx1NO7g/gettyimages-1233130039.jpg')";
    }
    */

  
    


  
}

setInterval (clock, 1000);


function off(){
	document.getElementById("display").style.backgroundColor = "#000"

	document.querySelector("button").style.backgroundColor = "#000"
	document.querySelector("img").style.opacity = "0"
	document.getElementById("clo").style.backgroundColor = "#000"
	document.querySelector("#frase").style.backgroundColor = "#000"
	document.querySelector("#frase").style.color = "#000"
	document.getElementById("clo").style.opacity= "0"
}
