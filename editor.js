document.getElementById("heading").innerHTML=localStorage.getItem("heading")|| "Enter your Heading here !!!";
document.getElementById("content").innerHTML=localStorage.getItem("content") || "Enter your content here !!" ;
var b=document.getElementById("bold");
var u=document.getElementById("underline");
var i=document.getElementById("italic");

function save(){
    localStorage.setItem("heading",document.getElementById("heading").innerHTML);
    localStorage.setItem("content",document.getElementById("content").innerHTML);
}

document.onkeydown=function(e){
    if(e.ctrlKey && e.which ==66 )
    {
      if(b.style.background!="grey")
        b.style.background="grey";
    else 
       b.style.background="white";
    }  
    if(e.ctrlKey && e.which ==73 )
     {
      
      if( i.style.background !="grey")
        i.style.background="grey";
      else
       i.style.background="white";  
     }
    if (e.ctrlKey && e.which ==85)
    {
      if(u.style.background !="grey")  
       u.style.background="grey";
      else 
       u.style.background ="white"

    }  
   
    
    
}
function bold(){
    
    if(document.execCommand("bold",false,"") &&  b.style.background !="grey")
       b.style.background="grey";
    else
       b.style.background="white"  
    
}
    
function underline(){
   
   
    if(document.execCommand("underline",false,"") &&  u.style.background !="grey")
     u.style.background="grey";
    else
     u.style.background="white";  
 
}

function italic(){
   
    if(document.execCommand("italic",false,"") &&  i.style.background !="grey")
     i.style.background="grey";
    else
     i.style.background="white";  
 
}

function undo(){
    document.execCommand("undo",false,"");
}

function change(){
    var s=document.getElementById("font");
    var result=s.options[s.selectedIndex].text;
    document.execCommand("fontname",false,result);

}

function fontsize(){
    var size=document.getElementById("fontsize");
    var fontsize=size.options[size.selectedIndex].text;
    document.execCommand("fontSize",false,fontsize);
}