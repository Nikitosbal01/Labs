const hash = {
  "Marcus Aurelius": "+380445554433",
  "Nikita": "+380957761093",
  "Lev": "+380660601237"
};

function findPhoneByName(name) {
  return hash[name] || "Contact not found";
}

console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Nikita"));
console.log(findPhoneByName("Misha"));