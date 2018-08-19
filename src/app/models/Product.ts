import {Company} from './Comany';
import {ProductType} from './ProductType';
import {UserPurchase} from './UserPurchase';

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
  preOrderDeadlineAt: string;

  productType: ProductType;
  company?: Company;
  userPurchase?: UserPurchase;
}
