const usDollars = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

module.exports = {
  format_author: (user, timestamp) => {
    return `${user.name} on ${timestamp.toLocaleDateString()}`;
  },

  format_amount: (number) => {
    return usDollars.format(number);
  },
};
