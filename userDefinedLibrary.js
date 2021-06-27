//function defination to check touching logic between any 2 objects
function isTouching(input1, input2) {
    if (input2.x - input1.x < input2.width / 2 + input1.width / 2 &&
        input1.x - input2.x < input2.width / 2 + input1.width / 2 &&
        input1.y - input2.y < input2.height / 2 + input1.height / 2 &&
        input2.y - input1.y < input2.height / 2 + input1.height / 2) {
        return true;
    }
    else {
        return false;
    }
}

//function definition to make any objects bounce off each other
function bounceOff(input1, input2) {
    if (input1.x - input2.x < input1.width / 2 + input2.width / 2 &&
        input2.x - input1.x < input1.width / 2 + input2.width / 2 &&
        input2.y - input1.y < input1.height / 2 + input2.height / 2 &&
        input1.y - input2.y < input1.height / 2 + input2.height / 2) {

        input1.velocityX = (-1) * (input1.velocityX);
        input1.velocityY = (-1) * (input1.velocityY);

        input2.velocityX = (-1) * (input2.velocityX);
        input2.velocityY = (-1) * (input2.velocityY);
    }
    else {
        input1.velocityX = (1) * (input1.velocityX);
        input1.velocityY = (1) * (input1.velocityY);

        input2.velocityX = (1) * (input2.velocityX);
        input2.velocityY = (1) * (input2.velocityY);
    }
}