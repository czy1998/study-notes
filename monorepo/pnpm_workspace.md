# 手动搭建 pnpm monorepo

1. 初始化项目

   `pnpm init`

2. 创建 packages 文件夹、pnpm-workspace.yaml 文件，写入如下内容

   ```yaml
   packages:
     - "packages/*"
   ```

3. 创建子包 app1，app2

4. 子包中彼此互相引用
   这里以 `子包app1` 要引用 `子包app2` 为例：

   1. `子包app2` 的 `package.json`，需要指定入口文件字段，如
      ```json
      "main": "src/index.js",
      ```
   2. 在项目**根目录**下，执行 `pnpm --workspace -w add app2`
      ```sh
      --workspace # 只有此依赖存在于 workspace 中才会被安装
      -w #  在 workspace 项目根目录下执行此命令
      ```

5. 安装依赖

   - 安装公共依赖
     `pnpm -w add [要安装的依赖]`
   - 安装局部依赖
     `pnpm --filter [子包名称] add [要安装的依赖]`

6. 递归执行

   ```sh
   pnpm -r build # 为 workspace 下的所有包，执行 build 脚本
                 # -r 递归执行的意思，其他命令也同理
   ```

   **注意**: 在递归执行之前，确保每个 `package` 都定义了这个脚本

7. 运行子包命令

   ```sh
   pnpm --filter app2 build # 执行子包 app2 内的 build 命令
                            # 相当于进入子包目录，运行 pnpm run build
   ```
