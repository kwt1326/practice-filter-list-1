export class ProductRepository {
  static uri: string = "https://closet-sample.azurewebsites.net/api/data";

  static async findAllProducts() {
    const response = await fetch(this.uri)
    return response.json();
  }
}

export default new ProductRepository();