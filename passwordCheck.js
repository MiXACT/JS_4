function getPasswordChecker(password) {
	return function(truePass) {
		let status = false;
		if (truePass === password) status = true;
		return status;
	}
}


const passChecker = getPasswordChecker('777');
console.log(`TRUE_777 = ${passChecker('777')}`);
console.log(`FALSE_555 = ${passChecker('555')}`);

const passChecker2 = getPasswordChecker('555');
console.log(`TRUE_555 = ${passChecker2('555')}`);
console.log(`FALSE_777 = ${passChecker2('777')}`);
