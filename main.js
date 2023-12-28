const jokeCracker = {
    names: ['Jamie', 'Jude', 'Cristiano', 'Lionel', 'Marcus'],
    jokes: ['I used to have a handle on life, but then it broke', 
            'I was wondering why the frisbee kept getting bigger and bigger, but then it hit me,',
            'Don’t you hate it when someone answers their own questions? I do',
            'The problem with kleptomaniacs is that they always take things literally',
            'I can’t believe I got fired from the calendar factory. All I did was take a day off'],
    grade: ['Excellent', 'Good', 'Mid', 'bad', 'Terrible'],
}

const jokeCracking = obj => {
    let randomName = obj.names[Math.floor(Math.random() * obj.names.length)];
    let randomJoke = obj.jokes[Math.floor(Math.random() * obj.jokes.length)];
    let randomGrade = obj.grades[Math.floor(Math.random() * obj.grades.length)];
    return `${randomName} cracked a: ${randomJoke} joke, and I rated it ${randomGrade}`;
    
}

console.log(jokeCracking(jokeCracker));