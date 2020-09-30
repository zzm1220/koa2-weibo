### Koa2 weibo

#### ejs
1. 变量 <%= val %>
2. 判断 <% if (val) {%>
3. 组件：<%- include(path, {val})%>
4. 本质是ssr: 服务器端渲染，利用服务端的能力实现数据渲染