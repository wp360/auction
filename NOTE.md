# 依赖注入
1. 新建项目
`ng new ngDI`
2. 新建组件、服务
`ng g component product1`
`ng g service shared/product`
3. 服务构建
```js
[product.service.ts]

import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }
  getProduct(): Product{
    return new Product(0, "IPhone7" , 5899 , "最新款苹果手机")
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ){

  }
}
```
4. 修改模块声明
```js
[app.module.ts]

import { ProductService } from './shared/product.service';
...省略
  providers: [ProductService],
...省略
```
5. 产品组件添加
6. 运行项目
`npm run start`