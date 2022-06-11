const Employee = require("../lib/Employee");
const employee = new Employee(
  "brandon",
  "8675309",
  "brandonbenson09@gmail.com"
);

test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).toBe("brandon");
});

test("test if we can get the Id from the getId() method", () => {
  expect(employee.getId()).toBe("8675309");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("brandonbenson09@gmail.com");
});

test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
