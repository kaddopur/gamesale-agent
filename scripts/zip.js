const zipFolder = require('zip-folder');

zipFolder(`${process.cwd()}/build`, `${process.cwd()}/bundle.zip`, err => {
  if (err) {
    console.log('oh no!', err);
  } else {
    console.log('EXCELLENT');
  }
});
