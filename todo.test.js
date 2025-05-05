const { Task, ToDoList } = require('./todo');

describe('To Do List', () => {
  let testTask, testList;

  beforeEach(() => {
    testTask = new Task("Buy groceries", "2023-05-20", "high");
    testList = new ToDoList();
  });

  test('Task is created with correct properties', () => {
    expect(testTask.description).toBe("Buy groceries");
    expect(testTask.completed).toBe(false);
  });

  test('Task markComplete() sets completed to true', () => {
    testTask.markComplete();
    expect(testTask.completed).toBe(true);
  });

  test('ToDoList starts empty', () => {
    expect(testList.tasks.length).toBe(0);
  });

  test('ToDoList adds task', () => {
    testList.addTask(testTask);
    expect(testList.tasks.length).toBe(1);
  });

  test('ToDoList completes task', () => {
    testList.addTask(testTask);
    testList.completeTask("Buy groceries");
    expect(testList.tasks[0].completed).toBe(true);
  });

  test('ToDoList removes task', () => {
    testList.addTask(testTask);
    expect(testList.removeTask("Buy groceries")).toBe(true);
    expect(testList.tasks.length).toBe(0);
  });

  test('ToDoList gets incomplete tasks', () => {
    const task2 = new Task("Walk dog", null, "low");
    testList.addTask(testTask).addTask(task2);
    testList.completeTask("Buy groceries");
    const incomplete = testList.getIncompleteTasks();
    expect(incomplete.length).toBe(1);
    expect(incomplete[0].description).toBe("Walk dog");
  });
});