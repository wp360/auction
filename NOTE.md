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
6. 再新建组件、服务
`ng g component product2`
`ng g service shared/anotherProduct`
7. 依照product1构建
```js
不同处[product2.component.ts]
...省略
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  ...省略,
  providers: [{
    provide: ProductService, useClass: AnotherProductService
  }]
})
...省略
```
8. 记录器
`ng g service shared/logger`
```js
[logger.service.ts]
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(message: string){
    console.log(message);
  }

}
[product.service.ts]
构造函数里添加
import { LoggerService } from './logger.service';
...省略
  constructor(private logger: LoggerService) { }
  getProduct(): Product{
    this.logger.log("getProduct方法被调用");
...省略
[app.module.ts]
import { LoggerService } from './shared/logger.service';

@NgModule({
...省略
  providers: [ProductService, LoggerService],
```