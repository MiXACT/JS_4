function getPasswordChecker(password) {
    function validatePass(userPass) {
        const validPass = '777';
        let checkStatus = false;
        if (userPass === validPass) checkStatus = true;
        return checkStatus;
    }
    return validatePass(password);
}


const falsePass = getPasswordChecker('wrong_password');
const truePass = getPasswordChecker('777');

console.log(`falsePass is ${falsePass} password!`);
console.log(`truePass is ${truePass} password!`);
