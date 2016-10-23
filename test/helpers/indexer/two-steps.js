import { expect } from 'chai';
import { indexer } from '../../../src/helpers';
import steps from '../../fixtures/two-steps.json';

describe('helper :: stats', () => {
  it('should build a two steps index', () => {
    const expectedWords = {
      '21397': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: '21397', score: 3, props: ['businessReference'] } },
      '5/7': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: '5/7', score: 8, props: ['title', 'description', 'keywords'] } },
      'juin': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'juin', score: 3, props: ['title', 'keywords'] } },
      'duree': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'duree', score: 1, props: ['description'] } },
      'cinq': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'cinq', score: 3, props: ['description', 'title'] } },
      'sept': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'sept', score: 3, props: ['description', 'title'] } },
      'deuil': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'deuil', score: 1, props: ['description'] } },
      'amerique': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'amerique', score: 2, props: ['description'] } },
      'plus': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'plus', score: 1, props: ['description'] } },
      'particulierement': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'particulierement', score: 1, props: ['description'] } },
      'arc': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'arc', score: 1, props: ['description'] } },
      'ciel': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'ciel', score: 1, props: ['description'] } },
      'radio': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'radio', score: 1, props: ['author'] } },
      'france': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'france', score: 1, props: ['author'] } },
      'emission': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'emission', score: 1, props: ['itunesSubtitle'] } },
      '2016': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: '2016', score: 1, props: ['itunesSubtitle'] } },
      'eric': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'eric', score: 2, props: ['body'] } },
      'delvaux': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'delvaux', score: 2, props: ['body'] } },

      'producteur': {
        'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'producteur', score: 2, props: ['body'] },
        '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'producteur', score: 2, props: ['body'] },
      },

      'very': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'very', score: 6, props: ['title', 'description'] }, },
      'good': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'good', score: 6, props: ['title', 'description'] }, },
      'trip': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'trip', score: 6, props: ['title', 'description'] }, },
      'michka': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'michka', score: 2, props: ['body'] }, },
      'assayas': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'assayas', score: 2, props: ['body'] }, },
      '23557': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: '23557', score: 2, props: ['businessReference'] }, },
      'neil': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'neil', score: 1, props: ['title'] }, },
      'young': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'young', score: 1, props: ['title'] }, },
      'vieil': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'vieil', score: 1, props: ['title'] }, },
      'homme': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'homme', score: 1, props: ['title'] }, },
      'colere': { '58b40a87-f9f3-4c3e-bcde-c1f09938f134': { word: 'colere', score: 1, props: ['title'] }, },
    };

    const words = indexer(steps);
    expect(words).to.deep.equal(expectedWords);
  });
});
