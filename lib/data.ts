import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
      role: "admin",
    },
    {
      name: "Joe",
      email: "vendor@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
      role: "vendor",
      bio: "Selling stuff is my passion.",
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
      role: "customer",
    },
  ],
  vendors: [
    {
      storeName: "Joe's Store",
      description: "Selling stuff is my passion.",
    },
  ],
  categories: [
    {
      name: "Fashion and Apparel",
      description:
        "Explore a wide range of clothing, shoes, accessories, and jewelry for men, women, and children.",
    },
    {
      name: "Electronics",
      description:
        "Discover the latest gadgets, including computers, mobile phones, televisions, cameras, and audio equipment.",
    },
    {
      name: "Home and Kitchen",
      description:
        "Find everything you need to decorate and furnish your home, from furniture and appliances to kitchenware and decor.",
    },
    {
      name: "Health and Beauty",
      description:
        "Shop for skincare, haircare, makeup, fragrances, and wellness products to look and feel your best.",
    },
    {
      name: "Sports and Outdoor",
      description:
        "Get active with gym equipment, activewear, sports shoes, outdoor gear, and fitness accessories.",
    },
    {
      name: "Books and Stationery",
      description:
        "Browse a wide selection of books, stationery supplies, office supplies, and art and craft materials.",
    },
    {
      name: "Toys and Games",
      description:
        "Entertain kids and adults alike with toys, board games, video games, puzzles, and educational toys.",
    },
    {
      name: "Automotive",
      description:
        "Find car parts, motorcycle accessories, car care products, tools, and automotive electronics.",
    },
    {
      name: "Food and Groceries",
      description:
        "Stock up on fresh produce, packaged foods, beverages, snacks, and specialty items for your pantry.",
    },
    {
      name: "Pets",
      description:
        "Spoil your furry friends with pet food, supplies, accessories, care products, and toys.",
    },
    {
      name: "Arts and Crafts",
      description:
        "Unleash your creativity with painting supplies, drawing materials, craft kits, and DIY supplies.",
    },
    {
      name: "Travel and Luggage",
      description:
        "Plan your next adventure with luggage, travel accessories, electronics, camping gear, and travel essentials.",
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner1.jpg",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner2.jpg",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 95,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 75,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
}

export default data
