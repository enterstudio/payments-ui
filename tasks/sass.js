var path = require('path');

var env_ = 'local';

if (process.env.DEV) {
  env_ = 'dev';
}


module.exports = {
  options: {
    sourceMap: true,
    includePaths: [
      path.join('public/scss/config/', env_),
    ]
  },
  dev: {
    options: {
      outputStyle: 'expanded'
    },
    files: {
      'public/dist/transaction.css': 'public/scss/transaction.scss',
      'public/dist/management.css': 'public/scss/management.scss',
    },
  },
  min: {
    options: {
      outputStyle: 'compressed'
    },
    files: {
      'public/dist/transaction.min.css': 'public/scss/transaction.scss',
      'public/dist/management.min.css': 'public/scss/management.scss',
    },
  },
  email: {
    options: {
      outputStyle: 'expanded'
    },
    files: {
      'public/dist/email.css': 'public/scss/email.scss',
    },
  },
};
