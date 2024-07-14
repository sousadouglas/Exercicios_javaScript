let nums=[8,5,7,6,4,6,2,1]

for(let y in nums){
    if(y==5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)

}



for(let y in nums){
    if(y==5){
        break
    }
    console.log(`${y} = ${nums[y]}`)

}