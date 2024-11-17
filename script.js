console.log("run......")
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let  con=document.querySelector(".container")
  let channel=document.createElement("div")
  con.append(channel)
  channel.style.padding="8px";
  channel.style.width="80%";
  channel.style.display="flex";
  channel.style.backgroundColor="black";
  channel.style.margin="2px"

  let card = document.createElement("div");
  channel.append(card);
  let image = document.createElement("div");
  channel.prepend(image);

  let thumb = document.createElement("img");
  thumb.src=thumbnail
  thumb.style.width="150px"
  thumb.style.borderRadius="4px"
  thumb.style.position="relative"
image.prepend(thumb);

let dur = document.createElement("span");
dur.innerHTML=duration;
image.append(dur);
dur.style.color="white"
dur.style.backgroundColor="#000000d1"
dur.style.position="relative"
dur.style.bottom="8px"
dur.style.right="40px"
dur.style.borderRadius="3px"
dur.style.padding="4px"
dur.style.fontSize="10px"



let tit = document.createElement("div");
tit.innerHTML= title;
card.append(tit);
card.style.color="white"
card.style.margin="2px"
card.style.display="flex"
card.style.flexDirection="column"

let detail = document.createElement("div");
card.append(detail);
detail.style.color="gray"
detail.style.display="flex"
detail.style.gap="7px"
detail.style.fontSize="12px"
detail.style.paddingTop="10px"

let cname = document.createElement("div");
cname.innerHTML= cName;
detail.append(cname);


let view= document.createElement("li");
if(views<1000)
{view.innerHTML= `${views} views`;}

else if(views>=1000 && views<1000000)
  {
    views=views/1000;
view.innerHTML= `${views}K views`;
}
else if(views>=1000000)
  {
    views=views/1000000;
view.innerHTML= `${views}M views`;
}
detail.append(view);

let month = document.createElement("li");
if(monthsOld<12)
month.innerHTML= `${monthsOld} month old`;
else if(monthsOld>=12)
  {monthsOld=Math.floor(monthsOld/12)
month.innerHTML= `${monthsOld} year old`;}

detail.append(month);
}
  createCard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 560, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
  