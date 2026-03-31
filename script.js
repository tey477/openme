const message = ` Dear [ thatha ], im so sorry 
I know I screwed up. I shouldn't've been so caught up and left u hanging. Sorry, my love . I'll try to do better, I'm really sorry if I made u feel upset or uncomfortable lately. Can't bear being apart like this, 

i love u so much. i hope we could talk about it, kaka ga tega sayang. kaka sedih juga karena buat dede jadi begini :((. `; 

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
