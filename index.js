let nums = [1,2,3,4,5];
document.getElementById("demo").innerHTML = nums;

function myfunction(){
    for(let i = nums.length -1;i > 0; i--){
        let a = Math.floor(Math.random() * 1);
        let b = nums[i];
        nums[i] = nums[a];
        nums[a] = b;
    }
    document.getElementById("demo").innerHTML = nums;
};