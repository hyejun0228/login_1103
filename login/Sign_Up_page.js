function test(e) {
    var number = e.value.replace(/[^0-9]/g, "");
    var phone = "";

    if (number.length < 4) {
        return number;
    } else if (number.length < 7) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3);
    } else if (number.length < 10) {
        phone += number.substr(0, 2);
        phone += "-";
        phone += number.substr(2, 3);
        phone += "-";
        phone += number.substr(5);
    } else if (number.length < 11) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 3);
        phone += "-";
        phone += number.substr(6);
    } else {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 4);
        phone += "-";
        phone += number.substr(7, 4);
    }

    e.value = phone;
}


function test() {
    const p1 = document.getElementById('exampleInputPassword1').value;
    const p2 = document.getElementById('exampleInputPassword2').value;
    console.log(p1, p2);
    if( p1 != p2 ){
      alert("비밀번호가 일치 하지 않습니다");
      return false;
    } else{
      alert("비밀번호가 일치합니다");
      return true;
    }
  }