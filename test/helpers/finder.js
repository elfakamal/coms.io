import { expect } from 'chai';
import { indexer, createFinder } from '../../src/helpers';

import steps from '../fixtures/two-steps.json';

describe('helper :: finder', () => {
  let finder;

  before(() => {
    finder = createFinder(indexer(steps));
  });

  it('should find nothing', () => {
    expect(finder('toto')).to.be.empty;
  });

  it('should find a step using the word \'juin\'', () => {
    const result = finder('juin');
    expect(result).to.not.be.empty;
    expect(result).to.have.property('juin');
    expect(result.juin).to.have.property('b28f6ea6-ad40-493a-ac78-04b23d05a0ab');
  });

  it('should find 2 steps using the word \'producteur\'', () => {
    const result = finder('producteur');

    expect(result).to.not.be.empty;
    expect(result).to.have.property('producteur');
    expect(result.producteur).to.have
      .property('b28f6ea6-ad40-493a-ac78-04b23d05a0ab');
    expect(result.producteur).to.have
      .property('58b40a87-f9f3-4c3e-bcde-c1f09938f134');
  });
});
