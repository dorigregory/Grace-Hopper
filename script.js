
var question= "When did Grace retire, for the last time?";
document.getElementById("question").innerHTML=question; 

var answers=['1962', '1968','1986', '1990'];
var answerButtons=document.getElementsByClassName('quizButton');
var correct=2

for(var spot=0; spot<answers.length;spot++) 
{
        answerButtons[spot].innerHTML=answers[spot];

        answerButtons[spot].addEventListener('click', function() { disableAll();
            if(this.innerHTML==answers[correct]) {
                this.setAttribute('style', 'background-color: rgb(76,175,80);');
            } else {
                this.setAttribute('style', 'background-color: rgb(210,50,35);');
            }
            });
        }
function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:rgb(100,50,150);')
}

function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled', true);
    }
    }


