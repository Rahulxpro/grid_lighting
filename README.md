Grid Lights
Medium
 
Build a 3x3 grid of light cells (omitting the center cell) where you can click on the cells to activate them, turning them green. When all the cells have been activated, they will be deactivated one by one in the reverse order they were activated with a 300ms interval in between.
State Management:
Two states are utilized in the component: order, representing the sequence of cells clicked, and isDeactivating, indicating whether the deactivation process is ongoing.

Assuming we flatten the 2D config array into a single dimension, each cell will correspond to an index. We can store this list of indices in the order array, adding to it when a cell is clicked. 
Notes:
activateCells function adds the clicked cell's index to the order array and initiates deactivation if all cells are activated.
deactivateCells function removes cells from the order array at intervals, simulating deactivation, and resets the deactivation process when completed.
Flatten the array using the flat() method to simplify iteration over individual cells regardless of the grid's dimensions.
Use span element to maintain grid structure when cell values are falsy (e.g., 0), ensuring proper positioning of other cells.
Accessibility:
To enhance accessibility and user experience:
Use button for grid cells to enable keyboard navigation and activation
Assign aria-labels to buttons, using column and row numbers for clarity
Disable buttons for activated or deactivating cells to prevent focus and interaction. 
Demo:
  
 
Test Cases
1.
Renders the grid correctly, it should have 8 cells
2.
Activates cells upon click
3.
Deactivates cells after all activated
4.
Disables cells while deactivating
5.
Prevents multiple activations of same cell
