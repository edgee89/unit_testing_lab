import { Task, TodoList } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  it('should correctly add a single new task to the to-do list', () => {
    // Arrange
    const todoList = new TodoList()
    const newTask = new Task('Test task')

    // Act
    todoList.addTask(newTask)
    
    // Assert
    // 💡 Tip: use toEqual() to compare arrays and objects, and toBe() to compare primitive values (like numbers or booleans)
    expect(todoList.tasks).toEqual([newTask])
  })

  it('should correctly add multiple new tasks to the to-do list', () => {
    const todoList = new TodoList()
    const testTask1 = new Task('Test task 1')
    const testTask2 = new Task('Test task 2')

    todoList.addTask(testTask1)
    todoList.addTask(testTask2)

    expect(todoList.tasks).toEqual([testTask1, testTask2])
  })

  it('should not add a task to a list if the task has no name', () => {
    // 🎯 implement test here
    const toDoList = new TodoList()
    const testTask = new Task('')

    toDoList.addTask(testTask)

    expect(toDoList.tasks).toEqual([])
  })

  it('should correctly toggle the completion status of a task', () => {
    // 🎯 implement test here
    const testTask = new Task('Laundry')

    expect(testTask.isComplete).toEqual(false)

    testTask.toggleCompletion()
    expect(testTask.isComplete).toEqual(true)

    testTask.toggleCompletion()
    expect(testTask.isComplete).toEqual(false)
  })

  it('should correctly delete a task from a to-do list', () => {
    // 🎯 implement test here
    const toDoList = new TodoList()
    const testTask1 = new Task('Laundry')
    const testTask2 = new Task('Shopping')

    toDoList.addTask(testTask1, testTask2)
    toDoList.deleteTask(testTask2)
    expect(toDoList.tasks).toEqual([testTask1])
  })

  it('should count the correct total number of tasks in a to-do list', () => {
    const toDoList = new TodoList()
    toDoList.addTask(new Task('1'))
    toDoList.addTask(new Task('2'))
    toDoList.addTask(new Task('3'))
    const tasksCount = toDoList.countTotalTasks()

    expect(tasksCount).toBe(3)
  })

  it('should count the correct number of incomplete tasks in a to-do list', () => {
    const toDoList = new TodoList()
    toDoList.addTask(new Task('1', true))
    toDoList.addTask(new Task('2', false))
    toDoList.addTask(new Task('3', false))
    const incompleteTasksCount = toDoList.countIncompleteTasks()

    expect(incompleteTasksCount).toBe(2)
  })

  it('should count the correct number of complete tasks in a to-do list', () => {
    const toDoList = new TodoList()
    toDoList.addTask(new Task('1', true))
    toDoList.addTask(new Task('2', false))
    toDoList.addTask(new Task('3', true))
    const completeTasksCount = toDoList.countCompleteTasks()

    expect(completeTasksCount).toBe(2)
  })

  it('should determine a to-do list is not complete if there are no tasks in it', () => {
    const toDoList = new TodoList()
    const isListComplete = toDoList.checkIsEntireListComplete()

    expect(isListComplete).toBe(false)
  })

  it('should determine a to-do list is not complete if it contains incomplete tasks', () => {
    const toDoList = new TodoList()
    toDoList.addTask(new Task('1', false))
    toDoList.addTask(new Task('2', true))
    toDoList.addTask(new Task('3', false))
    const isListComplete = toDoList.checkIsEntireListComplete()

    expect(isListComplete).toBe(false)
  })

  it('should determine a to-do list is complete if every task in it is complete', () => {
    const toDoList = new TodoList()
    toDoList.addTask(new Task('1', true))
    toDoList.addTask(new Task('2', true))
    toDoList.addTask(new Task('3', true))
    const isListComplete = toDoList.checkIsEntireListComplete()

    expect(isListComplete).toBe(true)
  })

})