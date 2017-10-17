---
layout: post
title: GIT push推送到GitHub报错
date: 2017-10-17 00:00:00 +0300
description: GIT push推送到GitHub报错解决方法. # Add post description (optional)
img: bg2015120901.png # Add image post (optional)
category: GIT
tags: [notes] # add tag
---


#### 使用GIT推送项目到GitHub的另一仓库，需要修改地址，切换地址命令如下：
#### 1、先修改命令：

>git remote origin set-url URL

#### 2.先删除后修改 

>git remote rm origin 
>git remote add origin git@github.com:weixiaobao93/raygod.git

#### 3.修改config文件 
#### 如果你的项目有加入版本控制,那可以到项目根目录下,查看隐藏文件夹,发现.git文件夹,找到其中的config文件,就可以修改其中的git remote origin地址了

#### 使用GIT推送项目代码到GitHub时报错：

>To git@github.com:weixiaobao93/raygod.git
>! [rejected] master -> master (non-fast-forward)
>error: failed to push some refs to 'git@github.com:weixiaobao93/raygod.git
>hint: Updates were rejected because the tip of your current branch is behin
>hint: its remote counterpart. Integrate the remote changes (e.g.
>hint: 'git pull ...') before pushing again.
>hint: See the 'Note about fast-forwards' in 'git push --help' for details.

#### 出现该错误的原因：切换地址后，仓库中的README.md文件不在本地代码目录中。
#### 解决方法，先pull，再push

>git pull --rebase origin master

#### 这时候push就可以了。
#### 但是可能会报错：

>error: Your local changes to the following files would be overwritten by merge: 
>Please, commit your changes or stash them before you can merge.

#### 解决方法：

>git fetch --all
>git reset --hard origin/master

#### Git fetch 只是下载远程的库的内容，不做任何的合并 git reset 把HEAD指向刚刚下载的最新的版本 
#### 现在再次push就没有问题了。