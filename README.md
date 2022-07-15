# Install
## Require Libs
1- Install Mysql
```
npm install mysql
```
2- Install Readline
```
npm install readline
```
3- Create 'alarm' Database -> Create 'gorevListe' table -> Create 'gorev' (TEXT), 'tarih' (TEXT), 'ayrinti' (TEXT), 'Statu' (INT), 'ID' (AI - INT) or import alarm.sql

# Usage
run app.js
```
node app.js
```
If the duty day has come, you will be warned directly.
U can 
```
1- make the task look like it was done before its due date
2- delete task
3- change task date
4- change task detail
5-see all tasks
```
