const phones = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Nikita", phone: "+380957761093" },
  { name: "Lev", phone: "+380660601237" },
];

function findPhoneByName(name) {
  for (const contact of phones) {
    if (contact.name === name) {
      return contact.phone;
    }
  }

  return "Contact not found";
}

console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Nikita"));
console.log(findPhoneByName("Misha"));