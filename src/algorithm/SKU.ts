/**管理商品库存和唯一标识商品 */

export class SKU {
    /**商品唯一标识 */
    id: string;
    /**商品库存 */
    stock: number;
    /**商品价格 */
    price: number;
    constructor(id: string, stock: number, price: number) {
        this.id = id;
        this.stock = stock;
        this.price = price;
    }

    /**减少库存 */
    reduceStock() {
        this.stock--;
    }

    /**增加库存 */
    addStock() {
        this.stock++;
    }

    /**获取库存 */
    getStock() {
        return this.stock;
    }

    /**获取唯一标识 */
    getId() {
        return this.id;
    }

    /**获取价格 */
    getPrice() {
        return this.price;
    }

    /**设置价格 */
    setPrice(price: number) {
        this.price = price;
    }  

}


// 定义商品属性
interface ProductAttribute {
    name: string;
    value: string;
  }
  
  // 定义商品
  class Product {
    name: string;
    attributes: ProductAttribute[];
  
    constructor(name: string, attributes: ProductAttribute[]) {
      this.name = name;
      this.attributes = attributes;
    }
  }
  
  // SKU 算法
  class SKUAlgorithm {
    products: Product[];
  
    constructor(products: Product[]) {
      this.products = products;
    }
  
    // 根据属性值查找对应的 SKU
    findSKUByAttributes(attributes: ProductAttribute[]): string | null {
      for (const product of this.products) {
        if (this.attributesMatch(product.attributes, attributes)) {
          return this.generateSKU(product, attributes);
        }
      }
      return null;
    }
  
    // 判断属性值是否匹配
    private attributesMatch(attributes1: ProductAttribute[], attributes2: ProductAttribute[]): boolean {
      // 在实际应用中，可能需要根据具体业务逻辑来判断属性是否匹配
      // 这里简单地比较属性数量和值是否相同
      if (attributes1.length !== attributes2.length) {
        return false;
      }
      for (let i = 0; i < attributes1.length; i++) {
        if (attributes1[i].name !== attributes2[i].name || attributes1[i].value !== attributes2[i].value) {
          return false;
        }
      }
      return true;
    }
  
    // 生成 SKU
    private generateSKU(product: Product, attributes: ProductAttribute[]): string {
      // 在实际应用中，可能需要根据具体业务逻辑来生成 SKU
      // 这里简单地将商品名和属性值拼接作为 SKU
      const attributeValues = attributes.map(attr => attr.value).join('-');
      return `${product.name}-${attributeValues}`;
    }
  }
  
  // 示例用法
  const products = [
    new Product('T-shirt', [{ name: 'color', value: 'red' }, { name: 'size', value: 'M' }]),
    new Product('T-shirt', [{ name: 'color', value: 'blue' }, { name: 'size', value: 'L' }])
  ];
  const skuAlgorithm = new SKUAlgorithm(products);
  const attributesToFind = [{ name: 'color', value: 'blue' }, { name: 'size', value: 'L' }];
  const foundSKU = skuAlgorithm.findSKUByAttributes(attributesToFind);
  // console.log(foundSKU); // 输出：T-shirt-blue-L
  