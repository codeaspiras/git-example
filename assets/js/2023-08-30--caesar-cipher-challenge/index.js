// explaining arrays
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// explaining MOD operation (math)
console.log(arr[10 % 10]);

// solving challenge: https://edabit.com/challenge/a33jdGXkaQRtK9ZTs
const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const TRANSFORMATION_METHOD_UPPER_CASE = 'toUpperCase';

function getAlphabetLetter(index) {
	return ALPHABET[index % ALPHABET.length];
}

function getEncryptedLetter(letter, jumps, transformationMethod) {
  	const alphabetIndex = ALPHABET.indexOf(letter);
  	if (alphabetIndex >= 0) {
      const letter = getAlphabetLetter(alphabetIndex + jumps);
      if (transformationMethod) {
      	return letter[transformationMethod](); // PHP: $letter->{$transformationMethod}()
      }
      
      return letter;
    }
    
    return "";
}

function caesarCipher(phrase, jumps) {
    const letters = phrase.split("");
    let encryptedPhrase = "";
    for (const letter of letters) {
        const encryptedLetter = getEncryptedLetter(letter, jumps);
        if (encryptedLetter != "") {
            encryptedPhrase += encryptedLetter;
            continue;
        }
        
        const encryptedFromUpperCaseLetter = getEncryptedLetter(
            letter.toLowerCase(),
            jumps,
            TRANSFORMATION_METHOD_UPPER_CASE
        );
        if (encryptedFromUpperCaseLetter != "") {
            encryptedPhrase += encryptedFromUpperCaseLetter;
            continue;
        }
        
        // if the letter is not on the alphabet, just add it
        encryptedPhrase += letter;
    }
  
    return encryptedPhrase;
}


// Play time: prototype

String.prototype.encrypt = function(jumps) {
	return caesarCipher(this, jumps);
}

String.prototype.maskPhone = function() {
	return this.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
}

console.log("21912341234".maskPhone()); // (21) 9 1234-1234