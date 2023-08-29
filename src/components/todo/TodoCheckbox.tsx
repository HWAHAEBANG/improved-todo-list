const TodoCheckbox = () => {
  const handleCheck = () => {
    alert('check');
  };

  return <input type="checkbox" /* checked={} */ onChange={handleCheck} />;
};

export default TodoCheckbox;
