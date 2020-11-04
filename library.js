function bounceOff(angry, bird){

    if (angry.x - bird.x < bird.width/2 + angry.width/2
      && bird.x - angry.x < bird.width/2 + angry.width/2) {
    angry.velocityX = angry.velocityX * (-1);
    bird.velocityX = bird.velocityX * (-1);
  }
  
  if (angry.y - bird.y < bird.height/2 + angry.height/2
    && bird.y - angry.y < bird.height/2 + angry.height/2){
    angry.velocityY = angry.velocityY * (-1);
    bird.velocityY = bird.velocityY * (-1);
  }
  
  }