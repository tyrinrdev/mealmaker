const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    
  },
  get mains() {
    
  },
  get desserts() {
    
  },
  set appetizers(appetizers) {
    
  },
  set mains(mains) {
    
  },
  set desserts(desserts) {
    
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      dessserts: this.desserts,
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]; 
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${mains.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 4.50);
menu.addDishToCourse('appetizers', 'fries', 5.00);

menu.addDishToCourse('mains', 'steak', 10.25);
menu.addDishToCourse('mains', 'salmon', 7.75);
menu.addDishToCourse('mains', 'tofu', 11.20);

menu.addDishToCourse('desserts', 'ice cream', 3.00);
menu.addDishToCourse('desserts', 'coffee', 3.00);
menu.addDishToCourse('desserts', 'cake', 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);
