## 新建第一个Angular App
```javascript
1.node、npm、Typescript安装
npm install -g typescript

2.Angular CLI安装
npm install -g @angular/cli@1.0.0
ng --version
ng --help

3.新建项目
ng new angular-hello-world  --ng4
 --ng4 是生成Angular 4项目，可以省略。
cd angular-hello-world
tree -F -L 1  （查看项目文件目录）

4.运行项目
ng serve
如果端口占用
使用 ng serve --port 9001 （可以随意设定端口号）

5.新建一个组件
$ ng generate component hello-world（组件名称）

【@NgModule】
@NgModule注解有三个属性：declarations、imports和bootstrap。
declarations指定了在该模块中定义的组件。你可能已经注意到了，当我们使用ng generate
时，它会自动把生成的组件添加到这个列表里！这涉及Angular中的一个重要思想：
要想在模板中使用一个组件，你必须首先在NgModule中声明它。
imports 描述了该模块有哪些依赖。我们正在创建一个浏览器应用， 因此要导入
BrowserModule。
bootstrap告诉Angular，当使用该模块引导应用时，我们要把AppComponent加载为顶层组件。
```

## 安装jquery、Bootstrap
`npm install jquery --save`
`npm install bootstrap --save`
>`引入，修改angular-cli.json文件`

```javascript

      "styles": [
        "styles.css"
      ],
      "scripts": [],
    修改为：
      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],

```
## 安装jquery、Bootstrap类型描述文件
`npm install @types/jquery --save-dev`

`npm install @types/bootstrap --save-dev`

## 生成对应六个组件
`ng generate component navbar`

`ng generate component footer`

`ng generate component search`

`ng generate component carousel`

`ng generate component product`

`ng generate component stars`
## 路由更新
`ng generate component productDetail`
`ng generate component home`
```js
1. 商品详情 product-detail.component.ts
  productTitle: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params["prodTitle"];
  }
2. home组件封装轮播图与商品列表
3. 路由配置
[app.modules.ts]
import { Routes, RouterModule } from '@angular/router';

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:prodTitle', component: ProductDetailComponent}
];
...省略
  imports: [
...省略
    RouterModule.forRoot(routeConfig)
  ],
...省略
4. 添加插座
[app.component.html]
<router-outlet></router-outlet>
5. 更换路由链接
[product.component.html]
<h4><a [routerLink]="['/product',product.title]">{{product.title}}</a></h4>
```

## Git操作基本命令
[参考](http://blog.csdn.net/YanJiangbo/article/details/25738737)