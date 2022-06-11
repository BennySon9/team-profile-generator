const Manager = require("../lib/Manager");
const manager = new Manager("Jared", "1", "jared@fakemail.com", "1");

test("test if we can get the constructor values from this manager object", () => {
  expect(manager.name).toBe("Jared");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("jared@fakemail.com");
  expect(manager.officeNumber).toBe("1");
});

test("test if we get the name from the getName() method", () => {
  expect(manager.getName()).toBe("Jared");
});

test("test if we get the id from the getId() method", () => {
  expect(manager.getId()).toBe("1");
});

test("test if we get the email from the getEmail() method", () => {
  expect(manager.getEmail()).toBe("jared@fakemail.com");
});

test("test if we get the officeNumber from the officeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("1");
});

test("test if we get the role from the getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
