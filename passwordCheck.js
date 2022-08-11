function getPasswordChecker(password) {
    return function () {
        const pass = '777';
        let checkStatus = false;
        if (password === pass) checkStatus = true;
        return checkStatus;
    }
}


const falsePass = getPasswordChecker('wrong_password');
const truePass = getPasswordChecker('777');

console.log(`falsePass is ${falsePass()} password!`);
console.log(`truePass is ${truePass()} password!`);
