import chai from 'chai';
import wordsToNumbers from '../src/index';
import { Languages } from '../src/types';

describe('Convert words to numbers', () => {
  it('trente-trois', () => {
    const words = 'trente-trois';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(33);
  });
  it('quarante-quatre', () => {
    const words = 'quarante-quatre';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(44);
  });
  it('deux millions six cent vingt-deux mille trois cent quatre-vingt-huit', () => {
    const words =
      'deux millions six cent vingt-deux mille trois cent quatre-vingt-huit';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(2622388);
  });
  it('vingt-deux mille', () => {
    const words = 'vingt-deux mille';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(22000);
  });

  it('cinq virgule soixante-sept', () => {
    const words = 'cinq virgule soixante-sept';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(5.67);
  });

  it('neuf millions sept cent soixante-trois mille quatre cent quarante-quatre', () => {
    const words =
      'neuf millions sept cent soixante-trois mille quatre cent quarante-quatre';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(9763444);
  });
  it('cinq virgule vingt et un', () => {
    const words = 'cinq virgule vingt et un';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(5.21);
  });
  it('cinq virgule cinq cent vingt et un', () => {
    const words = 'cinq virgule cinq cent vingt et un';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(5.521);
  });

  it('cinq millions quatre cent mille trois cent vingt et un', () => {
    const words =
      'cinq millions quatre cent mille trois cent vingt et un';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(5400321);
  });

  it('cinq millions quatre cent mille trois cent vingt et un avec du texte normal qui devrait créer l\'autre région comme ça cinq cent deux', () => {
    const words =
      'cinq millions quatre cent mille trois cent vingt et un avec du texte normal qui devrait créer l\'autre région comme ça cinq cent deux';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai
      .expect(result)
      .to.equal(
        '5400321 avec du texte normal qui devrait créer l\'autre région comme ça 502'
      );
  });

  it('cent', () => {
    const words = 'cent';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(100);
  });

  it('cinq cent cinquante', () => {
    const words = 'cinq cent cinquante';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(550);
  });

  it('cinq cents', () => {
    const words = 'cinq cents';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(500);
  });

  it('vingt-cinq', () => {
    const words = 'vingt-cinq';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(25);
  });

  it('mille neuf cent quatre-vingt-dix-huit', () => {
    const words = 'mille neuf cent quatre-vingt-dix-huit';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(1998);
  });

  it('Le vingt-deux mai', () => {
    const words = 'Le vingt-deux mai';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('Le 22 mai');
  });

  it('mille neuf cent soixante-neuf', () => {
    const words = 'mille neuf cent soixante-neuf';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(1969);
  });
  it('Le cinq mai mille neuf cent quatre-vingt-dix-neuf', () => {
    const words = 'Le cinq mai mille neuf cent quatre-vingt-dix-neuf';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('Le 5 mai 1999');
  });

  it('deux cent mille', () => {
    const words = 'deux cent mille';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(200000);
  });

  // Failing tests from words-to-numbers

  it('un trente mille', () => {
    const words = 'un trente mille';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('1 30000');
  });

  it('dix-neuf quatre-vingt mille', () => {
    const words = 'dix-neuf quatre-vingt mille';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('19 80000');
  });

  it('cent deux mille', () => {
    const words = 'cent deux mille';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(102000);
  });

  // French specific tests

  it('soixante-dix', () => {
    const words = 'soixante-dix';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(70);
  });

  it('soixante et onze', () => {
    const words = 'soixante et onze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(71);
  });

  it('soixante-douze', () => {
    const words = 'soixante-douze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(72);
  });

  it('soixante-treize', () => {
    const words = 'soixante-treize';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(73);
  });

  it('soixante-quatorze', () => {
    const words = 'soixante-quatorze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(74);
  });

  it('soixante-quinze', () => {
    const words = 'soixante-quinze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(75);
  });

  it('soixante-seize', () => {
    const words = 'soixante-seize';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(76);
  });

  it('soixante-dix-sept', () => {
    const words = 'soixante-dix-sept';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(77);
  });

  it('soixante-dix-huit', () => {
    const words = 'soixante-dix-huit';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(78);
  });

  it('soixante-dix-neuf', () => {
    const words = 'soixante-dix-neuf';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(79);
  });

  it('quatre-vingt', () => {
    const words = 'quatre-vingt';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(80);
  });

  it('quatre-vingt-un', () => {
    const words = 'quatre-vingt-un';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(81);
  });

  it('quatre-vingt-deux', () => {
    const words = 'quatre-vingt-deux';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(82);
  });

  it('quatre-vingt-trois', () => {
    const words = 'quatre-vingt-trois';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(83);
  });

  it('quatre-vingt-quatre', () => {
    const words = 'quatre-vingt-quatre';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(84);
  });

  it('quatre-vingt-cinq', () => {
    const words = 'quatre-vingt-cinq';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(85);
  });

  it('quatre-vingt-six', () => {
    const words = 'quatre-vingt-six';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(86);
  });

  it('quatre-vingt-sept', () => {
    const words = 'quatre-vingt-sept';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(87);
  });

  it('quatre-vingt-huit', () => {
    const words = 'quatre-vingt-huit';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(88);
  });

  it('quatre-vingt-neuf', () => {
    const words = 'quatre-vingt-neuf';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(89);
  });

  it('quatre-vingt-dix', () => {
    const words = 'quatre-vingt-dix';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(90);
  });

  it('quatre-vingt-onze', () => {
    const words = 'quatre-vingt-onze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(91);
  });

  it('quatre-vingt-douze', () => {
    const words = 'quatre-vingt-douze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(92);
  });

  it('quatre-vingt-treize', () => {
    const words = 'quatre-vingt-treize';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(93);
  });

  it('quatre-vingt-quatorze', () => {
    const words = 'quatre-vingt-quatorze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(94);
  });

  it('quatre-vingt-quinze', () => {
    const words = 'quatre-vingt-quinze';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(95);
  });

  it('quatre-vingt-seize', () => {
    const words = 'quatre-vingt-seize';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(96);
  });

  it('quatre-vingt-dix-sept', () => {
    const words = 'quatre-vingt-dix-sept';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(97);
  });

  it('quatre-vingt-dix-huit', () => {
    const words = 'quatre-vingt-dix-huit';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(98);
  });

  it('quatre-vingt-dix-neuf', () => {
    const words = 'quatre-vingt-dix-neuf';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(99);
  });

  it('cent', () => {
    const words = 'cent';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(100);
  });

  it('mille', () => {
    const words = 'mille';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(1000);
  });

  it('un million un', () => {
    const words = 'un million un';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(1000001);
  });

  // More decimal tests

  it('zéro virgule deux cent cinquante-six', () => {
    const words = 'zéro virgule deux cent cinquante-six';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(0.256);
  });

  it('zero virgule mille quatre cent quatre-vingt-sept', () => {
    const words = 'zéro virgule mille quatre cent quatre-vingt-sept';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(0.1487);
  });

  it('quatre-vingt-sept mille cinq cent quarante et un virgule un milliard huit cent quarante-neuf millions quatre cent soixante-quatre mille six cent cinquante-quatre', () => {
    const words = 'quatre-vingt-sept mille cinq cent quarante et un virgule un milliard huit cent quarante-neuf millions quatre cent soixante-quatre mille six cent cinquante-quatre';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal(87541.1849464654);
  });

  // More tests with unit and items in text

  it('deux virgule cinq kilo de carottes', () => {
    const words = 'deux virgule cinq kilo de carottes';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('2.5 kilo de carottes');
  });

  it('cinq cents grammes de chocolat', () => {
    const words = 'cinq cents grammes de chocolat';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('500 grammes de chocolat');
  });

  it('un sachet de levure chimique', () => {
    const words = 'un sachet de levure chimique';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('1 sachet de levure chimique');
  });

  it('trois paquets de chocolats', () => {
    const words = 'trois paquets de chocolats';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('3 paquets de chocolats');
  });

  it('mille trois cent quatre-vingt-deux virgule un litres de lait', () => {
    const words = 'mille trois cent quatre-vingt-deux virgule un litres de lait';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('1382.1 litres de lait');
  });

  it('trente grammes de farine', () => {
    const words = 'trente grammes de farine';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('30 grammes de farine');
  });

  // Other tests without any number
  it('carottes', () => {
    const words = 'carottes';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('carottes');
  });

  // Other tests without any number
  it('sirop de fraise', () => {
    const words = 'sirop de fraise';
    const result = wordsToNumbers(words, { language: Languages['fr-fr'] });
    chai.expect(result).to.equal('sirop de fraise');
  });

  // Without proper '-' splitter (tryFix)

  it('soixante dix trucs', () => {
    const words = 'soixante dix trucs';
    const result = wordsToNumbers(
      words,
      { language: Languages['fr-fr'], tryFix: true }
    );
    chai.expect(result).to.equal('70 trucs');
  });

  it('quatre vingt patates', () => {
    const words = 'quatre vingt patates';
    const result = wordsToNumbers(
      words,
      { language: Languages['fr-fr'], tryFix: true }
    );
    chai.expect(result).to.equal('80 patates');
  });

  it('quatre vingt huit patates', () => {
    const words = 'quatre vingt huit patates';
    const result = wordsToNumbers(
      words,
      { language: Languages['fr-fr'], tryFix: true }
    );
    chai.expect(result).to.equal('88 patates');
  });

  it('quatre vingt dix huit patates', () => {
    const words = 'quatre vingt dix huit patates';
    const result = wordsToNumbers(
      words,
      { language: Languages['fr-fr'], tryFix: true }
    );
    chai.expect(result).to.equal('98 patates');
  });

  it('trois cent trente deux bananes', () => {
    const words = 'trois cent trente deux bananes';
    const result = wordsToNumbers(
      words,
      { language: Languages['fr-fr'], tryFix: true }
    );
    chai.expect(result).to.equal('332 bananes');
  });

  it('quatre vingt deux patates trente deux', () => {
    const words = 'quatre vingt deux patates trente deux';
    const result = wordsToNumbers(
      words,
      { language: Languages['fr-fr'], tryFix: true }
    );
    chai.expect(result).to.equal('82 patates 32');
  });

  it('quatre vingt dix sept grammes de farine', () => {
    const words = 'quatre vingt dix sept grammes de farine';
    const result = wordsToNumbers(
      words,
      { language: Languages['fr-fr'], tryFix: true }
    );
    chai.expect(result).to.equal('97 grammes de farine');
  });
});