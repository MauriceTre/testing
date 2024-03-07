const axios = require("axios");
const {
  createTodo,
  markTodo,
  updateTodo,
  deleteTodo
} = require("./todoFunctions");

jest.mock("axios");

describe("Testing Todo functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Test createTodo function", async () => {
    const mockData = {
      data: { todo: { id: 1, task: "Task", isDone: false, dueDate: "2024-03-07" } }
    };
    axios.post.mockResolvedValue(mockData);

    const result = await createTodo(1, "Task", false, "2024-03-07");

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      {
        newUserId: 1,
        newTask: "Task",
        newIsDone: false,
        newDueDate: "2024-03-07"
      }
    );
  });

  test("Test markTodo function", async () => {
    const mockData = {
      data: { updatedTodo: { id: 1, task: "Task", isDone: true, dueDate: "2024-03-07" } }
    };
    axios.put.mockResolvedValue(mockData);

    const result = await markTodo(1, true);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/mark",
      {
        todoId: 1,
        newIsDone: true
      }
    );
  });

  test("Test updateTodo function", async () => {
    const mockData = {
      data: { updatedTodo: { id: 1, task: "Updated Task", isDone: true, dueDate: "2024-03-07" } }
    };
    axios.put.mockResolvedValue(mockData);

    const result = await updateTodo(1, "Updated Task", true, "2024-03-07");

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/update",
      {
        todoId: 1,
        newTask: "Updated Task",
        newIsDone: true,
        newDueDate: "2024-03-07"
      }
    );
  });

  test("Test deleteTodo function", async () => {
    const mockData = {
      data: { deletedTodosId: 1 }
    };
    axios.delete.mockResolvedValue(mockData);

    const result = await deleteTodo(1);

    expect(result).toEqual(mockData.data.deletedTodosId);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      {
        data: { todoId: 1 }
      }
    );
  });
});
