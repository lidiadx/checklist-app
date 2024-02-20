/**
 * Legend:  0: non done
 *          1: done
 *          2: default : do not do
 */

const data = [
  { name: "morning walk", checks: ['minus', 'plus', 'plus', 'plus', 'skip', 'todo', 'todo'] },
  { name: "read a book in Spanish", checks: ['plus', 'minus', 'plus', 'plus', 'plus', 'todo', 'todo']},
  { name: "evening review", checks: ['plus', 'plus', 'plus', 'plus', 'plus', 'todo', 'todo'] },
  { name: "go to bed before 11pm", checks: ['minus', 'plus', 'minus', 'plus', 'skip', 'todo', 'todo']}
];

export { data };
