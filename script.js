const score= JSON.parse(localStorage.getItem('score')) || 
        {
          wins:0,
          loose:0,
          tie:0
        };

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if(result === 'You win.'){
          score.wins++;
          resultShow();
          move();
          updateScore();
        }
        else if(result==='You lose.'){
          score.loose++;
          resultShow();
          move();
          updateScore();
        }
        else if(result==='Tie.'){
          score.tie++;
          resultShow();
          move();
          updateScore();
        }

        function move(){
          document.getElementById('para2').innerHTML=`You <img src="${playerMove}-emoji.png" class="small-emoji"/>        <img src="${computerMove}-emoji.png" class="small-emoji"/> Computer`;
        }

        function resultShow(){
          document.getElementById('para').innerHTML=result;
        }

        localStorage.setItem('score',JSON.stringify(score));

//         alert(`${result} You picked ${playerMove}. Computer picked ${computerMove}. 
// wins: ${score.wins}, Losses: ${score.loose}, Ties: ${score.tie}`);
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }

      function updateScore(){
        document.getElementById('para3').innerHTML=`Wins: ${score.wins}, Looses: ${score.loose}, Ties: ${score.tie}`;
      }
