function unlock() {
  const name = document.getElementById("name").value;
  const msg = `Hey ${name} ❤️
  
This message exists only for you.
I may not say it every time,
but you mean more to me than you know.
Thank you for being my favorite person 💕`;

  let i = 0;
  document.getElementById("message").innerHTML = "";

  const typing = setInterval(() => {
    document.getElementById("message").innerHTML += msg.charAt(i);
    i++;
    if (i === msg.length) clearInterval(typing);
  }, 50);
}