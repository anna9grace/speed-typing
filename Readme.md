# Руководство по работе с проектом

Данный проект создан с помощью [Create React App](https://github.com/facebook/create-react-app).

## src

В директории размещаются исходный код проекта: компоненты, файлы с тестами, модули и так далее. Структура директории `src` может быть произвольной.


### Запуск проекта

```bash
npm start
```

После запуска, приложение доступно для просмотра в браузере по адресу [http://localhost:3000](http://localhost:3000).

### Запуск локального сервера с базой данных

```bash
npm install json-server
json-server --watch db.json --port 3004
```

После запуска, база данных доступна для просмотра в браузере по адресу [http://localhost:3004](http://localhost:3004).
В сборке роль "базы данных" выполняет файл "db.json" в директории project


### Запуск тестов

```bash
npm test
```

Запуск тестов приложения в интерактивном режиме.


### Проверка линтером

```bash
npm run test:eslint
```

Запуск проверки проекта статическим анализатором кода **ESLint**.

### Сборка проекта

```bash
npm run build
```

Запуск сборки приложения.

В процессе сборки приложения, код приложения оптимизируется и минимизируется, для достижения наилучшей производительности.

Во время выполнения инструкций по сборке проекта, в корне проекта создается директория `build`, в которую будут помещены результирующие файлы. После сборки проект готов к публикации.


### Извлечение конфигурации проекта

```bash
npm run eject
```

**Обратите внимание**, при запуске команды `npm run eject` нет возможности вернуть внесённые изменения обратно!

Выполнение данной команды, `react-scripts` скопирует все конфигурационные файлы и скрипты в корень проекта. Данный процесс позволяет получить полный контроль над конфигурацией проекта.
