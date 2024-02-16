//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){ 
       this.name = name;
       this.mass = mass; //mass is in kg
       this.scores = scores; // stored in array
    }
    addScore(newScore) {
        this.scores.push(newScore);
        return this.scores;  
        }

    avgScore() {
            let sum = 0;
            for(let scores of this.scores){
                sum += scores;
            }
        let avg = sum/ this.scores.length;
        return Math.round(avg*10)/10;  
    }

    status() {
        let avgScore = this.avgScore()
        if (avgScore >= 90) {
          return "Accepted";
        } else if (avgScore >= 80 && avgScore <= 89) {
          return "Reserve";
        } else if (avgScore >= 70 && avgScore <= 79) {
          return "Probationary";
        } else {
          return "Rejected";
        }
    }
}


 let  bubbaBear = new CrewCandidate('Bubba Bear', 135,  [88, 85, 90]);
 let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
 let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
 
 
 console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.avgScore()}% and has a status of ${bubbaBear.status()}.`);
 console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.avgScore()}% and has a status of ${merryMaltese.status()}.`);
 console.log(`${gladGator.name} earned an average test score of ${gladGator.avgScore()}% and has a status of ${gladGator.status()}.`);

