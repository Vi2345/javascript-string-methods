function length()
{
  let count=String(document.getElementById("text").value);
  let length=count.length;
  document.getElementById("demo").innerHTML= length;
}

function replace()
{
    let count =String(document.getElementById("text replace").value);
    let a =String(document.getElementById("current text").value);
    let b =String(document.getElementById("replace text").value);
    let c= count.replace(a,b);
    document.getElementById("demo1").innerHTML=c;
}


function replaceAll()
{
    let count =String(document.getElementById("text replaceall").value);
    let a =String(document.getElementById("current text word").value);
    let b =String(document.getElementById("replace all text word").value);
    let c= count.replaceAll(a,b);
    document.getElementById("demo2").innerHTML=c;
}

function concat()
{
    let text1=String(document.getElementById("Text1").value);
    let text2=String(document.getElementById("Text2").value);
    let con=text1.concat(" ",text2);
    document.getElementById("demo3").innerHTML=con;
    
    
}

function padStart()
{
    let count=String(document.getElementById("text padding").value);
    let a=Number(document.getElementById("first-pad").value);
    let b=String(document.getElementById("second-pad").value);
    let c=count.padStart(a,b);
    document.getElementById("demo4").innerHTML=c;
}

function padEnd()
{
    let count=String(document.getElementById("text padding").value);
    let a=Number(document.getElementById("first-pad").value);
    let b=String(document.getElementById("second-pad").value);
    let c=count.padEnd(a,b);
    document.getElementById("demo5").innerHTML=c;
}

function textUpperCase()
{
  let count=String(document.getElementById("textcase").value);
  let textupper=count.toUpperCase();
  document.getElementById("demo6").innerHTML=textupper;
}


function textLowerCase()
{
  let count=String(document.getElementById("textcase").value);
  let textlower=count.toLowerCase();
  document.getElementById("demo7").innerHTML=textlower;
}

function CharAt()
{
    let  count= String(document.getElementById("textextract").value);
    let a= Number(document.getElementById("Extract").value);
    let c= count.charAt(a);
    document.getElementById("demo8").innerHTML=c;
}

function CharCodeAt()
{
    let  count= String(document.getElementById("textextract").value);
    let a= Number(document.getElementById("Extract").value);
    let c= count.charCodeAt(a);
    document.getElementById("demo9").innerHTML=c;
}
function PropertyAccess()
{
    let count=String(document.getElementById("textextract").value);
    let a=Number(document.getElementById("Extract").value);
    let c=count[a];
    document.getElementById("demo10").innerHTML=c;
}

function split()
{
    let count=String(document.getElementById("array").value);
    let a=String(document.getElementById("split").value);
    let c=count.split(a);
    document.getElementById("demo11").innerHTML="first element:" + " " + c[0];
    document.getElementById("demo12").innerHTML="Second element:"+ " " + c[1];
    document.getElementById("demo13").innerHTML="Third element:" + " " + c[2];
  
}

function slice()
{
    let count=String(document.getElementById("text slice").value);
    let a=Number(document.getElementById("first-slice").value);
    let b=Number(document.getElementById("last-slice").value);
    let c=count.slice(a,b);
    document.getElementById("demo14").innerHTML=c;
}

function substring()
{
    let count=String(document.getElementById("text substring").value);
    let a=Number(document.getElementById("first-substring").value);
    let b=Number(document.getElementById("last-substring").value);
    let c=count.substring(a,b);
    document.getElementById("demo15").innerHTML=c;
}
