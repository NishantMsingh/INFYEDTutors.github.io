let bar =document.getElementById("bar");
let navbar =document.getElementById("navbar");
let flg=true;
bar.addEventListener("click",()=>{
  if(flg==true)
  {
    navbar.style.left="0%";
    flg=false;
  console.log("Har Har mahadev");
  }
  else
  {
    flg=true;
    navbar.style.left="100%";
  }
})