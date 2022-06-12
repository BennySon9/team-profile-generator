const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Alec", "2", "alec@fakemail.com", "alecHub");

test("test if we can get the constructor values from engineer object", () => {
  expect(engineer.name).toBe("Alec");
  expect(engineer.id).toBe("2");
  expect(engineer.email).toBe("alec@fakemail.com");
  expect(engineer.github).toBe("alecHub");
});

test("test if we get the name from the getName() method", () => {
  expect(engineer.getName()).toBe("Alec");
});

test("test if we get the id from the getId() method", () => {
  expect(engineer.getId()).toBe("2");
});

test("test if we get the email from the getEmail() method", () => {
  expect(engineer.getEmail()).toBe("alec@fakemail.com");
});

test("test if we get the github username from githubUsername() method", () => {
  expect(engineer.githubUsername()).toBe("alecHub");
});

test("test if we get the role from the getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
