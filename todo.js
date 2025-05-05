// Task constructor
function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate || null;
    this.priority = priority || 'medium';
    this.completed = false;
  }
  
  Task.prototype.markComplete = function() {
    this.completed = true;
    return this;
  };
  
  Task.prototype.markIncomplete = function() {
    this.completed = false;
    return this;
  };
  
  Task.prototype.updateDescription = function(newDescription) {
    this.description = newDescription;
    return this;
  };
  
  // ToDoList constructor
  function ToDoList() {
    this.tasks = [];
  }
  
  ToDoList.prototype.addTask = function(task) {
    this.tasks.push(task);
    return this;
  };
  
  ToDoList.prototype.completeTask = function(description) {
    const task = this.findTask(description);
    if (task) task.markComplete();
    return this;
  };
  
  ToDoList.prototype.findTask = function(description) {
    return this.tasks.find(task => 
      task.description.toLowerCase() === description.toLowerCase()
    ) || null;
  };
  
  ToDoList.prototype.removeTask = function(description) {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => 
      task.description.toLowerCase() !== description.toLowerCase()
    );
    return initialLength !== this.tasks.length;
  };
  
  ToDoList.prototype.getIncompleteTasks = function() {
    return this.tasks.filter(task => !task.completed);
  };
  
  ToDoList.prototype.getCompleteTasks = function() {
    return this.tasks.filter(task => task.completed);
  };
  
  ToDoList.prototype.clearCompleted = function() {
    this.tasks = this.getIncompleteTasks();
    return this;
  };
  
  // Export for Node.js environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      Task,
      ToDoList
    };
  }