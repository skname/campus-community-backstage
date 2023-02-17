# vite 使用记录

### .env 文件

1. `.env` 文件任何情况下都会加载
2. `.env.local` 在所有模式下都会被加载，但会被 git 忽略
3. `.env.[mode]` 文件只在指定模式下加载
4. 只有使用 `VITE_` 的变量才会暴露给 vite 代码
5. 加载环境的变量通过 `import.meta.env` 传递给客户端。

# vue3 使用

### component 内置组件的使用

1. 动态的渲染一个组件
2. 在导航栏中动态渲染图标时使用

### class 透传 属性的优先级更高

# pinia 使用

### 解决问题

1. 在 nav 窗口导航栏刷新后会丢失状态
2. 将 nav 状态保存到 pinia state 中，如果 session 中有数据，则从 session 中拿回状态
3. 封装 $subscribe 方法，每次修改完 state 中的状态则更新 session 中的状态
4. 封装 $subscribe 方法，每次修改完 currWin 键值后跳转路由
