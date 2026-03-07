import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.adminUser.create({
    data: {
      email: "admin@grazegrain.com",
      passwordHash: "admin123" // replace password with passwordHash
    }
  });

  console.log("Seed data inserted");

  await prisma.menuItem.createMany({
  data: [

    // 🍕 PIZZAS
    { name: "Margherita Pizza", slug: "margherita-pizza", price: 250, imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca", categoryId: pizza.id },
    { name: "Pepperoni Pizza", slug: "pepperoni-pizza", price: 300, imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e", categoryId: pizza.id },
    { name: "Farmhouse Pizza", slug: "farmhouse-pizza", price: 320, imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e", categoryId: pizza.id },
    { name: "Veggie Supreme", slug: "veggie-supreme", price: 310, imageUrl: "https://images.unsplash.com/photo-1601924582975-7e9c1d3f9f3e", categoryId: pizza.id },
    { name: "Cheese Burst Pizza", slug: "cheese-burst", price: 330, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591", categoryId: pizza.id },
    { name: "BBQ Chicken Pizza", slug: "bbq-chicken-pizza", price: 350, imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", categoryId: pizza.id },
    { name: "Paneer Tikka Pizza", slug: "paneer-tikka-pizza", price: 320, imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4be65", categoryId: pizza.id },
    { name: "Mexican Green Wave", slug: "mexican-green-wave", price: 340, imageUrl: "https://images.unsplash.com/photo-1548365328-9f547fb0953d", categoryId: pizza.id },

    // 🍔 BURGERS
    { name: "Classic Beef Burger", slug: "classic-beef-burger", price: 220, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", categoryId: burger.id },
    { name: "Cheese Burger", slug: "cheese-burger", price: 230, imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349", categoryId: burger.id },
    { name: "Chicken Burger", slug: "chicken-burger", price: 210, imageUrl: "https://images.unsplash.com/photo-1550317138-10000687a72b", categoryId: burger.id },
    { name: "Paneer Burger", slug: "paneer-burger", price: 200, imageUrl: "https://images.unsplash.com/photo-1606755962773-d324e2c5e05d", categoryId: burger.id },
    { name: "Double Patty Burger", slug: "double-patty-burger", price: 260, imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add", categoryId: burger.id },
    { name: "Spicy Chicken Burger", slug: "spicy-chicken-burger", price: 240, imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5", categoryId: burger.id },
    { name: "Veg Supreme Burger", slug: "veg-supreme-burger", price: 190, imageUrl: "https://images.unsplash.com/photo-1520072959219-c595dc870360", categoryId: burger.id },

    // 🥤 DRINKS
    { name: "Coca Cola", slug: "coca-cola", price: 80, imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97", categoryId: drinks.id },
    { name: "Pepsi", slug: "pepsi", price: 80, imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505", categoryId: drinks.id },
    { name: "Orange Juice", slug: "orange-juice", price: 120, imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd5bba1d", categoryId: drinks.id },
    { name: "Lemonade", slug: "lemonade", price: 100, imageUrl: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e", categoryId: drinks.id },
    { name: "Mango Shake", slug: "mango-shake", price: 140, imageUrl: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4", categoryId: drinks.id },
    { name: "Strawberry Shake", slug: "strawberry-shake", price: 140, imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a90cdd44", categoryId: drinks.id },
    { name: "Cold Coffee", slug: "cold-coffee", price: 150, imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5", categoryId: drinks.id },
    { name: "Iced Tea", slug: "iced-tea", price: 120, imageUrl: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d", categoryId: drinks.id },

    // 🍰 DESSERTS
    { name: "Chocolate Cake", slug: "chocolate-cake", price: 180, imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587", categoryId: desserts.id },
    { name: "Cheesecake", slug: "cheesecake", price: 200, imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187", categoryId: desserts.id },
    { name: "Brownie", slug: "brownie", price: 150, imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c", categoryId: desserts.id },
    { name: "Ice Cream Sundae", slug: "ice-cream-sundae", price: 160, imageUrl: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae", categoryId: desserts.id },
    { name: "Donut", slug: "donut", price: 90, imageUrl: "https://images.unsplash.com/photo-1505253716362-afaea6fcf8f3", categoryId: desserts.id },
    { name: "Cupcake", slug: "cupcake", price: 100, imageUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c", categoryId: desserts.id },
    { name: "Tiramisu", slug: "tiramisu", price: 220, imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9", categoryId: desserts.id }

  ]
});
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });