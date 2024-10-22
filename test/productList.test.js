import { expect } from 'chai';

function productList() {
    return [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 }
    ];
}

describe('Product List', function() {
    it('should return an array of products', function() {
        const products = productList();

        expect(products).to.be.an('array');
        expect(products).to.have.lengthOf(3);
        expect(products[0]).to.have.property('id', 1);
        expect(products[0]).to.have.property('name', 'Product 1');
        expect(products[0]).to.have.property('price', 100);
    });
});
