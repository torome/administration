# Administration 的 Token 验证机制

Administration 的 Token 验证基于 Passport 组件实现，并且是类型为 password 的 Token 验证。

Token 验证处理指向的路由：

* http://you-domain/admin/token

前端需要向后端发送的数据：

* name
* password

前端接收到后端返回的数据：

* access_token
* expires_in
* refresh_token
* status
* token_type

获取 token 验证信息后的 api 中需在前端请求中添加的 headers 数据：

* Accept
* Authorization
