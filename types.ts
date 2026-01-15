
export type Language = 'en' | 'ar';

export interface Translation {
  heroTitle: string;
  heroSub: string;
  bookNow: string;
  boutique: string;
  academy: string;
  contact: string;
  ageGroup: string;
  selectTime: string;
  confirm: string;
  vision2030: string;
  ministryOfSports: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  arName: string;
}

export interface BookingSlot {
  id: string;
  time: string;
  available: boolean;
}
