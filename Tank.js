class Tank {
  constructor(color) {
    this.color = color;
    this.direction = "up" ;
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
    if (localStorage.getItem('player_tank_top') !== null) {
        var top = localStorage.getItem('player_tank_top')
        this.dom.style.top = top;
    }
    this.dom.style.left = 0;
    if (localStorage.getItem('player_tank_left') !== null) {
        var left = localStorage.getItem('player_tank_left')
        this.dom.style.left = left;
    }
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
    this.save();
  }
  turnRight(){
      this.dom.style.transform = "rotate(90deg)";
      this.direction = "right";
      this.save();
  }
  turnDown(){
    this.dom.style.transform = "rotate(180deg)";
    this.direction = "down";
    this.save();
  }
  turnLeft(){
    this.dom.style.transform = "rotate(270deg)";
    this.direction = "left";
    this.save();
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
        this.save();
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
        this.save();
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
        this.save();
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
        this.save();
  }

//////////////////////////////////////
 save(){
   let top =  this.dom.style.top ;
   let left =  this.dom.style.left ;
   let dir =  this.direction ;
   let culoarea =  this.color ;
   localStorage.setItem('player_tank_top',top);
   localStorage.setItem('player_tank_left',left);
   localStorage.setItem('player_tank_direction',dir);
   localStorage.setItem('player_tank_color',culoarea);

   if (localStorage.getItem('player_tank_direction') !== null ) {
     let d = localStorage.getItem('player_tank_direction');
     this.direction = d;
   }

  // aici trebuie de salvat coordonatele, directia , culoarea tankului
  // localStorage.setItem()
  // 'player_tank_top' ->
  // 'player_tank_left' ->
  // 'player_tank_direction' ->
  // 'player_tank_color' ->
 // dupa fiecare miscare save
    // aici trebuie de restaurate coordonatele directia , culoarea tankului
    // localStorage.setItem()

  };

}
