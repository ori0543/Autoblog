export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  engine: string;
  horsepower: number;
  image: string;
  description: string;
  specs: {
    engine: string;
    horsepower: number;
    topSpeed: number;
    fuelConsumption: string;
    acceleration: string;
  };
  pros: string[];
  cons: string[];
  targetAudience: string;
  rating: number;
  isPopular?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}
