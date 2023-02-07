// Наследованиє
//  - extends
//  - super()


// class Hero {
//     constructor(name = 'hero', xp = 0) {
//         this.name = name;
//         this.xp = xp;
//     }
//     gainXp(amount) {
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//     constructor(name, xp, weapon) {
//         super(name, xp);
//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name}`)
//     }
// }

// class Mage extends Hero {
//     constructor(name, xp, spells = []) {
//         super(name, xp);
//         this.spells = this.spells;
//     }
// }

// const mango = new Warrior({name: 'mango', xp: 1000, weapon:'алебарда'} );
// console.log(mango);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['mase'] });
// console.log(mango);





// ------------------- Приклади -------------------------------------------------
// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Change code below this line

// class Admin extends User {

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"
//     }

//     constructor() {
//         super();
//     }
// }

//---------------------------------------


// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line

//     constructor({ email, accessLevel }) {
//         super(email)
//         this.accessLevel = accessLevel;

//     }
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//---------------------------------------


// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     blacklistedEmails = [];

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }
//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true





class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const newarr = [];
    for (const argument of this.items) {
      if (argument.includes(itemToRemove)) {
        continue;
      }
      newarr.push(argument);
    }
    return newarr;
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]