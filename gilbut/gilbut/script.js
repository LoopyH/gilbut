(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0; /* 배열의 인덱스 초기값*/
    let currentTxt = txtArr[index].split(""); /*한 글자씩 쪼개고, 배열로 만들기*/
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); /*textContent : 요소 노드의 텍스트 접근*/
      if(currentTxt.length !== 0){ /*setTimeout : 일정 시간 뒤에 호출해주는 메서드 */
        setTimeout(writeTxt, Math.floor(Math.random() * 100));/*1초 뒤 호출*/
      }else{
        currentTxt = spanEl.textContent.split(""); /*복구 */
        setTimeout(deleteTxt, 3000);
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
  })();


// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
(function(){  
    const headerEl =document.querySelector("header");
    window.addEventListener("scroll", function(){
    this.requestAnimationFrame(scrollcheck);
    });
    const browserscrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browserscrollY > 0){ /*0보다 크면 스크롤이 되었다는 것, 스크롤이 될 때마다 함수가 실행된다는 것*/ 
        headerEl.classList.add('active');
    }else{
        headerEl.classList.remove('active');
    }
})();


//애니메이션 스크롤

const animationMove = function(selector){
    const target = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    /*내가 이동하고자 하는 최종 거리를 구한다. */
    window.scrollTo({top: targetScrollY, behavior: 'smooth'}); 
    }

//스크롤 이벤트 연결하기

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i=0; i<scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click", function(e){
        animationMove(this.dataset.target);
        animationMove(target);
    });
}