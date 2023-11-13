var dtext=[

    "是的...我們遇見了不太好的事...",
    "左邊是皮比，來自卡○頻道。",
    "因為她很好畫我就畫了一個...",
    "...但在我試圖畫出她最好朋友蹦蹦時電腦它又又又當機了。",
    "所以...對，這就是你看到的樣子...",
    "...它成為了多媒體概論問題兔。",
    "熱衷於問每個人高○大軟x系多媒體概論課上過的問題。",
    "但是皮比沒學過這些。",
    "應該說，她只知道一些英文單字。畢竟，多媒體是啥？能吃嗎？他們家有幾個人？？",
    "而她也不能大喊「謎語兔滾出去」並把蹦蹦丟包。",
    "*註：該情節純屬杜撰，與Adult Swim之動畫原情節無關，我的電腦也沒在我做此份作業時當機，沒有一隻兔子在此過程中受到傷害。",
    "現在，皮比需要你的幫助。",
    "試著回答問題!"
    
    ];//對話
var dque=[
    "多媒體的定義?",
    "FPS(影格率)的全稱?",
    "哪一個不是常用的色彩模式?"
];
var choose=[
    ["聲音、視訊","聲音、視訊、文字","聲音、視訊、文字、動畫","聲音、視訊、文字、動畫、圖形"],
    ["Frame Per Second","First Person Shooter","Fire a Person by Shotgun","Flight of the PlaneS"],
    ["RGB","CMYK","YMCA","HSB"]
]
var dans=[
    4,
    1,
    3,
    0
];
flag=0;
function change(){
    if (flag==0){
        document.getElementById("img1").src="pibbyidlefront.gif";
        document.getElementById("img3").src="bunbunidlea.gif";
        flag=1;
    }else{
        document.getElementById("img1").src="pibbyidle.gif";
        document.getElementById("img3").src="bunbunglitch.gif";
        flag=0;
    }
}var thelife=3
var num=0; 
function Next(){
    var x = document.getElementById("name");
    var y = document.getElementById("button");
    var z = document.querySelector('.dialogue');
    x.style.display="none";
    
    if (dtext[num]!=null){
        z.textContent = dtext[num];
        if (num==0){
            document.getElementById("img1").src="pibbyidle.gif";
            document.getElementById("img2").src="empty.png";
            document.getElementById("img3").src="bunbunglitch.gif";
        }num+=1;
    }else{
        x.style.display="inline";
        y.style.display="none";
        x.textContent ="Q1";
        z.textContent = dque[0];
        var s1 = document.getElementById('s1');
        var s2 = document.getElementById('s2');
        var s3 = document.getElementById('s3');
        var s4 = document.getElementById('s4');
        var q1 = document.getElementById('q1');
        var q2 = document.getElementById('q2');
        var q3 = document.getElementById('q3');
        var q4 = document.getElementById('q4');
        var life = document.getElementById('life');
        s1.style.display="inline";
        s2.style.display="inline";
        s3.style.display="inline";
        s4.style.display="inline";
        q1.style.display="inline";
        q2.style.display="inline";
        q3.style.display="inline";
        q4.style.display="inline";
        life.style.display="inline";
        q1.textContent =choose[0][0];
        q2.textContent =choose[0][1];
        q3.textContent =choose[0][2];
        q4.textContent =choose[0][3];
        change();
    }
}var anonum=0
function enter(x){
    if (x==dans[anonum]){
        alert("沒錯!")
        anonum+=1;
        if (dans[anonum]==0){
            var x = document.getElementById("name");
            x.style.display="none";
            var z = document.querySelector('.dialogue');
            z.textContent = "通關(原諒我沒畫新圖)";
            document.getElementById("img1").src="empty.png";
            document.getElementById("img2").src="empty.png";
            document.getElementById("img3").src="empty.png";
            var s1 = document.getElementById('s1');
            var s2 = document.getElementById('s2');
            var s3 = document.getElementById('s3');
            var s4 = document.getElementById('s4');
            var q1 = document.getElementById('q1');
            var q2 = document.getElementById('q2');
            var q3 = document.getElementById('q3');
            var q4 = document.getElementById('q4');
            var life = document.getElementById('life');
            s1.style.display="none";
            s2.style.display="none";
            s3.style.display="none";
            s4.style.display="none";
            q1.style.display="none";
            q2.style.display="none";
            q3.style.display="none";
            q4.style.display="none";
            life.style.display="none";
        }
        else{
            var x = document.getElementById("name");
            x.textContent ="Q"+(anonum+1);
            var z = document.querySelector('.dialogue');
            z.textContent = dque[anonum];
            var q1 = document.getElementById('q1');
            var q2 = document.getElementById('q2');
            var q3 = document.getElementById('q3');
            var q4 = document.getElementById('q4');
            q1.textContent =choose[anonum][0];
            q2.textContent =choose[anonum][1];
            q3.textContent =choose[anonum][2];
            q4.textContent =choose[anonum][3];
        }
    }
    else{
        thelife-=1;
        if (thelife==0){
            alert("糟糕，你死了!")
            window.location.href="homework.html";
        }  
        else{
            alert("重來一遍!")
            var life = document.getElementById('life');
            life.textContent ="Life:"+thelife;
        }
        
    }    
}