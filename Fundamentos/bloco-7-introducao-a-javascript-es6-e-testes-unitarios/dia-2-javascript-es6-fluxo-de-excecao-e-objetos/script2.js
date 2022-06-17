const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let retorno = `Óla ${order.order.delivery.deliveryPerson}, entrega para:${order.name}, Telefone:${order.phoneNumber}, ${order.address.street} N°:${order.address.number} Ap:${order.address.apartment}`;
    console.log(retorno);
  } 
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order['name'] = 'Luiz Silva';
    order['payment'] = 50;
    const pizzas = Object.keys(order.order.pizza).join(', ');
    let change = `Óla ${order.name}, o total do seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é R$ ${order.payment},00.`
    console.log(change);
  }
  orderModifier(order);