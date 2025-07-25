
type ProductTuple = [name: string, category: string, price: number, isAvailable: boolean, sales: number];


let products: ProductTuple[] = [
    ["Smartfon", "Elektronika", 3000, true, 11],
    ["Laptop", "Elektronika", 6000, false, 15],
    ["T-shirt", "Odzież", 50, true, 13],
    ["Bluza", "Odzież", 150, false, 99],
    ["Lodówka", "AGD", 2000, true, 22],
  ];

  function getAvailableProducts(products: ProductTuple[]): ProductTuple[] {
    return products.filter(prod => prod[3])
  }

  console.log(getAvailableProducts(products))

  function getProductsByCategory(products: ProductTuple[], category: string): ProductTuple[] {
    return products.filter(product => product[1] === category)
  }

  console.log(getProductsByCategory(products, "Elektronika"));


  function getAveragePriceByCategory(products: ProductTuple[], category: string): number {
  let productsByCategory = products.filter(([name, categoryName, price, isAvailable, sales]) => categoryName === category);

  if (productsByCategory.length === 0) {
    return 0; 
  }
  const total = productsByCategory.reduce((sum, product) => sum + product[2], 0);
  return total / productsByCategory.length;
  }
  console.log("getAveragePrice", getAveragePriceByCategory(products, "Elektronika"));


  enum SortIndex  {
    Name = 0,
    Price = 2,
    Sales = 4
  };

  function sortProducts(
    products: ProductTuple[],
    category: string,
    sortBy: SortIndex,
    direction: "asc" | "desc"
  ): ProductTuple[] {
    const filtered = products.filter(product => product[1] === category);
    const multiplier = direction === "asc" ? 1 : -1;
  
    return filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
  
      if (typeof aValue === "string" && typeof bValue === "string") {
        if (aValue > bValue) return 1 * multiplier;
        if (aValue < bValue) return -1 * multiplier;
        return 0;
      }
  
      if (typeof aValue === "number" && typeof bValue === "number") {
        return (aValue - bValue) * multiplier;
      }
  
      return 0;
    });
  }
  

  console.log("SORTpRODUCT", sortProducts(products, "Elektronika", SortIndex.Name, "asc"));
