# SHRI-2018-2-hw1

Решение домашнего задания по архитектуре 14-й школы разработчиков интерфейсов

запуск:
```npm start```

сборка:
```npm run build```

### Комментарии

Исходный код Flux-библиотеки находится внути папки `src/js/flux/`

Для работы фреймворка необходимо создать объект класса MyFLux. 
Конструктор этого класса принимает на вход три параметра:
 - state: ILooseObject - объект, описывающий начальное состояние хранилища
 - actions: Array<{type: string, handler: IActionHandler}> - массив, состоящий из объектов с парами свойств "тип действия", "обработчик действия".
 Функция обработчика принимает на вход два параметра: предыдущее состояние хранилища и объект payload с параметрами "нагрузки" и возыращает новое состояние хранилища. 
 - views: Array\<View> - массив из представлений компонентов, обновлением которых будет управлять фреймворк.
 Для создания View нужно вызвать конструктор этого класса, который принимает на вход два параметра: 
 селектор элемента, в который будет встроен компоннент и функцию генерации этого компонента. В качестве единственного аргумента фукнции передается состояние хранилища. 
 В конце своей работы функция должна вернуть созданный HTML элемент. 


Для начала работы с фреймворком требуется 
- описать начальный state для store
- описать массив объектов c типами действий и их обработчиками (как это сделано в `src/js/store.ts`)
- описать view компонентов, которыми будет управлять фреймворк (как это сделано в `src/js/app.ts`)
- инициализировать фреймворк этими данными 

Для вызова одного из зарегистрированных действий хранилища нужно вызывать метод dispatch у созданного экземпляра класса MyFlux и передавать ему тип и нагрузку действия.

Для демонстрации выбрано удалению карточек событий по нажатию крестика.

Тесты для фреймворка не написаны. Отправка измененившегося состояния на сервер не реализована.
 
