const {
  queryString
} = require('./querystring')

describe('Object to query string', () => {
  it('should create a valid query string when an object provided', () => {
    const obj = {
      name: "Matheus",
      profession: "developer"
    }

    expect(queryString(obj)).toBe(
      "name=Matheus&profession=developer"
    )
  })
  it('should create a valid query string even when a arraay is passed as value', () => {
    const obj = {
      name: "Matheus",
      abilities: ["JS", "TDD"]
    }
    expect(queryString(obj)).toBe(
      "name=Matheus&abilities=JS,TDD"
    )
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: "Matheus",
      abilities: {
        first: "JS",
        second: "TDD"
      }
    }
    expect(() => queryString(obj)).toThrowError()
  });
});

// describe('Query string to object', () => {

// }); 