# Experiment-1

> Single Page Application (SPA) Test Project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Задание

Архитектура проекта: Клиент – Сервер

Необходимо реализовать SPA приложение с использованием vue.js, содержащее в себе 1 компонент который отвечает за отображение папок и файлов, информация о которых получена в качестве ответа с сервера на HTTP запрос в формате JSON. (REST API).

При инициации приложения необходимо отображать все родительские папки и файлы, согласно соответствующему JSON.

При клике на родительскую папку в соседнем столбце необходимо отображать дочерние папки и файлы, принадлежащие текущей родительской папке, согласно соответствующему JSON.

При клике на файл, необходимо отображать привью этого файла.
Файлы следующих форматов: xslx, pdf

## Визуальная концепция

![Визуальная концепция SPA приложения](https://user-images.githubusercontent.com/31689842/107557810-1f353780-6beb-11eb-8284-7b764fca8398.png)

## Промежуточный результат

![v0.0.1-Project-3](https://user-images.githubusercontent.com/31689842/107634756-1ab85f80-6c7b-11eb-9160-303fc93af3e3.gif)
