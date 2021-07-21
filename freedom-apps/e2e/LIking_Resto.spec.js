/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item');

  I.amOnPage('/');

  I.seeElement('.resto__title a');
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one resto', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item');

  I.amOnPage('/');

  I.seeElement('.resto__title a');
  I.click(locate('.resto__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto__title a');
  I.click(locate('.resto__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('searching resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item');

  I.amOnPage('/');

  I.seeElement('.resto__title a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.detail__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingResto = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.post-item');
  assert.strictEqual(matchingResto.length, visibleLikedResto);

  matchingResto.forEach(async (name, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.resto__title').at(index + 1));
    assert.strictEqual(name, visibleTitle);
  });
});
