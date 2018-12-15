import { Component, h } from 'hyperapp'

interface NewTodoFormProps {
  // Action to be called to add new TODO list item
  onAdd: (text: string) => void
  // Switches all TODO list items to given state
  switchStateAll: (completed: boolean) => void
}

export const NewTodoForm: Component<NewTodoFormProps> = ({ onAdd, switchStateAll }) => {
  const onEnterAdd = (e: any) => {
    if (e.keyCode === 13) {
      // Perform action for TODO item creation
      onAdd(e.target.value)
      // Delete input text
      e.target.value = ''
    }
  }
  return (
    <span>
      <input name='newTodo' className='new-todo' placeholder='What needs to be done?' onkeypress={onEnterAdd} />
      <input id='toggle-all' className='toggle-all' type='checkbox' onchange={(e: any) => switchStateAll(e.target.checked)} />
      <label htmlFor='toggle-all' />
    </span>
  )
}
