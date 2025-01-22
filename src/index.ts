import { IProduct, IProductService } from "./interfaces";

class ProductList implements IProductService {
  private productList: IProduct[] = [];
  id: number = 1;

  createProduct(data: { name: string; price: number }): IProduct {
    const { name, price } = data;

    const newProduct: IProduct = {
      id: this.id,
      name,
      price,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.productList.push(newProduct);
    this.id++;

    return newProduct;
  }

  getProducts(): IProduct[] {
    return this.productList;
  }

  getOneProduct(id: number): IProduct | undefined {
    return this.productList.find((product) => product.id === id);
  }

  updateProduct(id: number, data: { name?: string; price?: number }): IProduct {
    const productIndex = this.productList.findIndex(
      (product) => product.id === id
    );

    const updateProduct: IProduct = {
      ...this.productList[productIndex],
      ...data,
      updatedAt: new Date(),
    };

    this.productList.splice(productIndex, 1, updateProduct);

    return updateProduct;
  }

  deleteProduct(id: number): { message: string } {
    const productIndex = this.productList.findIndex(
      (product) => product.id === id
    );

    this.productList.splice(productIndex, 1);
    return { message: "Product sucessfully deleted." };
  }
}

export const productList = new ProductList();
