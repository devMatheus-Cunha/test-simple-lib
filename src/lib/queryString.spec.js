const {
  queryString,
  parse,
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

describe('Query string to object', () => {
  it('should convert query string to object', () => {
    const qs = "name=Matheus&profession=developer"

    expect(parse(qs)).toEqual({
      name: "Matheus",
      profession: "developer"
    })
  });
  it('should convert query string of a single key-value to object', () => {
    const qs = "name=Matheus"

    expect(parse(qs)).toEqual({
      name: "Matheus",
    })
  });
  it('should convert query string to an object taking care of comma separated values', () => {
    const qs = "name=Matheus&abilities=JS,TDD"

    expect(parse(qs)).toEqual({
      name: "Matheus",
      abilities: ["JS", "TDD"]
    })
  });
});