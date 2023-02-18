function color()
{
    var col=["India-Gate.jpg","ISKCON-Temple.jpg","Jama-Masjid.jpg","Lodhi-Garden.jpeg","Lotus-Temple.jpg","qutub-minar.jpg","RashtrapatiBhawan.jpg","redfort.jpg"]
    var len=col.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/img/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){color()},1000)
}
// from here gallery code starts
function imgK(pic,heading,description)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading
    document.getElementById("imgparagraph").innerHTML=description
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
}