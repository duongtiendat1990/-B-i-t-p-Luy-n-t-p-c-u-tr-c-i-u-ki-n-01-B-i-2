function Check() {
    let age = document.getElementById("age").value;
    if (age<=3||age>185) {
        alert("Please input your real age")
    } else if (age>=15&&age<=75) {
        document.getElementById("result").innerHTML = 'qualified to register';
    } else if (age<15&&age>3){
        document.getElementById("result").innerHTML = 'too young';
    } else {
        document.getElementById("result").innerHTML = 'too old';
    }
}