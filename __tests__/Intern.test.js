const Intern = require("../lib/Intern");
const intern = new Intern("John", "5", "john@fakemail.com", "2University");

test("test if we can get the constructor values from intern object", () => {
  expect(intern.name).toBe("John");
  expect(intern.id).toBe("5");
  expect(intern.email).toBe("john@fakemail.com");
  expect(intern.school).toBe("2University");
});

test("test if we get the name from the getName() method", () => {
  expect(intern.getName()).toBe("John");
});

test("test if we get the id from the getId() method", () => {
  expect(intern.getId()).toBe("5");
});

test("test if we get the email from the getEmail() method", () => {
  expect(intern.getEmail()).toBe("john@fakemail.com");
});

test("test if we get the school from the getSchool() method", () => {
  expect(intern.getSchool()).toBe("2University");
});

test("test if we get the role from the getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
