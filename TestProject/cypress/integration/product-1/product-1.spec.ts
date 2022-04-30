// Code that starts on line 1 looks weird to me now

import product1Actions from "cypress/support/product-1/product-1-actions";
import { act } from "cypress/support/shared/shared-utilities";

describe('Product 1', () => {
    it('Test 1', () => {
        expect(true).to.equal(true);
    });

    it('Verify Initial Display', () => {
        act(product1Actions.checkInitialDisplay);
    });

    it('Can click a new list item', () => {
        act(product1Actions.clickFirstMyListItem);
    });
});