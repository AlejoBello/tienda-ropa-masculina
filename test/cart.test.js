import { expect } from 'chai';

function cart() {
    return {
        items: [],
        addItem(product) {
            this.items.push(product);
        },
        getItems() {
            return this.items;
        }
    };
}

describe('Cart', function() {
    it('should add items to the cart', function() {
        const myCart = cart();
        const product = { id: 1, name: 'Product 1', price: 100 };

        myCart.addItem(product);
        const items = myCart.getItems();

        expect(items).to.be.an('array');
        expect(items).to.have.lengthOf(1);
        expect(items[0]).to.deep.equal(product);
    });
});

it('should remove items from the cart', function() {
    const myCart = cart();
    const product = { id: 1, name: 'Product 1', price: 100 };

    myCart.addItem(product);
    myCart.removeItem = function(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    };

    myCart.removeItem(1);
    const items = myCart.getItems();

    expect(items).to.be.an('array');
    expect(items).to.have.lengthOf(0);
});
