import {Company} from './Comany';

export class Product {
  id: number;
  name: string;
  description: string;
  details: string;
  UPC: string;
  imageUrl: string;
  customerPrice: number;
  customerDiscount: number;
  customerDiscountPrice: number;
  vendorPrice: number;
  releasedAt: string;
  deadlineAt: string;
  company?: Company;
}
