
 var doSomething = function (work){
       console.log(work);
}

var exercise = { benchpress:" 4 sets ", squats: " 2 sets "}

doSomething.call(exercise, exercise.squats);
doSomething.apply(exercise, ['crunches']);
console.log(exercise.squats)