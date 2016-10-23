import { expect } from 'chai';
import { indexer } from '../../../src/helpers';
import step from '../../fixtures/step.json';

describe('helper :: normal step', () => {
  it('should build a single step index', () => {
    const expectedWords = {
      'very': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'very', score: 6, props: ['title', 'description'] }, },
      'good': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'good', score: 6, props: ['title', 'description'] }, },
      'trip': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'trip', score: 6, props: ['title', 'description'] }, },
      'producteur': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'producteur', score: 2, props: ['body'] }, },
      'michka': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'michka', score: 2, props: ['body'] }, },
      'assayas': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'assayas', score: 2, props: ['body'] }, },
      '23557': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: '23557', score: 2, props: ['businessReference'] }, },
      'neil': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'neil', score: 1, props: ['title'] }, },
      'young': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'young', score: 1, props: ['title'] }, },
      'vieil': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'vieil', score: 1, props: ['title'] }, },
      'homme': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'homme', score: 1, props: ['title'] }, },
      'colere': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'colere', score: 1, props: ['title'] }, },
    };

    const words = indexer([step]);
    expect(words).to.deep.equal(expectedWords);
  });
});
