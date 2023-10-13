import { v4 as uuidv4 } from 'uuid';

let users = [ ]

export const getUsers = (req, res) =>{
    res.send(users)
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.userID === id);
    res.send(foundUser);
}

export const createUser = (req, res) => {
    const user = req.body;
    const userID = uuidv4();
    const userWithID = {userID, ...user};
    users = [...users, userWithID ];

    res.send(`User with the name ${user.firstName} has been added to the database.`)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.userID !== id);
    res.send(`User with the id ${id} has been deleted from the database.`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.userID === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
}