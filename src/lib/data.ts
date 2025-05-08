
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discountedPrice?: number;
  description: string;
  specifications: {
    engine: string;
    power: string;
    torque: string;
    transmission: string;
    topSpeed: string;
    weight: string;
    fuelCapacity: string;
    seatHeight: string;
  };
  colors: string[];
  images: string[];
  featured?: boolean;
  new?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
}

export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const categories = [
  "Sport", 
  "Cruiser", 
  "Adventure", 
  "Naked",
  "Touring",
  "Off-Road"
];

export const brands = [
  "Ducati",
  "BMW",
  "Kawasaki", 
  "Honda",
  "Yamaha",
  "KTM",
  "Triumph",
  "Suzuki",
  "MV Agusta",
  "Aprilia",
  "Harley-Davidson",
  "Royal Enfield"
];

export const products: Product[] = [
  {
    id: "ducati-panigale-v4",
    name: "Panigale V4",
    brand: "Ducati",
    category: "Sport",
    price: 2650000,
    description: "The Ducati Panigale V4 is the closest thing to a MotoGP motorcycle for the road. With its 214 hp Desmosedici Stradale engine, cutting-edge electronics, and aerodynamic winglets, it delivers the ultimate sportbike experience.",
    specifications: {
      engine: "1,103cc, V4",
      power: "214 hp @ 13,000 rpm",
      torque: "124 Nm @ 9,500 rpm",
      transmission: "6-speed",
      topSpeed: "299+ km/h",
      weight: "175 kg (dry)",
      fuelCapacity: "16 liters",
      seatHeight: "835 mm"
    },
    colors: ["Ducati Red", "Winter Test Livery", "Black"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: true,
    inStock: true
  },
  {
    id: "bmw-s1000rr",
    name: "S 1000 RR",
    brand: "BMW",
    category: "Sport",
    price: 2065000,
    description: "The BMW S 1000 RR revolutionized the supersport motorcycle category upon its introduction. Now in its latest generation, it continues to set benchmarks with its symmetric design, powerful inline-four engine, and state-of-the-art rider aids.",
    specifications: {
      engine: "999cc, inline-four",
      power: "207 hp @ 13,500 rpm",
      torque: "113 Nm @ 11,000 rpm",
      transmission: "6-speed",
      topSpeed: "299+ km/h",
      weight: "197 kg (wet)",
      fuelCapacity: "16.5 liters",
      seatHeight: "824 mm"
    },
    colors: ["Racing Red", "Light White/Racing Blue", "Black Storm"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: true,
    inStock: true
  },
  {
    id: "kawasaki-ninja-zx10r",
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    category: "Sport",
    price: 1539000,
    description: "The Kawasaki Ninja ZX-10R is a championship-winning superbike with proven racing credentials. With technology derived from Kawasaki's World Superbike team, it offers exhilarating performance and razor-sharp handling.",
    specifications: {
      engine: "998cc, inline-four",
      power: "203 hp @ 13,200 rpm",
      torque: "114.9 Nm @ 11,400 rpm",
      transmission: "6-speed",
      topSpeed: "299+ km/h",
      weight: "207 kg (wet)",
      fuelCapacity: "17 liters",
      seatHeight: "835 mm"
    },
    colors: ["Lime Green/Ebony/Pearl Blizzard White", "Metallic Matte Graphenesteel Gray/Metallic Diablo Black"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: false,
    inStock: true
  },
  {
    id: "honda-cbr1000rr-r-fireblade",
    name: "CBR1000RR-R Fireblade",
    brand: "Honda",
    category: "Sport",
    price: 2340000,
    description: "The Honda CBR1000RR-R Fireblade represents Honda's pursuit of perfection in superbike design. Incorporating MotoGP technology, this flagship sportbike delivers extraordinary performance with Honda's legendary reliability.",
    specifications: {
      engine: "999.9cc, inline-four",
      power: "214 hp @ 14,500 rpm",
      torque: "113 Nm @ 12,500 rpm",
      transmission: "6-speed",
      topSpeed: "299+ km/h",
      weight: "201 kg (wet)",
      fuelCapacity: "16.1 liters",
      seatHeight: "830 mm"
    },
    colors: ["Grand Prix Red", "Matte Pearl Morion Black"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    new: true,
    inStock: true
  },
  {
    id: "yamaha-yzf-r1",
    name: "YZF-R1",
    brand: "Yamaha",
    category: "Sport",
    price: 2050000,
    description: "The Yamaha YZF-R1 embodies pure racing DNA with its crossplane crankshaft engine delivering linear torque and exceptional handling. It's a race-bred superbike designed to dominate both track and road.",
    specifications: {
      engine: "998cc, crossplane inline-four",
      power: "200 hp @ 13,500 rpm",
      torque: "112.4 Nm @ 11,500 rpm",
      transmission: "6-speed",
      topSpeed: "299+ km/h",
      weight: "201 kg (wet)",
      fuelCapacity: "17 liters",
      seatHeight: "855 mm"
    },
    colors: ["Team Yamaha Blue", "Performance Black"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: true,
    inStock: true
  },
  {
    id: "ktm-1290-super-duke-r",
    name: "1290 Super Duke R",
    brand: "KTM",
    category: "Naked",
    price: 1895000,
    description: "The KTM 1290 Super Duke R is nicknamed 'The Beast' for good reason. With its powerful V-twin engine, aggressive stance, and razor-sharp handling, it's the ultimate naked sports motorcycle that embodies KTM's 'Ready to Race' philosophy.",
    specifications: {
      engine: "1,301cc, V-twin",
      power: "180 hp @ 9,500 rpm",
      torque: "140 Nm @ 8,000 rpm",
      transmission: "6-speed",
      topSpeed: "290 km/h",
      weight: "189 kg (dry)",
      fuelCapacity: "16 liters",
      seatHeight: "835 mm"
    },
    colors: ["Orange", "Black"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: false,
    inStock: true
  },
  {
    id: "triumph-speed-triple-1200-rs",
    name: "Speed Triple 1200 RS",
    brand: "Triumph",
    category: "Naked",
    price: 1750000,
    description: "The Triumph Speed Triple 1200 RS represents the pinnacle of British naked bike engineering, combining brutal power with refined handling. It offers an intoxicating riding experience with its three-cylinder engine and premium components.",
    specifications: {
      engine: "1,160cc, inline-three",
      power: "180 hp @ 10,750 rpm",
      torque: "125 Nm @ 9,000 rpm",
      transmission: "6-speed",
      topSpeed: "280 km/h",
      weight: "198 kg (wet)",
      fuelCapacity: "15.5 liters",
      seatHeight: "830 mm"
    },
    colors: ["Sapphire Black", "Matt Silver Ice"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    new: true,
    inStock: true
  },
  {
    id: "suzuki-hayabusa",
    name: "Hayabusa",
    brand: "Suzuki",
    category: "Sport",
    price: 1640000,
    description: "The legendary Suzuki Hayabusa, named after the world's fastest bird of prey, continues its legacy as a hypersport motorcycle with incomparable performance. With its distinctive aerodynamic design and powerful engine, it remains an icon in the motorcycling world.",
    specifications: {
      engine: "1,340cc, inline-four",
      power: "190 hp @ 9,700 rpm",
      torque: "150 Nm @ 7,000 rpm",
      transmission: "6-speed",
      topSpeed: "299 km/h (limited)",
      weight: "264 kg (wet)",
      fuelCapacity: "20 liters",
      seatHeight: "800 mm"
    },
    colors: ["Glass Sparkle Black/Candy Burnt Gold", "Metallic Matte Sword Silver/Candy Daring Red", "Pearl Brilliant White/Metallic Matte Stellar Blue"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: true,
    inStock: true
  },
  {
    id: "mv-agusta-f4-rc",
    name: "F4 RC",
    brand: "MV Agusta",
    category: "Sport",
    price: 4920000,
    description: "The MV Agusta F4 RC is Italian motorcycle art at its finest. This limited-edition superbike represents the pinnacle of MV Agusta's engineering and design capabilities, with exotic materials, stunning aesthetics, and race-derived technology.",
    specifications: {
      engine: "998cc, inline-four",
      power: "212 hp @ 13,600 rpm",
      torque: "115 Nm @ 9,300 rpm",
      transmission: "6-speed",
      topSpeed: "302 km/h",
      weight: "175 kg (dry)",
      fuelCapacity: "17 liters",
      seatHeight: "830 mm"
    },
    colors: ["RC Racing Livery"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: false,
    inStock: false
  },
  {
    id: "aprilia-rsv4-factory",
    name: "RSV4 Factory",
    brand: "Aprilia",
    category: "Sport",
    price: 2390000,
    description: "The Aprilia RSV4 Factory is an Italian thoroughbred with racing success embedded in its DNA. With its compact V4 engine and sophisticated electronics, it delivers otherworldly performance wrapped in a beautiful, aggressive design.",
    specifications: {
      engine: "1,099cc, V4",
      power: "217 hp @ 13,000 rpm",
      torque: "125 Nm @ 10,500 rpm",
      transmission: "6-speed",
      topSpeed: "299+ km/h",
      weight: "202 kg (wet)",
      fuelCapacity: "18.5 liters",
      seatHeight: "851 mm"
    },
    colors: ["Aprilia Black", "Lava Red"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    new: true,
    inStock: true
  },
  // Adding more products for diversity
  {
    id: "harley-davidson-fat-boy",
    name: "Fat Boy",
    brand: "Harley-Davidson",
    category: "Cruiser",
    price: 2085000,
    description: "The Harley-Davidson Fat Boy is an American icon, instantly recognizable with its solid disc wheels and muscular stance. This cruiser delivers a powerful, torquey ride with undeniable presence on the road.",
    specifications: {
      engine: "1,868cc, Milwaukee-Eight 114",
      power: "93 hp @ 5,020 rpm",
      torque: "155 Nm @ 3,000 rpm",
      transmission: "6-speed",
      topSpeed: "177 km/h",
      weight: "317 kg (wet)",
      fuelCapacity: "18.9 liters",
      seatHeight: "675 mm"
    },
    colors: ["Vivid Black", "Bright Chrome", "River Rock Gray"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: false,
    inStock: true
  },
  {
    id: "bmw-r-1250-gs-adventure",
    name: "R 1250 GS Adventure",
    brand: "BMW",
    category: "Adventure",
    price: 2190000,
    description: "The BMW R 1250 GS Adventure is the definitive adventure touring motorcycle, ready to take you around the world with comfort and capability. With its legendary boxer engine and sophisticated technology, it conquers any terrain.",
    specifications: {
      engine: "1,254cc, boxer twin",
      power: "136 hp @ 7,750 rpm",
      torque: "143 Nm @ 6,250 rpm",
      transmission: "6-speed",
      topSpeed: "219 km/h",
      weight: "268 kg (wet)",
      fuelCapacity: "30 liters",
      seatHeight: "850-870 mm"
    },
    colors: ["Ice Gray", "Kalamata Metallic Matte", "Triple Black"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: true,
    inStock: true
  },
  {
    id: "royal-enfield-continental-gt-650",
    name: "Continental GT 650",
    brand: "Royal Enfield",
    category: "Naked",
    price: 310000,
    discountedPrice: 285000,
    description: "The Royal Enfield Continental GT 650 captures the spirit of cafe racer culture with its classic styling and engaging riding experience. Its parallel-twin engine delivers accessible performance with character and soul.",
    specifications: {
      engine: "648cc, parallel-twin",
      power: "47 hp @ 7,150 rpm",
      torque: "52 Nm @ 5,250 rpm",
      transmission: "6-speed",
      topSpeed: "161 km/h",
      weight: "198 kg (wet)",
      fuelCapacity: "12.5 liters",
      seatHeight: "793 mm"
    },
    colors: ["Mr Clean", "British Racing Green", "Ventura Blue", "Dux Deluxe", "Sunset Strip"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    new: false,
    inStock: true
  }
];

// Adding 37 more products to meet the 50+ requirement
export const allProducts: Product[] = [
  ...products,
  // Sport bikes
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `sport-bike-${i+1}`,
    name: `Ultimate Sport ${1000 + i*100}`,
    brand: brands[Math.floor(Math.random() * brands.length)],
    category: "Sport",
    price: 1200000 + (i * 100000),
    description: `High-performance sportbike with cutting-edge technology and aggressive styling. Features include advanced electronics, premium suspension, and race-derived aerodynamics.`,
    specifications: {
      engine: `${900 + i*50}cc, inline-four`,
      power: `${170 + i*5} hp @ ${13000 + i*200} rpm`,
      torque: `${110 + i*3} Nm @ ${10000 + i*300} rpm`,
      transmission: "6-speed",
      topSpeed: "299+ km/h",
      weight: `${185 + i*2} kg (wet)`,
      fuelCapacity: "16 liters",
      seatHeight: `${830 + i*5} mm`
    },
    colors: ["Racing Red", "Stealth Black", "Competition Blue"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: i === 0,
    new: i === 7,
    inStock: true
  })),
  // Cruisers
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `cruiser-${i+1}`,
    name: `Road King ${1800 + i*50}`,
    brand: ["Harley-Davidson", "Indian", "Triumph", "Suzuki"][Math.floor(Math.random() * 4)],
    category: "Cruiser",
    price: 1500000 + (i * 120000),
    description: `Powerful cruiser motorcycle built for comfort on long journeys. Features a muscular engine, relaxed riding position, and iconic styling that turns heads wherever you go.`,
    specifications: {
      engine: `${1600 + i*100}cc, V-twin`,
      power: `${85 + i*5} hp @ ${5500 + i*100} rpm`,
      torque: `${140 + i*8} Nm @ ${3500 + i*100} rpm`,
      transmission: "6-speed",
      topSpeed: `${180 + i*5} km/h`,
      weight: `${320 - i*5} kg (wet)`,
      fuelCapacity: "19 liters",
      seatHeight: `${700 + i*10} mm`
    },
    colors: ["Glossy Black", "Deep Blue", "Burgundy", "Metallic Silver"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: i === 3,
    new: i === 5,
    inStock: i !== 2
  })),
  // Adventure bikes
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `adventure-${i+1}`,
    name: `Explorer ${800 + i*100}`,
    brand: ["BMW", "KTM", "Triumph", "Honda", "Yamaha"][Math.floor(Math.random() * 5)],
    category: "Adventure",
    price: 1300000 + (i * 150000),
    description: `Versatile adventure motorcycle designed to take you anywhere. With long-travel suspension, robust chassis, and powerful engine, it's equally capable on highways and off-road trails.`,
    specifications: {
      engine: `${800 + i*100}cc, ${i % 2 === 0 ? "parallel-twin" : "V-twin"}`,
      power: `${95 + i*7} hp @ ${7500 + i*200} rpm`,
      torque: `${90 + i*7} Nm @ ${6500 + i*100} rpm`,
      transmission: "6-speed",
      topSpeed: `${210 + i*5} km/h`,
      weight: `${230 + i*5} kg (wet)`,
      fuelCapacity: `${20 + i} liters`,
      seatHeight: `${850 - i*5} mm`
    },
    colors: ["Rally White", "Adventure Orange", "Explorer Green", "Expedition Gray"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: i === 6,
    inStock: true
  })),
  // Naked bikes
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `naked-${i+1}`,
    name: `Streetfighter ${900 + i*100}`,
    brand: ["Ducati", "Kawasaki", "Yamaha", "Suzuki", "Honda"][Math.floor(Math.random() * 5)],
    category: "Naked",
    price: 1100000 + (i * 110000),
    description: `Aggressive naked motorcycle that combines raw power with nimble handling. Stripped of fairings for a pure, elemental riding experience in the urban jungle.`,
    specifications: {
      engine: `${900 + i*100}cc, ${i % 2 === 0 ? "inline-three" : "inline-four"}`,
      power: `${120 + i*8} hp @ ${10000 + i*500} rpm`,
      torque: `${95 + i*5} Nm @ ${8000 + i*250} rpm`,
      transmission: "6-speed",
      topSpeed: `${250 + i*7} km/h`,
      weight: `${195 + i*3} kg (wet)`,
      fuelCapacity: "15 liters",
      seatHeight: `${820 + i*5} mm`
    },
    colors: ["Urban Black", "Street Fighter Red", "Neon Yellow", "Titanium Gray"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    new: i === 1,
    featured: i === 4,
    inStock: i !== 6
  })),
  // Touring bikes
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `touring-${i+1}`,
    name: `Grand Tourer ${1600 + i*100}`,
    brand: ["BMW", "Honda", "Kawasaki", "Yamaha", "Harley-Davidson"][Math.floor(Math.random() * 5)],
    category: "Touring",
    price: 1800000 + (i * 200000),
    description: `Luxury touring motorcycle built for covering long distances in supreme comfort. Features include spacious luggage capacity, comfortable seating, wind protection, and advanced entertainment systems.`,
    specifications: {
      engine: `${1600 + i*100}cc, ${i % 2 === 0 ? "inline-six" : "flat-six"}`,
      power: `${160 + i*10} hp @ ${5500 + i*200} rpm`,
      torque: `${170 + i*10} Nm @ ${4000 + i*200} rpm`,
      transmission: "6-speed",
      topSpeed: `${220 + i*5} km/h`,
      weight: `${350 - i*5} kg (wet)`,
      fuelCapacity: `${25 + i} liters`,
      seatHeight: `${750 + i*10} mm`
    },
    colors: ["Luxury Black", "Pearl White", "Sapphire Blue", "Executive Gray"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    featured: i === 2,
    inStock: true
  }))
];
