// เชื่อม form, name, email, password, confirm
// รับ event 'submit' ใน form
// เขียน function checkpassword() เช็ต password เท่ากับ
// confirm หรือไม่ ถ้าไม่ ไม่แสดง รหัสผ่านไม่ตรงกัน

const form = document.getElementById('myForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkPassword(password, confirm);
    chackUser(6, 10);
});

const checkPassword = (password, confirm) => {
    if (password !== confirm) {
        showMassage('รหัสผ่านไม่ถูกต้อง', confirm);
    }
};

const showMassage = (massage, input) => {
    const formControl = confirm.parentElement;
    formControl.className = 'frmDiv error'
    const small = formControl.querySelector('small');
    small.innerText = meassage;
};

const checkUsername = (min, max) => {
    if(username.value.length < min) {
        showMassage('ชื่อผู้ใช้ต้องมากกว่า 6 ตัวอักษร', username);
    } else if(username.value.length > max) {
        showMassage('ชื่อผู้ใช้ต้องน้อยกว่า 10 ตัวอักษร', username);
    }
};