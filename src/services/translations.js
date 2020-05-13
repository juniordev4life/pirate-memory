// load translation file from Loco (https://localise.biz)
var request = require('request')
const ora = require('ora')
const chalk = require('chalk')

const apiKey = 'jEZ2vrUS8RAt2gAVRBhErDlP2I52U_ee'
let localSpinner = ora('Loading locals').start()
localSpinner.color = 'yellow'
localSpinner.text = 'Loading all locals'
// get all locals from account which where set
request(
  {
    url: 'https://localise.biz:443/api/locales?key=' + apiKey,
    json: true
  },
  function(error, response, body) {
    if (!error && response.statusCode === 200) {
      localSpinner.succeed('All locals loaded')
      for (let i = 0; i < body.length; i++) {
        let locale = body[i].code
        let translatedInPercent = parseFloat(
          (body[i].progress.translated * 100) /
            (body[i].progress.translated + body[i].progress.untranslated)
        ).toFixed(2)
        let localSpinner = ora('Loading local' + locale).start()
        localSpinner.color = 'yellow'
        var url =
          'https://localise.biz/api/export/locale/' +
          locale +
          '.json?format=multi&key=' +
          apiKey

        request(
          {
            url: url,
            json: true
          },
          function(error, response, body) {
            if (!error && response.statusCode === 200) {
              const writeJsonFile = require('write-json-file')
              writeJsonFile('src/lang/' + locale + '.json', body).then(() => {
                let finalMessage = ''
                if (translatedInPercent === '100.00') {
                  finalMessage +=
                    ' (' +
                    chalk.green(translatedInPercent + '% translated' + ')')
                } else {
                  finalMessage +=
                    ' (' + chalk.red(translatedInPercent + '% translated' + ')')
                }
                localSpinner.succeed(
                  'Locale ' +
                    locale +
                    ' was loaded and file src/lang/' +
                    locale +
                    '.json was created' +
                    finalMessage
                )
              })
            }
          }
        )
      }
    }
  }
)
