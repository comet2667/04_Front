function login() {
    let name = document.getElementById("name").value;
    let userId = document.getElementById("userId").value;
    let userPw = document.getElementById("userPw").value;
    let phone = document.getElementById("phone").value;

    let text = document.getElementById("test");
    text.innerText = "이름 : " + name + "\n\n" +
                    "아이디 : " + userId + "\n\n" +
                    "비밀번호 : " + userPw + "\n\n" +
                    "연락처 : " + phone;
}