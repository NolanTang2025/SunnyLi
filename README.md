# Portfolio Website

Creator IP Operator 作品集网站

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

启动后，在浏览器中打开显示的本地地址（通常是 `http://localhost:5173`）

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
SunnyLi_Collection/
├── src/
│   ├── App.jsx              # 主应用组件
│   ├── PortfolioSite.jsx    # 作品集组件
│   ├── main.jsx             # 入口文件
│   └── index.css            # 全局样式（Tailwind）
├── public/                  # 静态资源文件夹
│   └── images/              # 图片资源
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── vite.config.js           # Vite 配置
├── tailwind.config.js       # Tailwind 配置
└── postcss.config.js        # PostCSS 配置
```

## 🛠️ 技术栈

- **React 18** - UI 框架
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架

## 🌐 GitHub Pages 部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

### 启用 GitHub Pages

1. 进入 GitHub 仓库设置：`Settings` → `Pages`
2. 在 `Source` 部分选择：`GitHub Actions`
3. 每次推送到 `main` 分支时，会自动构建并部署

### 访问地址

部署成功后，网站将可通过以下地址访问：
```
https://NolanTang2025.github.io/SunnyLi/
```

### 手动触发部署

如果需要手动触发部署，可以：
- 在 GitHub 仓库的 `Actions` 标签页中，选择 `Deploy to GitHub Pages` 工作流，点击 `Run workflow`

## 📝 注意事项

- 确保已安装 Node.js (版本 16 或更高)
- 图片资源请放在 `public/images/` 目录下
- 修改代码后，页面会自动热更新
- GitHub Pages 部署需要几分钟时间，可在 `Actions` 标签页查看部署状态

