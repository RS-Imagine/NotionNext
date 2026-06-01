<div align="center">
# NotionNext For Imagine

I have modified the 
1) `public\favicon.ico` for the icon of website
2) `themes\heo\config.js` for the theme of website
3) the others in `Notion` and `Vercel` for the content of website

here is the website->[ImagineBlog](https://forimagine.eu.org 'ImagineBlog')


# 帮助教程

<img src="https://github.com/user-attachments/assets/c111204d-2016-4343-92e4-83357cac4b19" width="96" height="96" alt="NotionNext Logo" />

# NotionNext

用 Notion 搭建自己的独立站

继续在 Notion 写作，一键发布为博客、作品集、知识库、导航站或产品官网。

<p>
  <a href="https://preview.tangly1024.com/">在线预览</a>
  ·
  <a href="https://notionnext.tangly1024.com/user-guide/start-here">开始搭建</a>
  ·
  <a href="https://notionnext.tangly1024.com/user-guide/themes/THEMES_CATALOG">主题全览</a>
  ·
  <a href="https://notionnext.tangly1024.com/">文档站</a>
  ·
  <a href="https://github.com/notionnext-org/NotionNext/discussions">讨论区</a>
</p>

<p>
  <a aria-label="GitHub commit activity" href="https://github.com/notionnext-org/NotionNext/commits/main" title="GitHub commit activity">
    <img src="https://img.shields.io/github/commit-activity/m/notionnext-org/NotionNext?style=for-the-badge"/>
  </a>
  <a aria-label="GitHub contributors" href="https://github.com/notionnext-org/NotionNext/graphs/contributors" title="GitHub contributors">
    <img src="https://img.shields.io/github/contributors/notionnext-org/NotionNext?color=orange&style=for-the-badge"/>
  </a>
  <a aria-label="Build status" href="#" title="Build status">
    <img src="https://img.shields.io/github/deployments/notionnext-org/NotionNext/Production?logo=Vercel&style=for-the-badge"/>
  </a>
  <a aria-label="Powered by Vercel" href="https://vercel.com?utm_source=Craigary&utm_campaign=oss" title="Powered by Vercel">
    <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" height="28"/>
  </a>
</p>

中文 | [English](./README_EN.md)

</div>

---

## NotionNext 是什么？

NotionNext 是一个基于 **Next.js + Notion API** 的开源站点系统。你继续用 Notion 管理文章、分类、标签、菜单和页面，NotionNext 负责把这些内容发布成可访问、可搜索、可运营的独立网站。

它适合想长期沉淀内容的人：内容创作者、独立开发者、设计师、摄影师、课程作者、开源项目维护者，以及需要快速搭建产品官网或知识库的小团队。

## 你可以用它做什么？

| 目标 | 推荐入口 | 适合人群 |
| --- | --- | --- |
| 搭个人博客 | [从这里开始](https://notionnext.tangly1024.com/user-guide/start-here) | 内容创作者、独立开发者、学生 |
| 做作品集或个人品牌站 | [按场景选主题](https://notionnext.tangly1024.com/user-guide/themes/THEMES_CATALOG#按场景选主题) | 设计师、摄影师、自由职业者 |
| 做产品官网或 SaaS 落地页 | [Starter / Landing / Proxio](https://notionnext.tangly1024.com/user-guide/themes/THEMES_CATALOG#按场景选主题) | 创业者、独立产品、小团队 |
| 做知识库或文档站 | [GitBook / Claude](https://notionnext.tangly1024.com/user-guide/themes/THEMES_CATALOG#按场景选主题) | 开源项目、课程作者、团队文档 |
| 做导航站或资源聚合 | [Nav 主题](https://notionnext.tangly1024.com/user-guide/themes/nav) | 资源整理者、社群运营者 |

## 为什么选择 NotionNext？

- **不换写作工具**：文章、分类、标签、封面、菜单仍在 Notion 中维护。
- **上线路径短**：复制 Notion 模板、Fork 仓库、连接 Vercel，即可部署。
- **主题选择多**：内置 25 个主题，覆盖博客、文档、作品集、官网、相册、导航站等场景。
- **适合长期运营**：支持独立域名、SEO、Sitemap、RSS、评论、统计、搜索、广告和邮件订阅。
- **开源可控**：源码、配置和主题都在自己的仓库里，后续可以继续二次开发。
- **数据链路清晰**：Notion 负责内容沉淀，站点负责展示和分发，后续可迁移到 Markdown 或其他系统。

## 20 分钟部署路线

1. 打开 [主题预览站](https://preview.tangly1024.com/) 看最终效果。
2. 复制 NotionNext 官方 Notion 模板。
3. Fork 本仓库到自己的 GitHub 账号。
4. 使用 [Vercel 部署 NotionNext](https://notionnext.tangly1024.com/user-guide/deploy-vercel)。
5. 在环境变量中填写 Notion 页面 ID 等配置。
6. 部署成功后，按场景选择主题并补齐域名、评论、统计、搜索等功能。

新手建议直接从文档站的 [从这里开始](https://notionnext.tangly1024.com/user-guide/start-here) 阅读。

## 主题与预览

- 在线切换主题：[preview.tangly1024.com](https://preview.tangly1024.com/)
- 25 个内置主题：[主题全览](https://notionnext.tangly1024.com/user-guide/themes/THEMES_CATALOG)
- 仓库内主题文档：[docs/user-guide/themes/](./docs/user-guide/themes/)

| 场景 | 优先看 |
| --- | --- |
| 个人博客 | `simple`、`hexo`、`nobelium`、`typography` |
| 文档 / 知识库 | `gitbook`、`claude`、`thoughtlite` |
| 作品集 / 个人品牌 | `proxio`、`starter`、`landing` |
| 产品官网 | `starter`、`landing`、`commerce` |
| 图片 / 摄影 | `photo`、`plog`、`magzine` |
| 导航站 | `nav` |

## 本地开发

推荐使用 Node 20 和 Yarn 1。

```bash
# 1. 使用 Node 20
nvm use || nvm install

# 2. 安装 Yarn
npm i -g yarn

# 3. 安装依赖
yarn

# 4. 启动开发
yarn dev
```

常用命令：

| 命令 | 用途 |
| --- | --- |
| `yarn dev` | 启动本地开发 |
| `yarn build` | 构建生产版本 |
| `yarn export` | 静态导出 |
| `yarn docs:site:dev` | 本地预览文档站 |
| `yarn docs:site:build` | 构建文档站 |

## 文档入口

自 2026 年起，NotionNext 使用仓库内 Markdown 文档作为主要教程来源，并发布为独立文档站。

| 内容 | 链接 |
| --- | --- |
| 在线文档站 | [notionnext.tangly1024.com](https://notionnext.tangly1024.com) |
| 新手入口 | [从这里开始](https://notionnext.tangly1024.com/user-guide/start-here) |
| 配置索引 | [全站功能与配置索引](https://notionnext.tangly1024.com/user-guide/reference/features) |
| 主题说明 | [25 个主题说明](https://notionnext.tangly1024.com/user-guide/themes/THEMES_CATALOG) |
| 文档源码 | [docs/](./docs/) |
| 旧版手册 | [docs.tangly1024.com](https://docs.tangly1024.com/) |

## 参与社区

NotionNext 主仓库由 GitHub 组织 [notionnext-org](https://github.com/notionnext-org) 维护。欢迎提交问题、补充文档、贡献主题、修复代码或参与讨论。

| 内容 | 链接 |
| --- | --- |
| 参与社区 | [community-participate.md](./docs/user-guide/community-participate.md) |
| 贡献指南 | [CONTRIBUTING.zh-CN.md](./CONTRIBUTING.zh-CN.md) |
| 项目治理 | [GOVERNANCE.zh-CN.md](./GOVERNANCE.zh-CN.md) |
| 维护者 | [MAINTAINERS.md](./MAINTAINERS.md) |
| 行为准则 | [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) |
| 讨论区 | [GitHub Discussions](https://github.com/notionnext-org/NotionNext/discussions) |

如果你在仓库转让前已克隆旧地址，建议更新远程仓库：

```bash
git remote set-url origin https://github.com/notionnext-org/NotionNext.git
git remote -v
```

## 技术栈

- **框架**：[Next.js](https://nextjs.org)
- **样式**：[Tailwind CSS](https://www.tailwindcss.cn/)
- **渲染**：[react-notion-x](https://github.com/NotionX/react-notion-x)
- **评论**：Twikoo、Giscus、Gitalk、Cusdis、Utterances
- **部署**：[Vercel](https://vercel.com)

## 相关项目

- [Elog](https://github.com/LetTTGACO/elog)：Markdown 批量导出工具，支持组合 Notion、语雀、FlowUs、飞书等写作平台与 Hexo、VitePress、Halo、WordPress 等博客平台。

## 致谢

感谢 Craig Hart 发起的 Nobelium 项目。

<table><tr align="left">
  <td align="center"><a href="https://github.com/craigary" title="Craig Hart"><img src="https://avatars.githubusercontent.com/u/10571717" width="64px;" alt="Craig Hart"/></a><br/><a href="https://github.com/craigary" title="Craig Hart">Craig Hart</a></td>
</tr></table>

感谢每一位参与代码、主题、文档、Issue、Review 与发布维护的贡献者。

[![Contributors](https://contrib.rocks/image?repo=notionnext-org/NotionNext)](https://github.com/notionnext-org/NotionNext/graphs/contributors)

<<<<<<< HEAD
## 使用声明
=======
<<<<<<< HEAD
[![Contributors](https://contrib.rocks/image?repo=tangly1024/NotionNext)](https://github.com/tangly1024/NotionNext/graphs/contributors)
=======
  <td align="center">
    <a href="https://github.com/yuzhanglong" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/56540811" width="64px;" alt="yuzhanglong"/><br/><sub><b>yuzhanglong</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=yuzhanglong" title="yuzhanglong" >🔧 🐛</a>
  </td> 
    
  <td align="center">
    <a href="https://github.com/Hscpro" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/13926044" width="64px;" alt="Hscpro"/><br/><sub><b>Hscpro</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=Hscpro" title="Hscpro" >🔧 🐛</a>
  </td> 
    
  <td align="center">
    <a href="https://github.com/JensonMiao" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/46488783" width="64px;" alt="JensonMiao"/><br/><sub><b>JensonMiao</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=JensonMiao" title="JensonMiao" >🔧 🐛</a>
  </td> 
  
  <td align="center">
    <a href="https://github.com/haixin1225" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/28828438" width="64px;"  alt="haixin1225"/><br/><sub><b>haixin1225</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=haixin1225" title="haixin1225" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/mouyase" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/7844572" width="64px;"  alt="mouyase"/><br/><sub><b>mouyase</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=mouyase" title="mouyase" >🔧 🐛</a>
  </td>
  
  <td align="center">
    <a href="https://github.com/qfdk" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/2404478" width="64px;"  alt="qfdk"/><br/><sub><b>qfdk</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=qfdk" title="qfdk" >🔧 🐛</a>
  </td>
  
  <td align="center">
    <a href="https://github.com/ifyz" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/118271360" width="64px;"  alt="ifyz"/><br/><sub><b>ifyz</b></sub></a><br><a href="https://github.com/tangly1024/NotionNext/commits?author=ifyz" title="ifyz" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/liqun98" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/71168966" width="64px;"  alt="Liqun Zhao"/><br/><sub><b>Liqun Zhao</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=liqun98" title="liqun98" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/Ylarod" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/30978685" width="64px;"  alt="Ylarod"/><br/><sub><b>Ylarod</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=Ylarod" title="Ylarod" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/lifeafter619" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/65111206" width="64px;"  alt="Etherrreal."/><br/><sub><b>Etherrreal.</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=lifeafter619" title="Etherrreal." >🔧 🐛</a>
  </td>
  
  <td align="center">
  <a href="https://github.com/ykxkykx" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/17985993" width="64px;"  alt="Joshua Astray"/><br/><sub><b>Joshua Astray</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=ykxkykx" title="ykxkykx" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/Vixcity" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/57704177" width="64px;"  alt="Vixcity"/><br/><sub><b>Vixcity</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=Vixcity" title="Vixcity" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/ipatpat" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/39089551" width="64px;"  alt="ipatpat"/><br/><sub><b>ipatpat</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=ipatpat" title="ipatpat" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/xloong" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/8479955" width="64px;"  alt="xloong"/><br/><sub><b>xloong</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=xloong" title="xloong" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/expoli" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/31023767" width="64px;"  alt="expoli"/><br/><sub><b>expoli</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=expoli" title="expoli" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/SuperHuangXu" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/14816052" width="64px;"  alt="SuperHuangXu"/><br/><sub><b>bUBBLE</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=SuperHuangXu" title="SuperHuangXu" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/Pylogmon" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/59004461" width="64px;"  alt="Pylogmon"/><br/><sub><b>派了个萌 </b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=Pylogmon" title="Pylogmon" >🔧 🐛</a>
  </td>
  
  <td align="center">
    <a href="https://github.com/SkysCrystal" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/49473463" width="64px;"  alt="SkysCrystal"/><br/><sub><b>Simon Shi</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=SkysCrystal" title="SkysCrystal" >🔧 🐛</a>
  </td>
  
  <td align="center">
    <a href="https://github.com/siygle" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/173408" width="64px;"  alt="S.Y. Lee"/><br/><sub><b>S.Y. Lee</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=siygle" title="siygle" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/fighting-bug" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/56441589" width="64px;"  alt="fighting-buf"/><br/><sub><b>fighting-buf</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=fighting-bug" title="fighting-buf" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/cliouo" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/71540889" width="64px;"  alt="cliouo"/><br/><sub><b>cliouo</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=cliouo" title="cliouo" >🔧 🐛</a>
  </td>
  
  <td align="center">
    <a href="https://github.com/sudeakq" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/102792219" width="64px;"  alt="Sude Akgün"/><br/><sub><b>Sude Akgün</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=sudeakq" title="sudeakq" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/fgprodigal" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/769910" width="64px;"  alt="Ray"/><br/><sub><b>Ray</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=fgprodigal" title="Ray" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/hongzzz" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/25585061" width="64px;"  alt="Hongzzz"/><br/><sub><b>Hongzzz</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=hongzzz" title="hongzzz" >🔧 🐛</a>
  </td>

  <td align="center">
    <a href="https://github.com/RedhairHambagu" style="display:inline-block;width:80px"><img src="https://avatars.githubusercontent.com/u/129669334" width="64px;"  alt="RedhairHambagu"/><br/><sub><b>RedhairHambagu</b></sub></a><br/><a href="https://github.com/tangly1024/NotionNext/commits?author=RedhairHambagu" title="RedhairHambagu" >🔧 🐛</a>
  </td>

</tr>
</table>
>>>>>>> d371156ad7ec1c8348365a5c983b2e04780a8180

>>>>>>> main

本项目为免费、公开资源，仅限个人学习和合法站点建设使用。禁止利用本项目发布非法内容或进行违法活动。

## License

The MIT License.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=notionnext-org/NotionNext&type=Date)](https://star-history.com/#notionnext-org/NotionNext&Date)
