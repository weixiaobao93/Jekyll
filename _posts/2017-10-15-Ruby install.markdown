---
layout: post
title: Ruby部署问题收集（window 7）
date: 2017-10-15 00:00:00 +0300
description: Ruby在布置过程中遇到的问题. # Add post description (optional)
img: how-to-start.jpg # Add image post (optional)
category: Ruby
tags: [notes] # add tag
---

(未保存截图)

在官网下载：rubyinstaller-2.4.2-2-x64 进行默认安装（只修改安装路径）。

>需要配置环境变量（属性->系统高级设置->环境变量）,例如：D:\Ruby22\bin\;

执行代码查看是否安装成功：

>$ ruby -v

提示版本号即可。

执行安装命令：

>$ gem install jekyll

安装报错，错误提示为：

>ERROR:  While executing gem ... (Gem::RemoteFetcher::FetchError)
Errno::ECONNABORTED: An established connection was aborted by the software in your host machine. - SSL_connect (https://api.rubygems.org/specs.4.8.gz)

解决报错的办法：
>$ gem source -a https://ruby.taobao.org

然后重新执行安装命令：
>$ gem install jekyll

检测是否安装成功:

>$ jekyll -v

提示版本号即为成功安装。

执行新建应用命令,会在当前的目录下创建一个myblog的目录:

>$ jekyll new myblog

然后，进入BLOG：

>$ cd myblog

再执行：

>$ jekyll serve --watch

（不加--watch则不会检测文件夹内的变化，即修改后需要重新启动jekyll）,即可以通过http://localhost:4000看到默认的页面。

如果本机没配置过任何jekyll的环境，会报错！！！

报错的原因：没有安装 bundler 。

然后执行安装bundler命令：

>$ gem install bundler

安装完成后会继续报错。报错主要提示内容为：

> (Bundler::GemNotFound)

知道主要原因后，执行命令：

>$ bundle install

光标持续跳动了很久，却没有任何进度。执行如下解决办法：

>$ gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/

>$ gem sources -l

>$ gem install rails

完成上面的步骤，再次执行

>$ bundle install

安装成功！布置服务器成功！

打开：http://localhost:4000