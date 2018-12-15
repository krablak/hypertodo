import { Component, h } from 'hyperapp'
import { TodoItem } from '@app/types'

interface TodoListProps {
  // Items to be displayed in list
  todos: TodoItem[]
  // Action called when user starts item remove
  onRemove: (todo: TodoItem) => void
  // Action called when user wants to switch item state
  onSwitchState: (todo: TodoItem) => void
}

export const TodoList: Component<TodoListProps> = ({ todos, onRemove, onSwitchState }) => (
  <ul className='todo-list'>
    {todos.map((item) => {
      return (
        <li className={item.completed ? 'completed' : ''}>
          <div className='view'>
            <input checked={item.completed} className='toggle' type='checkbox' onclick={() => onSwitchState(item)} />
            <label>{item.title}</label>
            <button className='destroy' onclick={() => onRemove(item)} />
          </div>
        </li>
      )
    })}
  </ul>
)
