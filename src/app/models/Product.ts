import {Company} from './Company';
import {ProductType} from './ProductType';
import {UserPurchase} from './UserPurchase';

export class Product {
  public id: number;
  public name: string;
  public description: string;
  public details: string;
  public UPC: string;
  public imageUrl: string;
  public customerPrice: number;
  public customerDiscount: number;
  public customerDiscountPrice: number;
  public vendorPrice: number;
  public releasedAt: string;
  public preOrderDeadlineAt: string;

  public productType: ProductType;
  public company?: Company;
  public userPurchase?: UserPurchase;
}
