/**
 * Single TODO item data.
 */
export interface TodoItem {
  // Item unique identifier
  id: string
  // Item title
  title: string
  // Completed state flag.
  completed: boolean
}

/**
 * TODO app state holding data.
 */
export interface State {
  todos: TodoItem[]
}

/**
 * TODO app actions providing actions to manipulate app state.
 */
export interface Actions {

  /**
   * Adds new items into TODO list.
   */
  add (text: string): State

  /**
   * Removes item from TODO list.
   * @param todo item to be removed.
   */
  remove (todo: TodoItem): State

  /**
   * Switches TODO item state.
   */
  switchState (todo: TodoItem): State

  /**
   * Switches state to all TODO list items.
   */
  switchStateAll (completed: boolean): State
}
