import {Company} from './Comany';

export class Product {
  id: number;
  name: string;
  description: string;
  details: string;
  UPC: string;
  imageUrl: string;
  customerCost: string;
  vendorCost: string;
  releasedAt: string;
  company?: Company;
}
