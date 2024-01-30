
import User from './user';

export default {
  findByEmail: async (email) => {
    return await User.findOne({ email });
  },

  save: async (user) => {
    const newUser = new User(user);
    return await newUser.save();
  },

  findById: async (userId) => {
    return await User.findById(userId);
  }


};
