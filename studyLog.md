# vite 使用记录

### .env 文件

1. `.env` 文件任何情况下都会加载
2. `.env.local` 在所有模式下都会被加载，但会被 git 忽略
3. `.env.[mode]` 文件只在指定模式下加载
4. 只有使用 `VITE_` 的变量才会暴露给 vite 代码
5. 加载环境的变量通过 `import.meta.env` 传递给客户端。
