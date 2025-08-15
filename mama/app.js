onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  
  function go(){
    const b = new Audio();
    b.src = "song.mp3";
    b.play();
    document.getElementById("cli").style='display:none;';
  }
  setTimeout(function(){
go()
  },1000);