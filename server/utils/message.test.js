var expect = require('expect');
var {generateMessage} = require ('./message');


describe('genarateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'person';
        var text = 'test message';
        var message = generateMessage(from, text);

        expect(message.from).toBe('person');
        expect(message.text).toBe('test message');
        expect(typeof message.createdAt).toBe('number');
    });
});