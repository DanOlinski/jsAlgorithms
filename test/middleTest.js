const middle = require('../modules/middle');
const chai = require('chai');
const assert = chai.assert;

describe("#middle", () => {
  it("returns 4 for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [ 4 ]);
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6])', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
}); 