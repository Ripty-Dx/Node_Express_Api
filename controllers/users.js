import { v4 as uuidv4 } from "uuid";
const users = [
  {
    firstName: "ripty",
    lastName: "Singla",
    age: "30",
    id: 1,
  },
  {
    firstName: "ripty",
    lastName: "Singla",
    age: "30",
    id: 2,
  },
];
export const getUser = (req, res) => {
  const filteredUser = users.find((ele) => ele.id == req.params.id);
  console.log(filteredUser);
};
export const createUser = (req, res) => {
  users.push({ ...req.body, id: uuidv4() });
  res.send(users);
};
export const deleteUser = (req, res) => {
  // const filteredUser = users.find((ele) => ele.id == req.params.id);
  const index = users.indexOf(users.find((ele) => ele.id == req.params.id));
  users.splice(index, 1);
  console.log(users);
  res.send(users);
};
export const updateDetails = (req, res) => {
  const user = users.find((ele) => ele.id == req.params.id);
  if (req.body.lastName) {
    user.lastName = req.body.lastName;
  }
  if (req.body.firstName) {
    user.firstName = req.body.firstName;
  }
  if (req.body.age) {
    user.age = req.body.age;
  }
  // console.log(users);
  res.send(users);
};
export const updateUser = (req, res) => {
  const user = users.find((ele) => ele.id == req.params.id);
  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
  }
  console.log(users);
};
