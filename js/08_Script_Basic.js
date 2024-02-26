function test() {
    var a = document.getElementById("hs");
    a.innerHTML = "안녕하세요."
}
function test2() {
    alert('안녕하슈');
}
function question() {
    /*
        confirm(질문창)
        [window.]confirm("질문내용");
        변수명 => 예, OK, 확인(true)/아니오, Cancel, 취소(false)
    */
   //질문내용 : 저장하시겠습니까?
    //예 > 콘솔창에 "저장되었습니다." 출력
    //아니오 > 콘솔창에 "취소되었습니다." 출력
    let isSaved = confirm("저장하시겠습니까?");
    if(isSaved){
        console.log("저장되었습니다.")
    } else {
        console.log("취소되었습니다.")
    }
}
function question2() {
    /*
        prompt : 질문을 하고 사용자에게 입력을 받을 수 있는 창
    */
   let p = prompt("주민번호 입력")

   alert("당신의 주민번호는" + p + "입니다.");
}
// 문서 내에 html 형식으로 값을 출력하는 함수 : innerHtml, innerText
// area1 아이디 속성을 가진 요소에 사용자가 입력한 데이터를 출력
// 오늘 {value}를 먹었습니다.
// + value + 부분 색을 다르게 표시
function menu() {
    let q = prompt('뭐 먹었는지?');
    document.getElementById("val").innerHTML = q;
}

function loginTest() {
    let userId = document.getElementById("userId");
    let userPw = document.getElementById("userPw");
    let idVal = userId.value;
    let pwVal = userPw.value;
    console.log(userId);
    console.log(idVal);
    
    let result = document.getElementById("userInfo");
    result.value = idVal + "/" + pwVal;

    userId = '';
    userPw = '';
}