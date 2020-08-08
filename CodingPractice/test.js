const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(1000)
.then(() => console.log("Done waiting 1 seconds"))
.then(() => {
    console.log("Task 1");
    //throw new Error("Failure in Task 1");
    return "Task 1 result";
})
.then((x) => {
    console.log(`Task 2, input:${x}`);
    //throw new Error("Failure in Task 1");
    return "Task 2 result";
})
.then((x) => {
    console.log(`Task 3, input:${x}`);
    //throw new Error("Failure in Task 1");
    return "Task 3 result";
})
.catch(e => console.log(`Failure occurred: ${e}`))
.then((x) => {
    console.log(`After catch, input:${x}`);
    //throw new Error("Failure in Task 1");
    return "Task 1 result";
})