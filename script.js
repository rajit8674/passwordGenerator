function generatePassword() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (name === "" || dob === "") {
    alert("Please enter name and date of birth");
    return;
  }

  // name ko clean + short kar rahe
  const cleanName = name.replace(/\s+/g, "").toLowerCase();
  const namePart = cleanName.slice(0, 4);

  // DOB ko number me convert
  const dobPart = dob.split("-").reverse().join("");

  const symbols = "@#&!";
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

  // Final password
  const password = 
    namePart +
    dobPart.slice(0, 4) +
    randomSymbol +
    dobPart.slice(4, 8);

  result.value = password;
}

// User name aur date of birth input leta hai
// Name ke first kuch characters aur DOB numbers ko combine karta hai
// Random symbol add karke password generate karta hai
// Final password input field me show hota hai
