const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the +1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// +5 button
const addFiveButton = document.getElementById('add-five')
addFiveButton.addEventListener('click', e => dispatch({ type: "ADD_5" }))

// -5 button
const subtractFiveButton = document.getElementById('subtract-five')
subtractFiveButton.addEventListener('click', e => dispatch({ type: "SUBTRACT_5" }))

// color select
const colorSelectDropdown = document.getElementById('color-select')
// colorSelectDropdown.addEventListener('change', e => dispatch({ type: e.target.value }))
colorSelectDropdown.addEventListener('change', (e) => {
  let newColor = e.target.value
  dispatch ({
    type: 'CHANGE_COLOR', newColor
  })
})

// set new value
const newValueField = document.getElementById('new-value')
newValueField.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    let newValue = newValueField.value
    newValue = parseInt(newValue, 10)
    if (typeof newValue === 'number') {
      dispatch ({
        type: 'NEW_VALUE', newValue
      })
    }
  }
})