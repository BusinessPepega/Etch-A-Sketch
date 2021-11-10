const n=16;
const grid = document.querySelector('.container');

function etch(n) {
   
    const size = 480 / n;

    grid.style.display = 'grid'; 
    grid.style.gridTemplateColumns = `repeat(${n}, ${size}px)`;
    grid.style.gridTemplateRows = `repeat(${n}, ${size}px)`;

    for (i=0; i<n**2; i++) {
    const divs = document.createElement('div');
    divs.classList.add('new');
    /*  divs.textContent = '!'; */
    divs.style.border = "thin dotted red"; 
    grid.appendChild(divs);
    };

    const blocks = document.querySelectorAll('.new');

    blocks.forEach(block =>{
    block.addEventListener('mouseover', event => event.target.style.backgroundColor = "black")
    });
}

const clrButton = document.querySelector('.clear');

etch(n);

clrButton.addEventListener('click', () => {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }

    const n = Math.abs(parseInt(prompt("Please enter desired number of blocks", "max size is 32")))
    
    n>32 ? etch(32) : etch(n);
    
  
    
    console.log(typeof(n));
  });