document.getElementById("heading").innerHTML=localStorage.getItem("heading")|| "Enter your heading !!!";
document.getElementById("content").innerHTML=localStorage.getItem("content") || "Enter your content here!!" ;

function save(){
    localStorage.setItem("heading",document.getElementById("heading").innerHTML);
    localStorage.setItem("content",document.getElementById("content").innerHTML);
}

function bold(){
    document.execCommand("bold",false,"");
}
function underline(){
    document.execCommand("underline",false,"");
}

function italic(){
    document.execCommand("italic",false,"");
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