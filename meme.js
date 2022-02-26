const url="https://meme-api.herokuapp.com/gimme";

const main=document.querySelector("#main");

async function getMeme(){
 const response = await fetch(url);
    var resdata = await response.json();
    console.log(resdata);

addMemeToPage(resdata);
}

 function addMemeToPage(data){
 const meme= document.createElement("div");
meme.innerHTML=`
<h6><img src="${data.url}" width="300" height="300"></h6>
`;
main.innerHTML="";
main.appendChild(meme);

}

getMeme();