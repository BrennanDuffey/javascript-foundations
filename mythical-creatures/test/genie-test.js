const assert = require('chai').assert;
const Genie = require('../exercises/genie');
const StreetRat = require('../exercises/streetRat');
const Sorcerer = require('../exercises/sorcerer');



describe('Genie default properties', () => {

  it('Should be a function', () => {
    assert.isFunction(Genie);
  });

  it('Should instantiate Genie', () => {
    const genie = new Genie;
    assert.isObject(genie);
  });

  it('Should have a name', () => {
    const genie = new Genie('Robbie');
    assert.equal(genie.name, 'Robbie');
  });

  it('Should start off enslaved', () => {
    const genie = new Genie('Robbie');
    assert.equal(genie.isFree, false);
  });

  it('Should have a color blue', () => {
    const genie = new Genie('Khalid');
    assert.equal(genie.color, 'Blue');
  });
});

describe('StreetRat default properties', () => {

  it('Should be a function', () => {
    assert.isFunction(StreetRat);
  });

  it('Should instantiate StreetRat', () => {
    const streetRat = new StreetRat('Jeff');
    assert.isObject(streetRat);
  });

  it('Should have a name', () => {
    const streetRat = new StreetRat('Jeff');
    assert.equal(streetRat.name, 'Jeff');
  });

  it('Should be a diamond in the rough', () => {
    const streetRat = new StreetRat('Jeff');
    assert.equal(streetRat.isDiamondInTheRough, true);
  });

  it('Should have peasant status', () => {
    const streetRat = new StreetRat('Travis');
    assert.equal(streetRat.status, 'peasant')
  })
});

describe('Sorcerer default properties', () => {

  it('Should be a function', () => {
    assert.isFunction(Sorcerer);
  });

  it('Should instantiate Sorcerer', () => {
    const sorcerer = new Sorcerer('Louisa');
    assert.equal(sorcerer);
  });

  it('Should have a name', () => {
    const sorcerer = new Sorcerer('Lousia');
    assert.equal(sorcerer.name, 'Louisa');
  });

  it('Should not be a diamond in the rough', () => {
    const sorcerer = new Sorcerer('Louisa');
    assert.equal(sorcerer.isDiamondInTheRough, false)
  });
});

describe('Methods test block', () => {

  it('Genie should be able to grant wishes', () => {
    const genie = new Genie('Pam');
    const streetRat = new StreetRat('Brittany');
    assert.equal(streetRat.status, 'peasant');

    genie.grantWish(streetRat);

    assert.equal(streetRat.status, 'prince');
  });

  it('Sorcerer should be able to threaten', () => {
    const sorcerer = new Sorcerer('Louisa');
    const streetRat = new StreetRat('Brittany');

    sorcerer.threaten(streetRat);
    assert.eqaul(streetRat.isSafe, false);

  });

  it('Second wish should save StreetRat', () => {
    const streetRat = new StreetRat('Jeff');
    const sorcerer = new Sorcerer('Ramiro');
    const genie = new Genie('Leta');

    genie.grantWish(streetRat);
    sorcerer.threaten(streetRat);
    assert.eqaul(streetRat.isSafe, false);
    genie.grantWish(streetRat);
    assert.equal(streetRat.isSafe, true);

  });

  it('Sorcerer should be able to make wish', () => {
    const sorcerer = new Sorcerer('Lauren');
    const genie = new Genie('Brennan');


    genie.grantWish(sorcerer);
    assert.equal(sorcerer.isAllPowerful, true);


  });

  it('', () => {
    const sorcerer = new Sorcerer('Lauren');
    const genie = new Genie('Brennan');


    genie.grantWish(sorcerer);
    assert.equal(sorcerer.isAllPowerful, true);
    genie.grantWish(sorcerer);
    assert.equal(sorcerer.isGenie, true)

  });

  it('', () => {

  });

  it('', () => {

  });


});

//potentially el. genie and extend SR from Soc.


