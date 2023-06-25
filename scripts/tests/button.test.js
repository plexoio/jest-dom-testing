// By specific components, MOCKS
// beforeEach(() => {
//     document.body.innerHTML = `<p id="my-text"></p>`;
// });

// Imports
const buttonClick = require('../button'); // Could be named differently

// By loading the whole HTML file, MOCKS
beforeEach(() => {
    let fs = require('fs');
    let htmlContents = fs.readFileSync('index.html','utf-8');
    document.open();
    document.write(htmlContents);
    document.close();
});

// Run tests, DIRECTIVES & MATCHERs
describe('DOM tests', () => {
    test('Changing <p> content', () => {
        buttonClick(); // Test this function and compare
        expect(document.getElementById('my-text').innerHTML).toEqual('You clicked me!'); // Matcher function needed
    });
    
    test('Does one h1 exist?', () => {
        expect(document.getElementsByTagName('h1').length).toBeGreaterThanOrEqual(1); // toBe() for specific
    });
});