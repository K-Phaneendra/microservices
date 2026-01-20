export interface Inventory {
  id: string;
  productId: string;
  quantity: number;
  reserved: number;
  createdAt: Date;
  updatedAt: Date;
}
