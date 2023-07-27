import { CartInterface } from "../domain/cart";
import { CartRepositoryInterface } from "../domain/cart_repository";

export class CartService {
  constructor(private readonly cartRepository: CartRepositoryInterface) {}

  async createCart(cartData: CartInterface): Promise<CartInterface> {
    return this.cartRepository.create(cartData);
  }

  async getCartItemsByUserId(userId: string): Promise<CartInterface[]> {
    return this.cartRepository.getByUserId(userId);
  }

  async deleteCartItem(cartId: number): Promise<boolean> {
    return this.cartRepository.deleteById(cartId);
  }
}

