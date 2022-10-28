const hata=document.getElementById("hata");
const guessBtn=document.getElementById("guess-btn");
const restartBtn=document.getElementById("restart-btn");
const guess=document.getElementById("guess"); 
const form=document.querySelector("form");
const guessDiv=document.querySelector(".last-guesses");

let number=Math.floor(Math.random()*100)+1;
let LastGuess=[];
let myGuess;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(guess.value===""){
        //error ver
        hata.style.color="tomato";
        hata.textContent="Lütfen Bir Sayı Giriniz";
        setTimeout(()=> hata.textContent="",2000);
    }
    else{
        console.log(guess.value,number);
        hata.style.color="black";
        LastGuess.push(guess.value);
        let diff =Math.abs(guess.value-number);
        printLastGuess();
        getDiff(diff);
        //devam et
    }
})

restartBtn.addEventListener("click",restart)


function getDiff(diff){
    //tahminimiz ile numberı kısyasla
    if(diff==0){
        hata.textContent="Tebriklerr Kazandınız";
        hata.style.color="green";
        restartBtn.style.display = "block";
    }

    else if(diff<2){
        hata.textContent="Lannnnn Buldun çok çok çok çok az";
    }


    else if(diff<5){
        hata.textContent="Cehennemdeyiz Hocam";
    }

    else if(diff<10){
        hata.textContent="Yanıyorsun Fuat abiiğğ";
    }

    else if(diff<15){
        hata.textContent="Ha Gayret Hadi";
    }

    else if(diff<20){
        hata.textContent="Yaklaşıyon";
    }

    else if(diff<30){
        hata.textContent="düzgün sayı yaz uzaksın";
    }

    else if(diff<40){
        hata.textContent="Olm Kutuplara Gittik Herhalde";
    }

    else if(diff<60){
        hata.textContent="Az sonra bir kutup ayısı görürüz herhalde";
    }

    else if(diff<80){
        hata.textContent="Fenerin Şampiyonluğa Uzak Oldugu Kadar Uzaksın Sayıya :)";
    }
}


function printLastGuess(){
    //son tahminleri yaz
    let index = LastGuess.length-1;
    let li=document.createElement("li");
    li.textContent=LastGuess[index];
    guessDiv.appendChild(li);
}

function restart(){
    //oyunu yeniden baslat
    restartBtn.style.display="none";
    restart.textContent="";
    guessDiv.textContent="";
    form.reset(); 
    number=Math.floor(Math.random()*100)+1;

}






