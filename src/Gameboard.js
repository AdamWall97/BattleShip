const gameboardFactory = () => {

    const ships = [];
    var isSunk = false;

    const getLength = () => length;
    const getisSunk = () => isSunk;

    const placeShip = (startx,starty,direction,length) => {
        var ship = shipFactory(length);
        ships.push(ship);
        startLoc = findboardCoor(startx,starty);
        const shipCor = addShiptoCoor(startLoc,direction,ship);
        ships.push([ship,shipCor]);
    };

    const addShiptoCoor = (start,dir,ship) => {
        const shipCor = [];
        if (dir == "l") {
            for(let i = 0;i < ship.length;i++){
                shipCor.push(start-i);
            }
        }
        //Create ship to right
        if (dir == "r") {
            for(let i = 0;i < ship.length;i++){
                shipCor.push(start+i);
            }
        }
        //Create ship to go up
        if (dir == "u") {
            for(let i = 0;i < ship.length;i++){
                shipCor.push(start-(i*10));
            }
        }
        //Create ship to go down
        if (dir == "d") {
            for(let i = 0;i < ship.length;i++){
                shipCor.push(start+(i*10));
            }
        }
        return shipCor;
    }

    

}; 

function findboardCoor(x,y) {
    return x + (y*10);
}