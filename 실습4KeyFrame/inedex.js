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
// document.querySelector('.content').addEventListener('click', function() {
//   const content = this;

//   content.classList.add('jump');
//     setTimeout(function() {
//     content.classList.remove("jump");
//     }, 500);
//     content.attr("jump",true);
//   });

  $('.content').click(function () {

    if (isDisabled) {  //<-( 1 ) 수행가능여부 검사
    content.classList.add('jump');
      setTimeout(function() {
      content.classList.remove("jump");
      }, 500);
      return false;
    } else {
      isDisabled = true; //<-( 2 ) 실행 불가능하도록 flag 변경
      doSomthing();
      
    }
});