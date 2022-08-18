// Code your solution in this file!

// const headquarters= 42;

function distanceFromHqInBlocks(blocks){
    if(Number(blocks) >=42){
        return Number(blocks) -42;
    }
    else{
        return 42 - Number(blocks) ;
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

// function distanceFromHqInFeet(destination, start=42){
//     if(destination >=42){
//         let blocks= destination-start;
//         let distance = blocks*264;

//         return distance;
//     }
//     else{
//         let blocks= start-destination;
//         let distance= blocks*264;

//         return distance;
//     }
// }function distanceFromHqInFeet(destination, start=42){
//     if(destination >=42){
//         let blocks= destination-start;
//         let distance = blocks*264;

//         return distance;
//     }
//     else{
//         let blocks= start-destination;
//         let distance= blocks*264;

//         return distance;
//     }
// }

function distanceFromHqInFeet(blocks){
    let distanceInBlocks = distanceFromHqInBlocks(blocks)

    return distanceInBlocks*264;
}
 

distanceFromHqInFeet(43,42);
distanceFromHqInFeet(50,42);
distanceFromHqInFeet(34.42);

function distanceTravelledInFeet(destination, start){
    if(destination >= start){
        let blocks= destination-start;
        let distance = blocks*264;

        return distance;
    }
    else{
        let blocks= start-destination;
        let distance= blocks*264;

        return distance;
    }

}
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);

function calculatesFarePrice(start, destination){
 
    let distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet<=400){
        return 0;
    }
    else if(distanceInFeet>400 && distanceInFeet<=2000){
        return((distanceInFeet-400)*0.02)
    }
    else if(distanceInFeet>2000 && distanceInFeet<=2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }

    // function distanceTravelledInFeet(destination, start){
    //     if(destination >= start){
    //         let blocks= destination-start;
    //         let distance = blocks*264;
    
    //         return distance;
    //     }
    //     else{
    //         let blocks= start-destination;
    //         let distance= blocks*264;
    
    //         return distance;
    //     }

    // }

    // return distanceTravelledInFeet(start, destination)

    // if (distance>)


    

}