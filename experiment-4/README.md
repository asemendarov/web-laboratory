# Experiment-4

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

Требуется разработать одностраничное приложение (SPA) - эмулятор светофора.

Приложение должно представлять из себя модель светофора и иметь 3 экрана:

Экран 1: горит красный (зеленый и желтый тусклые/полупрозрачные)

Экран 2: горит желтый (зеленый и красный тусклые/полупрозрачные)

Экран 3: горит зеленый (красный и желтый тусклые/полупрозрачные)

Роутинг приложения должен быть настроен таким образом, чтобы при вводе адреса в адресной строке можно было открыть любой из экранов

(например,
‘/red’ - экран 1,
‘/yellow’ - экран 2,
‘/green’ - экран 3)

Запуск работы светофора должен происходить сразу после открытия приложения.

Светофор может начинать свою работу с любого сигнала, в зависимости от открытого экрана, и должен работать циклически: красный('/red') -> желтый('/yellow') -> зеленый('/green') -> желтый('/yellow') -> красный('/red') -> желтый('/yellow') -> ...

При смене сигнала должен также меняться роут (адрес в адресной строке).

Красный горит 10 секунд.

Желтый горит 3 секунды.

Зеленый горит 15 секунд.

Дополнительные задания:

- Реализовать таймер, показывающий сколько секунд осталось до смены сигнала светофора.
- Реализовать мигание сигнала светофора, если до его смены осталось меньше 3 секунд.
- Реализовать механизм, позволяющий сохранять состояние светофора и запускать его работу с того же момента при перезагрузке страницы.

## Результат

![Результат](https://user-images.githubusercontent.com/31689842/107563444-214ec480-6bf2-11eb-999b-32e58482bba1.gif)
