# Web-Laboratory

The web lab was created exclusively for experimentation. I am sorry for the possible harm caused to your emotional state.

# Experiment-\* (general)

> Single Page Application (SPA) Tests Projects

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

# ----------------- or -------------------

# The quickest way to get started to just run
# Not all builds are up to date. <----- ( WARNING !!! )
cd dist
npx serve
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Gource Visualization

![Gource Visualization](https://user-images.githubusercontent.com/31689842/109397920-799ff900-794a-11eb-83eb-e6372ad76d6a.gif)

# Experiment-0

No comment.

# Experiment-1

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

![Промежуточный результат](https://user-images.githubusercontent.com/31689842/107634756-1ab85f80-6c7b-11eb-9160-303fc93af3e3.gif)

# Experiment-2

## Задание

1. Сверстать компонент формы с использованием Vue JS (без использования ui библиотек).
2. Форма должна быть "резиновой". Минимальная ширина экрана 360px.
3. Настроить валидацию:- кнопка отправки формы выключена, пока не будут корректно заполнены все поля.- поле “Имя” не может содержать цифры и символы кроме пробела и дефиса

   - в поле "email" можно отправить только email.
   - в поле "номер телефона" можно ввести только 11 цифр, круглые скобки, дефис и знак плюс.

## Визуальная концепция

![Визуальная концепция](https://raw.githubusercontent.com/asemendarov/web-laboratory/3ad2e2fcc64ddcd90a1f571aefb5a44c1e8a34e5/task/project1.svg)

## Промежуточный результат

![Результат](https://user-images.githubusercontent.com/31689842/107679596-d1cdce80-6cad-11eb-8166-6dd21b806070.png)

# Experiment-3

## Задание

Реализовать главную страницу сайта - винный магазин (шаблон Figma) на Vue и полностью на Grid компонентах.

## Шаблон

Шаблон сайта - винный магазин

Шаблон сайта для Figma. Тематика: винный магазин.

[Скачать шаблон для Figma (Download template for Figma)](https://figma.info/blog/templates/2021-01-04-shablon-vinnogo-magazina.html)

## Результат

![Результат](https://user-images.githubusercontent.com/31689842/109396007-756ede00-7940-11eb-9334-6238ff629b01.png)

# Experiment-4

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

# Experiment-4-redesign

> На мой взгляд улучшена структура кода и логика работы светофора. Реализация стала более масштабируемой.

# Experiment-5

## Задание

Разработать SPA шаблон проекта Alpha Centauri c легко масштабируемой структурой. Для заполнения использовать lorem, JSONPlaceholder, либо local JSON Server.

## Результат

![Результат](https://user-images.githubusercontent.com/31689842/109395158-f5467980-793b-11eb-9bfd-1774015834b9.png)

![Результат](https://user-images.githubusercontent.com/31689842/109395379-1b204e00-793d-11eb-8e0d-3422fc277779.gif)
