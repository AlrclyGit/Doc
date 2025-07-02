# 40 分钟的 Docker 实战攻略

## 镜像

`docker pull docker.io/library/gninx:latest`

- 仓库地址/命名空间/镜像：标签
- registry:仓库地址/注册表
- repository:镜像库

## 国内镜像

```shell
sudo vi /etc/docker/daemon.json
# 粘贴下面的 JSON
# 点击ESC,输入`:wq`回车 
sudo service docker restart
```

```json
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io", 
    "https://docker.1panel.live",
    "https://hub.rat.dev"
  ]
}
```

## 命令

```shell
docker images #列出所有下载过的 Docker 镜像
docker rmi [镜像名字/镜像ID] #remove images. 删除镜像
docker pull --platform=[amd64/arm64] [镜像名字/镜像ID] #表示拉取特定 CPU 架构的镜像
docker run [镜像名字/镜像ID] #创建容器
docker ps #process status. 查看进程状态
docker ps -a #process status all. 查看所有容器
docker run -d [镜像名字/镜像ID] #d 表示 detached mode. 分离模式
docker run -p 8080:80 #端口映射 宿主机端口:容器端口
docker run -v /docker/nginx/config:config #绑定挂载卷(volume) 宿主机目录:容器内目录
docker run -v Nginx:config #命名卷挂载 宿主机目录:容器内目录
docker rm -f #-f等于 -- force（强制）。强制删除容器
docker volume create Nginx #创建一个命名卷
docker volume inspect Nginx #查看命名卷详情
docker volume list #查看所有创建的卷
docker volume rm Nginx #删除一个卷
docker volume prune -a #删除没有任何容器在使用的卷
docker -e NGINX_INFO=good #添加环境变量
docker --name Nginx #自定义容器名
docker -it #让我的控制台进入容器进行交互
docker --rm #当容器停止时自动删除
docker --restart #容器停止时的重启策略。no - 不自动重启（默认值）;always - 总是重启（无论退出状态码）;on-failure - 仅在非零退出状态码时重启（可附加 :max-retries 指定最大重试次数）;unless-stopped - 总是重启，除非手动停止
docker stop [容器名/容器ID] #停止容器运行
docker start  [容器名/容器ID] #启动停止的容器
docker inspect [容器名/容器ID] #查看容器详情
docker create [容器名/容器ID] #创建容器，但不启动
docker logs [容器名/容器ID] #查看容器日志
docker logs -f [容器名/容器ID] #-f 等于 --follow,也就是追踪输出
docker exec [容器名/容器ID] linux命令 #在容器内运行linux命令
docker exec -it [容器名/容器ID] /bin/sh #进入容器内的命令行
```

## 技术原理

- Cgroups : 用来限制和隔离进程的资源使用，为每个容器分配不同的资源。
- Namespaces : 用来隔离进程的资源视图，使容器只能看到自己内部的进程。

## DockerFile

### 构建 DockerFile

```dockerfile
FROM python:3.13-slim

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 8080

CMD [ "python3","main.py" ]
```

### 打包 DockerFile

```shell
docker build -t [镜像名字/镜像ID] . #在当前文件夹构建Docker
```

### 登录 dockerHub

```shell
docker login
dokcer push [镜像名字/镜像ID]
```

## Dokcer 网络

```shell
docker network list #展示所有的网络
```

### Bridge 桥接

容器间可以使用 IP 互相访问，但是与宿主机之间是隔离的。可以创建子网，子网之间可以使用名字互相访问。

```shell
docker network create network1 #创建子网
docker network rm network1 #删除子网
docker --network network1 #指定容器的子网
```

### Hsot 模式

Docker 直接共享宿主机的网络

```shell
docker --network host #指定容器使用 host 模式
```

### None 模式

不使用网络

```shell
docker --network none #指定容器使用 none 模式
```

## DockerCompose

Dcoker Compose 使用 YML 文件管理多个容器

```shell
docker compose up -d #运行编排容器
docker compose -f test.yaml #运行非标准文件名的编排容器
docker compose down stop #停止容器
docker compose down start #启动容器
docker compose down #停止并删除容器
```
