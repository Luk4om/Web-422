const account1 = {
    owner: 'Prayuth Snow',
    user: 'yuth',
    pswd: '1111'
}
const account2 = {
    owner: 'Lisa Lazoo',
    user: 'lisa',
    pswd: 'abcd'
}

const account = { account1, account2 };
// ใช้คำสั่ง find หา lisa แล้วค่อยหาตาม username

const btnLogin = document.querySelector(".login_btn");
const loginLoginUser = document.querySelector(".login_input--user");
const loginLoginPsw = document.querySelector(".login_input--psw");
const lblWelcome = document.querySelector(".welcome");
const errBtn = document.querySelector(".error");

document.addEventListener("click", (e) => {
    e.preventDefault();
    const user = loginLoginUser.value;
    const psw = loginLoginPsw.value;

    currentAcc = accounts.find((acc) => acc.user === user);
    console.log(currentAcc)

    if (user === "admin" && psw === "1234") {
        lblWelcome.textContent = `ยินดีต้อนรับ ${user}`;
        loginLoginUser.value = loginLoginPsw.value = '';
    }
});