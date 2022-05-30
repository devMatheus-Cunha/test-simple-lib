const {queryString} = require('./querystring')

describe('Object to query string', () => {
  it('should create a valid query string when an object provided', () => {
    const obj = {
      name: 'Matheus',
      profession: "developer"
    }

      expect(queryString(obj)).toBe(
        "name=Matheus&profession=developer"
      )
  });
});

// describe('Query string to object', () => {
  
// }); 