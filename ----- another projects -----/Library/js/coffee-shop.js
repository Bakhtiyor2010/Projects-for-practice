export function initCoffeShop() {
  const food = [
    {
      name: "Cold Brew Coffee",
      price: "3",
      category: "coffee-tea",
    },
    {
      name: "French Press Pot",
      price: "5",
      category: "coffee-tea",
    },
    {
      name: "Espresso",
      price: "2",
      category: "coffee-tea",
    },
    {
      name: "Cappuccino",
      price: "4",
      category: "coffee-tea",
    },
    {
      name: "Hot tea",
      price: "2",
      category: "coffee-tea",
    },
    {
      name: "Cold tea",
      price: "2",
      category: "coffee-tea",
    },
    {
      name: "Forest Gateau",
      price: "16",
      category: "desserts-cakes",
    },
    {
      name: "Blue Moon",
      price: "16",
      category: "desserts-cakes",
    },
    {
      name: "Truffle Cake",
      price: "15",
      category: "desserts-cakes",
    },
    {
      name: "Chocolate Cake",
      price: "18",
      category: "desserts-cakes",
    },
    {
      name: "Poet’s Dream Cake",
      price: "16",
      category: "desserts-cakes",
    },
    {
      name: "Pineapple Cake",
      price: "14",
      category: "desserts-cakes",
    },
  ];

  class FoodItems {
    constructor(name, price, parentSelector) {
      this.name = name;
      this.price = price;
      this.parentSelector = parentSelector;
    }

    render() {
      const element = document.createElement("div");
      element.classList.add("items");

      element.innerHTML = `
            <h2>${this.name}</h2>
            <div class="sperator"></div>
            <h3>$${this.price}</h3>
        `;

      this.parentSelector.append(element);
    }
  }

  food.forEach((item) => {
    const parent = document.querySelector(`.menu-items.${item.category}`);
    new FoodItems(item.name, item.price, parent).render();
  });
}