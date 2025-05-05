const { Contact, Address, AddressBook } = require('./address-book');

describe('Address Book', () => {
  let testContact, testAddress, testBook;

  beforeEach(() => {
    testContact = new Contact("John", "Doe", "555-1234");
    testAddress = new Address("123 Main", "Portland", "OR", "home");
    testBook = new AddressBook();
  });

  test('Contact is created with correct properties', () => {
    expect(testContact.firstName).toBe("John");
    expect(testContact.lastName).toBe("Doe");
    expect(testContact.phoneNumber).toBe("555-1234");
  });

  test('Contact fullName() returns full name', () => {
    expect(testContact.fullName()).toBe("John Doe");
  });

  test('Address is created with correct properties', () => {
    expect(testAddress.street).toBe("123 Main");
    expect(testAddress.city).toBe("Portland");
    expect(testAddress.type).toBe("home");
  });

  test('Address fullAddress() returns formatted string', () => {
    expect(testAddress.fullAddress()).toBe("home: 123 Main, Portland, OR");
  });

  test('AddressBook starts empty', () => {
    expect(testBook.contacts.length).toBe(0);
  });

  test('AddressBook adds contact with ID', () => {
    testBook.addContact(testContact);
    expect(testBook.contacts.length).toBe(1);
    expect(testBook.contacts[0].id).toBe(1);
  });

  test('AddressBook finds contact by ID', () => {
    testBook.addContact(testContact);
    const found = testBook.findContact(1);
    expect(found).toEqual(testContact);
  });

  test('AddressBook deletes contact by ID', () => {
    testBook.addContact(testContact);
    expect(testBook.deleteContact(1)).toBe(true);
    expect(testBook.contacts.length).toBe(0);
  });
});