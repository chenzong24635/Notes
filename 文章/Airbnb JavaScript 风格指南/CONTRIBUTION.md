# 贡献指南

## 操作步骤
### 准备
- 设置 upstream 源： `git remote add upstream git@github.com:airbnb/javascript.git`

### 文档更新
> master 用于跟踪upstream

1. 对比文件差异 `git diff master upstream/master README.md`
3. `git checkout cn`，修改 cn 分支下 README.md
4. master 节点同步到 upstream 最新节点； `git checkout master && git rebase upstream/master`

### 文档发布
`sh scripts/page.sh` 将 Markdown 文档发布到 gp-pages 分支