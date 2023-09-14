// challenge: https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

const vowels = ["A", "E", "I", "O", "U"];
const wildcardLetter = "X";
const dateRegexp = /^(?<day>\d{1,2})\/(?<month>\d{1,2})\/(?<year>\d{4})$/;

function fiscalCode(person) {
	let finalCode = "";
	
	// rule 1
	finalCode += getSurnameCode(person.surname);
	
	// rule 2
	finalCode += getNameCode(person.name);
	
	// rule 3
	const date = parseDate(person.dob);
	finalCode += date.year;
	finalCode += date.monthLetter;
	finalCode += person.gender === 'F' ? date.dayForFemale : date.dayForMale;
	
	return finalCode;
}

function splitIntoVowelsAndConsonants(word) {
	let wordVowels = [], wordConsonants = [];
	word = word.toUpperCase();
    
	for (let index = 0; index < word.length; index++) {
		const char = word.charAt(index);
		if (vowels.includes(char)) {
			wordVowels.push(char);
		} else {
			wordConsonants.push(char);
		}
	}
	
	return {
		word,
		vowels: wordVowels,
		consonants: wordConsonants,
	};
}

function getCodeByConsonantsVowelsOrWildcardLetter(word, length) {
	let code = "";
	for (let index = 0; index < word.consonants.length && code.length < length; index++) {
		code += word.consonants[index];
	}
	
	for (let index = 0; index < word.vowels.length && code.length < length; index++) {
		code += word.vowels[index];
	}
	
	while (code.length < length) {
		code += wildcardLetter;
	}
	
	return code;
}

function getSurnameCode(surname) {
	let splittedSurname = splitIntoVowelsAndConsonants(surname);
	return getCodeByConsonantsVowelsOrWildcardLetter(splittedSurname, 3);
}

function getNameCode(name) {
	let splittedName = splitIntoVowelsAndConsonants(name);
	if (splittedName.consonants.length === 3) {
		return splittedName.consonants.join('');
	}
	
	if (splittedName.consonants.length > 3) {
		return splittedName.consonants[0] + splittedName.consonants[2] + splittedName.consonants[3];
	}
	
	return getCodeByConsonantsVowelsOrWildcardLetter(splittedName, 3);
}

function getDayForMaleGender(day) {
	if (day < 10) {
		return `0${day.toString()}`;
	}
	
	return day.toString();
}

function getDayForFemaleGender(day) {
	return (day + 40).toString();
}

function parseDate(date) {
	const { day, month, year } = dateRegexp.exec(date).groups;
	
	let result = {
		day: Number(day),
		month: Number(month),
		year: year.substring(2),
	};
	
	result.monthLetter = months[result.month];
	
	result.dayForMale = getDayForMaleGender(result.day);
	result.dayForFemale = getDayForFemaleGender(result.day);
	
	return result;
}