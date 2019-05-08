module.exports = {
  "main": [
    "amp-toolbox [command] <options>",
    "",
    "",
    "lint ...................... checks document for errors",
    "update-cache .............. removes documents from the AMP Caches",
    "version ................... shows version",
    "help ...................... show this menu"
  ].join("\n"),
  "update-cache": [
    "Usage:",
    "",
    "",
    "amp-toolbox update-cache [url] <options>",
    "",
    "",
    "Options:",
    "--privateKey .............. path to the private key file. Defaults to './privateKey.pem'.",
  ].join("\n"),
  "lint": [
    "Usage:",
    "",
    "",
    "amp-toolbox lint url",
    "",
    "Examples:",
    "  $ amplint https://amp.dev/",
  ].join("\n")
}
