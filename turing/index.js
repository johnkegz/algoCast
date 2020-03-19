const numOffices = (rows, columns, grid) => {
    let result = 0;
    // return console.log("yea", grid);
    let param;
    let inner;
    for(param = 0; param < grid.length; param++){
        let count = 0;
        for(inner = 0; inner < grid[param].length; inner++){
            if(grid[param][inner] === 1){
                result = result + 1;
            }
            if(grid[param][inner] === 1 && grid[param][inner + 1] === 1){
                result = result - 1;
            }
            if(grid[param-1] !== undefined && grid[param][inner] === 1 && grid[param-1][inner] && grid[param][inner - 1] !== 1){
                result = result - 1;
            }
            // if(grid[param-1] !== undefined && grid[param][inner] === 1 && grid[param-1][inner]){
            //     console.log("grid[param] ++", grid[param]);
            //     console.log("result ++", result);
            //     result = result - 1;
            // }
            // if(param > 0 && inner > -1 && inner < grid[param].length && grid[param-1][inner] === 1 && grid[param][inner] === 1){
            //     result = result - 1;
            // }
        }
    }

    // for(param = 0; param < grid.length; param++){
    //     for(inner = 0; inner < grid[param].length; inner++){
    //         if(grid[param-1] !== undefined && grid[param][inner] === 1 && grid[param-1][inner] && grid[param][inner - 1] !== 1){
                
    //             result = result - 1;
    //         }
    //     }
    // }
    return result;
}
const grid = [[1, 1, 0, 0, 0],
	 [1, 1, 0, 0, 0],
	 [0, 0, 1, 0, 0],
	 [0, 0, 0, 1, 1]]
const grid2 = [[1,1,1,1,1],
[1,0,0,0,1],
[1,0,0,0,0],
[1,1,1,0,1]]

const grid3 = [
    [1,1,0,0,0],
[1,1,0,0,0],
[0,0,1,0,0],
[0,0,0,1,1]
]
console.log(numOffices(4, 5, grid));
console.log(numOffices(4, 5, grid2));
console.log(numOffices(4, 5, grid3));