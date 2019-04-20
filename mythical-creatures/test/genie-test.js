import chai from 'chai';
import mocha from 'mocha';
const assert = require('chai').assert


describe('Genie', () => {

  it('should be a function', () => {
    assert.isFunction(Genie);
  });

  it('should instantiate Genie', () => {
    const genie = new Genie();
    assert.isObject(genie);
  });

  it('should have a name', () => {
    const genie = new Genie();
    assert.equal(genie.name, 'Bobo');
  });

  it('should start in the Cave of Wonders', () => {
    const genie = new Genie();
    assert.equal(gene.location, 'Cave of Wonders');
  });

  it('should have the capacity to take in masters', () => {
    const genie = new Genie();
    assert.equal(genie.masters, []);
  });

  it('should not be free', () => {
    const genie = new Genie();
    assert.equal(genie.isFree, false);
  });

});

describe('Street Rat', () => {

  it('should be a function', () => {
    assert.isFunction(StreetRat);
  });

  it('should instantiate Street Rat', () => {
    const streetRat = new StreetRat();
    assert.isObject(streetRat);
  });

  it('should have a name', () => {
    const streetRat = new StreetRat();
    assert.equal(streetRat.name, 'Jeff');
  });

  it('should start in the bazaar', () => {
    const streetRat = new StreetRat();
    assert.equal(streetRat.location, 'bazaar');
  });

  it('should be able to start to a different location', () => {
    const streetRat = new StreetRat('palace');
    assert.equal(streetRat.location, 'palace')
  });

  it('should start with no awesomeness', () => {
    const streetRat = new StreetRat();
    assert.equal(streetRat.awesome, 0);
  });

});

describe('Genie & Street Rat Methods', () => {

  it('StreetRat should be able to move', () => {
    const streetRat = new StreetRat();
    assert.equal(streetRat.lcation, 'bazaar');
    streetRat.move('Cave of Wonders');
    assert.equal(streetRat.location, 'Cave of Wonders');
  });

  it('Genie can accept a new master', () => {
    const streetRat = new StreetRat();
    const genie = new Genie();
    streetRat.move('Cave of Wonders');
    assert.equal(genie.masters, []);
    genie.acceptMaster(streetRat);
    assert.deepEqual(genie.masters, [streetRat]);
  });

  it('Genie can accept multiple masters ', () => {
    const streetRat1 = new StreetRat();
    const streetRat2 = new StreetRat();
    const genie = new Genie();
    streetRat1.move('Cave of Wonders');
    genie.acceptMaster(streetRat1);
    streetRat2.move('Cave of Wonders');
    genie.acceptMaster(streetRat2);
    assert.deepEqual(genie.masters, [streetRat1, streetRat2]);
  });

  it('Genie should have a current master', () => {
    const streetRat1 = new StreetRat();
    const streetRat2 = new StreetRat();
    const genie = new Genie();
    streetRat1.move('Cave of Wonders');
    genie.acceptMaster(streetRat1);
    streetRat2.move('Cave of Wonders');
    genie.acceptMaster(streetRat2);
    assert.equal(genie.currentMaster, streetRat1);
  });

  //switchmasters test block

  it('Current Master should be able to make wishes', () => {
    const streetRat1 = new StreetRat();
    const genie = new Genie();
    streetRat1.move('Cave of Wonders');
    genie.acceptMaster(streetRat1);
    genie.grantWish(25);
    genie.grantWish(50);
    genie.grantWish(10);
    assert.equal(streetRat1.awesome, 85);
  });

  it('Genie can only grant three wishes per Current Master', () => {
    const streetRat1 = new StreetRat();
    const genie = new Genie();
    streetRat1.move('Cave of Wonders');
    genie.acceptMaster(streetRat1);
    genie.grantWish(25);
    genie.grantWish(50);
    genie.grantWish(10);
    genie.grantWish(9001);
    assert.equal(streetRat1.awesome, 85);
  });


  it('Genie is free', () => {
    const streetRat1 = new StreetRat();
    const streetRat2 = new StreetRat();
    const streetRat3 = new StreetRat();
    const genie = new Genie();
    streetRat1.move('Cave of Wonders');
    streetRat2.move('Cave of Wonders');
    streetRat3.move('Cave of Wonders');
    genie.acceptMaster(streetRat1);
    genie.acceptMaster(streetRat2);
    genie.acceptMaster(streetRat3);
    genie.grantWish(25);
    genie.grantWish(50);
    genie.grantWish(10);
    genie.switchMasters(streetRat2);
    genie.grantWish(25);
    genie.grantWish(50);
    genie.grantWish(10);
    genie.switchMasters(streetRat3);
    genie.grantWish(25);
    genie.grantWish(50);
    genie.grantWish(10);
    genie.checkMasters();
    assert.deepEqual(genie.masters, []);
    assert.equal(genie.isFree, true);
  });
//refactoring: remove locations, have accept masters have a parameter of object(s), clean up last function

});