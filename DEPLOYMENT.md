# GitHub Pages 部署指南

## 问题修复总结

已修复以下导致 GitHub Pages 部署失败的问题：

1. **Java 依赖问题** - 移除了 Google Closure Compiler 依赖，改用 Terser 进行压缩
2. **构建配置优化** - 简化了 Vite 配置，移除了复杂的压缩插件
3. **路径问题** - 修复了 index.html 中的绝对路径，改为相对路径
4. **MIME 类型问题** - 配置了正确的 Content-Type 头

## 部署步骤

### 1. 本地构建测试

```bash
npm run build
```

构建成功后会在 `dist` 文件夹生成：
- `index.html` - 主页面
- `index-{hash}.js` - 压缩后的 JavaScript 文件

### 2. GitHub Pages 自动部署

项目已配置 GitHub Actions 工作流 (`.github/workflows/deploy.yml`)，当推送到 `main` 分支时会自动：

1. 安装 Node.js 和依赖
2. 构建项目
3. 部署到 GitHub Pages

### 3. 手动设置 GitHub Pages

如果自动部署不工作，可以手动设置：

1. 在 GitHub 仓库设置中，进入 "Pages" 选项卡
2. 选择 "GitHub Actions" 作为源
3. 或者选择 "Deploy from a branch"，设置 `docs` 文件夹为发布源

### 4. 访问游戏

部署成功后，游戏将在以下 URL 可用：
```
https://{username}.github.io/{repository-name}/
```

## 故障排除

### 常见问题

1. **MIME 类型错误**
   - 确保使用 Vite 开发服务器 (`npm run serve`)
   - 生产构建使用正确的 JavaScript MIME 类型

2. **模块加载失败**
   - 检查浏览器控制台错误
   - 确保所有资源路径正确

3. **构建失败**
   - 检查 Node.js 版本 (推荐 v16+)
   - 运行 `npm ci` 重新安装依赖

### 开发 vs 生产

- **开发**: 使用 `npm run serve` 启动 Vite 开发服务器
- **生产**: 使用 `npm run build` 生成静态文件

## 技术细节

- **构建工具**: Vite 4.1.3
- **压缩工具**: Terser (替代 Google Closure Compiler)
- **目标环境**: ES2020
- **部署方式**: GitHub Pages + GitHub Actions

## 文件结构

```
dist/
├── index.html          # 主页面
└── index-{hash}.js     # 压缩后的游戏代码
```

构建后的文件已优化，适合静态网站托管。