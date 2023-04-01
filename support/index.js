const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (opts.displayName === 'script' || opts.name === 'request') {
    return;
  }
  return origLog(opts, ...other);
  
};
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})