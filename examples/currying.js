const checkout = (
    order,
    person,
    payment
) => {
    console.log(
        `Checkout: ${order} for ${person} with ${payment}`
    );
}

//... do stuff 

const order = 'Pizza';

//... do some more stuff

const person = 'John';

//... do some more stuff

const payment = 'Cash';

checkout(order, person, payment);
//----

const checkoutCurried = (order) => (person) => (payment) => {
    console.log(
        `Checkout Curried: ${order} for ${person} with ${payment}`
    );
}

//... do stuff

const checkoutPizza = checkoutCurried('Pizza');

//... do some more stuff

const checkoutJohn = checkoutPizza('John');

//... do some more stuff

checkoutJohn('Cash');
