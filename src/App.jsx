import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import FilterList from "./components/FilterList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos);
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    } else {
      setTodos([
        { id: 1, text: "Learn React", completed: true },
        { id: 2, text: "Build a Todo App", completed: false },
        { id: 3, text: "Deploy the App", completed: false },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };
  const handleToggle = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const handleDelete = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Active") return !todo.completed;
    if (selectedFilter === "Completed") return todo.completed;
    return true; // Fallback
  });

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <section className="todoapp">
      <Header className={"header"} />
      <TodoForm
        className={"new-todo"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onSubmit={addTodo}
      />
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <Input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <label>{todo.text}</label>
                <Button
                  className="destroy"
                  onClick={() => handleDelete(todo.id)}
                ></Button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer className={"footer"}>
        <span className="todo-count">
          <strong>{itemsLeft}</strong> item{itemsLeft !== 1 ? "s" : ""} left
        </span>
        <FilterList
          selectedFilter={selectedFilter}
          onChange={setSelectedFilter}
        />
        <Button className={"clear-completed"} onClick={clearCompleted}>
          Clear completed
        </Button>
      </Footer>
    </section>
  );
}

export default App;
