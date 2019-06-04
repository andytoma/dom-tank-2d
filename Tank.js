class Tank {
  constructor(color) {
    this.color = color;
    this.direction = "up";
    if (this.color == "green") {
      var y = 0;
    }else if (this.color == "blue") {
      var y = -84;
    }
    this.keyframes = [
      [-84*1,y],
      [-84*2,y],
      [-84*3,y],
      [-84*4,y],
      [-84*5,y],
      [-84*6,y],
      [-84*7,y],
      [ 0,y-84],
    ];
  }

  render(){
    this.dom = document.createElement('div');
    this.dom.className = "tank";
    this.dom.style.top = 0;
    this.dom.style.left = 0;
    game_map.appendChild( this.dom );
    this.animate();
  }

  animate(){
    this.dom.style.backgroundPosition = `${this.keyframes[0][0]}px ${this.keyframes[0][1]}px` ;
    this.keyframes.unshift( this.keyframes.pop() );
  }

  turnUp(){
    this.dom.style.transform = "rotate(0deg)";
    this.direction = "up";
  }
  turnRight(){
      this.dom.style.transform = "rotate(90deg)";
      this.direction = "right";
  }
  turnDown(){
    this.dom.style.transform = "rotate(180deg)";
    this.direction = "down";
  }
  turnLeft(){
    this.dom.style.transform = "rotate(270deg)";
    this.direction = "left";
  }

  moveUp(){
    if (this.direction != "up") {
      this.turnUp();
      return;
    }
    this.animate();
    let top = parseInt( this.dom.style.top );
        top -= 5;
    this.dom.style.top = `${top}px`;
  }
  moveRight(){
    if (this.direction != "right") {
      this.turnRight();
      return;
    }
    this.animate();
      let left = parseInt( this.dom.style.left );
          left += 5;
      this.dom.style.left = `${left}px`;
  }
  moveDown(){
    if (this.direction != "down") {
      this.turnDown();
      return;
    }
    this.animate();
    let top = parseInt( this.dom.style.top );
        top += 5;
    this.dom.style.top = `${top}px`;
  }
  moveLeft(){
    if (this.direction != "left") {
      this.turnLeft();
      return;
    }
    this.animate();
    let left = parseInt( this.dom.style.left );
        left -= 5;
    this.dom.style.left = `${left}px`;
  }

//////////////////////////////////////
save(){
  // aici trebuie de salvat coordonatele directia , culoarea tankului
  // localStorage.setItem()
  // 'player_tank_top' ->
  // 'player_tank_left' ->
  // 'player_tank_direction' ->
  // 'player_tank_color' ->
 // dupa fiecare miscare save
  restore(){
    // aici trebuie de restaurate coordonatele directia , culoarea tankului
    // localStorage.setItem()

  }

}


}
