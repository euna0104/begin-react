// 여러개의 TodoItem 컴포넌트를 렌더링 해줌
// 할일 정보들을 지니고 있는 배열인 todos와 TodoItem 컴포넌트들에게 전달해줘야 할 onToggle과 onRemove를 props로 받아옴

import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    if (todos.length === 0) return <p> 등록된 항목이 없습니다.</p>;
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            ))}
        </ul>
    );
}

export default TodoList;
