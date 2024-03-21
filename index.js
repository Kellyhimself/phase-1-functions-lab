// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    return pickupLocation > 42 ? pickupLocation-42 : 42-pickupLocation;

}


function distanceFromHqInFeet(pickupLocation){
        const dInBlock = distanceFromHqInBlocks(pickupLocation)
        return dInBlock * 264;
    }
function  distanceTravelledInFeet(start, destination){
    
    return destination > start ? ((destination - start) * 264) : ((start - destination) * 264);
    
}


function calculatesFarePrice(start, destination){
        const distance = distanceTravelledInFeet(start, destination);
        if (distance > 2500){
            return 'cannot travel that far';
        }
        if (distance<400){
            return 0;
        }
        else if(distance > 400 && distance < 2000){
            const toBeCharged = distance - 400

            return toBeCharged*0.02;
        }
        else if(distance > 2000 && distance <= 2500){

            return 25;
        }
        
  
    }
