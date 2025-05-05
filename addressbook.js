// Contact constructor
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.addresses = [];
  }
  
  Contact.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  // Address constructor
  function Address(street, city, state, type) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.type = type;
  }
  
  Address.prototype.fullAddress = function() {
    return `${this.type}: ${this.street}, ${this.city}, ${this.state}`;
  };
  
  // AddressBook constructor
  function AddressBook() {
    this.contacts = [];
    this.currentId = 0;
  }
  
  AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts.push(contact);
  };
  
  AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
  
  AddressBook.prototype.findContact = function(id) {
    return this.contacts.find(contact => contact.id === id) || false;
  };
  
  AddressBook.prototype.deleteContact = function(id) {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // Export for Node.js environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      Contact,
      Address,
      AddressBook
    };
  }