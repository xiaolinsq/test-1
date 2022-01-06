# Pull Request 提交指南

> Pull Request 是一种通知机制。你修改了他人的代码，将你的修改通知原来的作者，希望他合并你的修改，这就是 Pull Request。

### PR 流程

1. 第一步，你需要把别人的代码，克隆到你自己的仓库，Github 的术语叫做 fork。（如图：images/1.png）

2. 第二步，提交你的代码到自己的仓库。

3. 第三步，在你仓库的修改后的分支上，按下"New pull request"按钮。 这时，会进入一个新页面，有Base 和 Head 两个选项。Base 是你希望提交变更的目标，Head 是目前包含你的变更的那个分支或仓库。（如图：images/2.png）

5. 第四步，填写说明，帮助别人理解你的提交，然后按下"create pull request"按钮即可。

### 注意事项

1. 一个 PR 只围绕一件事情
2. 避免超大的 PR
3. PR 标题——概述此次 Pull Request 的目标
4. PR 说明——面向未来的 Reviewer

#### 关联远程仓库及时同步代码

```
# 添加远程仓库，指向 PR 提交者的仓库
$ git remote add kdcloudone https://github.com/kdcloudone/test.git

# 从该远程仓库拉取代码
$ git fetch kdcloudone

# 将该仓库的某个分支合并到当前分支
$ git merge branch/name

# 推送到自己的仓库
$ git push origin master
```



