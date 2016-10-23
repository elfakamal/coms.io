import removeDiacritics from './diacritics';
import particles from './particles.json';

// see http://mapage.noos.fr/bernard.duxin/
const sanitize = sentence => {
  return removeDiacritics(sentence)
    .replace(/[+-.,!@#$%^&*():;\|<>"'’]/g, ' ')
    .match(/\w+\S+/g)
    .filter(word => {
      const isParticle = particles.indexOf(word.toLowerCase()) >= 0;
      const isTooShort = word.length < 3;

      return !isParticle && !isTooShort;
    });
};

export default sanitize;
