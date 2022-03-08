const shipFactory = (length) => {

    var hitChart = Array(length).fill("");
    var isSunk = false;

    const getLength = () => length;
    const getisSunk = () => isSunk;

    const hit = (location) => {
        hitChart[location] = "x";
    };

    const checkSink = () => {
        for (let i =0; i < hitChart.length;i++){
            if(hitchart[i] == ""){
                return false;
            }
        }
        return true;
    };

};  