module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://localhost:4200/account/register"
    },
    testMatch: [
        "**/*.test.js"
    ],
    verbose: true
}
