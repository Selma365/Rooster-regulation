const assert=require('assert');
const Rooster=require('../index');

describe('Rooster', () => {
  describe('.announceDawn',() => {
      it('returns a rooster call',() => {
          //setup
          const expected='cock-a-doodle-doo!';
          //exercise
          const actual=Rooster.announceDawn();
          //verify
          assert.equal(actual,expected);
      });
  });
  describe('.timeAtDawn',()=>{
      it('returns its argument as a string',()=>{
          //setup
          const number=10;
          const expected='10';
          //exercise
          const actual=Rooster.timeAtDown(number);
          //verify
          assert.equal(actual,expected);
      });
       it('throws an error if passed a number less than 0',()=>{
          //setup
          const number=-1;
          const expected=RangeError;
          //exercise
          const actual=Rooster.timeAtDown(number);
          //verify
          assert.throws(()=>{
            Rooster.timeAtDown(number);
          },expected);
  });
});

