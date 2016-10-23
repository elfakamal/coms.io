import { expect } from 'chai';
import { indexer } from '../../../src/helpers';
import step from '../../fixtures/special-step.json';

describe('helper :: special-step', () => {
  it('should build a special step index', () => {
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
      'producteur': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'producteur', score: 2, props: ['body'] } },
      'eric': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'eric', score: 2, props: ['body'] } },
      'delvaux': { 'b28f6ea6-ad40-493a-ac78-04b23d05a0ab': { word: 'delvaux', score: 2, props: ['body'] } },
    };

    const words = indexer([step]);
    expect(words).to.deep.equal(expectedWords);
  });
});
