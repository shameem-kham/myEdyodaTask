// Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerOfHanoi(numDisks, fromRod, toRod, auxRod) {
    if (numDisks === 1) {
      console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`);
      return;
    }
    towerOfHanoi(numDisks - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${numDisks} from rod ${fromRod} to rod ${toRod}`);
    towerOfHanoi(numDisks - 1, auxRod, toRod, fromRod);
  }
  
  // Example usage
  towerOfHanoi(3, 'A', 'C', 'B');
  