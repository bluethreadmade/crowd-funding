module.exports = {
  format_author: (user, timestamp) => {
    return `Created by ${user.name} on ${timestamp.toLocaleDateString()}`;
  },
};
