// $('.content').on('click', function(){	
// 	document.getElementById("")
// });

// ('.content').addEventListener("click", (e) => {
//     if (!stopflag) {
//     ('.content').classList.add("jump");
//       stopflag = true;
//       jumpNumCnt.textContent++;
//     } else if (stopflag) {
//       return;
//     }
document.querySelector('.content').addEventListener('click', function() {
  const content = this;

  // jump 클래스 추가
  content.classList.add('jump');
    // 연속으로 캐릭터가 뛰지 않도록 조절
    setTimeout(function() {
    content.classList.remove("jump");
    content = false;
    }, 500);
  });