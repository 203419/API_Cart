import { CartInterface } from "./cart";

export interface CartRepositoryInterface {
    create(cartData: CartInterface): Promise<CartInterface>;
    getByUserId(userId: string): Promise<CartInterface[]>;
    deleteById(cartId: number): Promise<boolean>;
}