


const section=document.getElementById("section");
const btn_change=document.querySelector("#change-word");

const words=["Hi there!","It's been long","Thought to say hi","Stay Safe!....."];
const colors=["red","blue","green","purple"];

let cur_word=words.length-1;

section.innerHTML="<p>" +words[cur_word]+"</p>";
section.style.color=colors[cur_word];

// function wordChange(e)
// {
//   if (cur_word==0)

//   {
//       cur_word=words.length-1;
//   }
//   else{
//       cur_word--;
//   }
  
//     cur_word--;

//   section.innerHTML="<p>" +words[cur_word]+"</p>";
// }

btn_change.addEventListener("click",(e)=>{

   if(cur_word==0)
{
cur_word=words.length-1;
}
else{
    cur_word--;
}
section.innerHTML=`<p>  ${words[cur_word]} <p/>`;
section.style.color=colors[cur_word];
})
