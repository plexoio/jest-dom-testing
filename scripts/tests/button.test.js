const buttonClick = require('../button');

beforeEach(() => {
    document.body.innerHTML = `<p id="my-text"></p>`;
})

describe('DOM tests', () => {
    test('Changing <p> content', () => {
        buttonClick();
        expect(document.getElementById('my-text').innerHTML).toEqual('You clicked me!'); // Matcher function needed
    })
})