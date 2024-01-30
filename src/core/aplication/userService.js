// userService.js
const users = [
  {
    _id: '1',
    email: 'usuario@example.com',
    password: 'password',
  },
  {
    _id: '2',
    email: 'admin@example.com',
    password: 'adminPassword',
  },
];

const findUserByEmailOrUsername = async (identifier) => {
  return users.find((user) => user.email === identifier || user.nombre === identifier);
};

const findUserById = async (id) => {
  return users.find((user) => user._id === id);
};

const saveUser = async (user) => {
  const newUser = { ...user, _id: String(users.length + 1) };
  users.push(newUser);
  return newUser;
};

export const registerUser = async (email, password, telefono) => {
  try {
    const userFound = await findUserByEmailOrUsername(email);

    if (userFound) {
      throw new Error('El email ya está en uso');
    }

    const isAdmin = email === 'admin@example.com' && password === 'adminPassword';

    const newUser = {
      email: email,
      password: password,
      telefono: telefono,
      isAdmin: isAdmin,
    };

    const userSaved = await saveUser(newUser);

    return {
      id: userSaved._id,
      nombre: userSaved.nombre,
      email: userSaved.email,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (identifier, password) => {
  try {
    const userFound = await findUserByEmailOrUsername(identifier);

    if (!userFound) {
      throw new Error('El correo electrónico o nombre de usuario no existe');
    }

    if (userFound.password !== password) {
      throw new Error('La contraseña es incorrecta');
    }

    return {
      id: userFound._id,
      nombre: userFound.nombre,
      email: userFound.email,
      successMessage: 'Correo y contraseña válidos',
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
