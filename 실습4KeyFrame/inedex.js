// $('.content').on('click', function(){	
// 	document.getElementById("")
// });

('.content').addEventListener("click", (e) => {
    if (!stopflag) {
    ('.content').classList.add("jump");
      stopflag = true;
      jumpNumCnt.textContent++;
    } else if (stopflag) {
      return;
    }
  
    // 연속으로 캐릭터가 뛰지 않도록 조절
    setTimeout(() => {
    ('.content').classList.remove("jump");
      stopflag = false;
    }, 1000);
  });