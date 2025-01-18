module.exports = {
  reporterEnabled: 'mochawesome, mocha-junit-reporter',
  mochawesomeReporterOptions: {
    reportDir: 'cypress/reports/mocha',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  mochaJunitReporterReporterOptions: {
    mochaFile: 'cypress/reports/junit/results-[hash].xml',
    toConsole: false,
    attachments: true,
    testCaseSwitchClassnameAndName: true,
  },
};
