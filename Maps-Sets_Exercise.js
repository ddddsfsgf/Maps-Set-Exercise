new Set([1,1,2,2,3,4])//{1,2,3,4}

// [...new Set("referee")].join("")//"ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{Array(3) => true, Array(3) => false}

const hasDuplicate = arr => new Set(arr).size !== arr.length;

function isVowel(char){
    return "aeiou".includes(char);
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCased = char.toLowerCase();
        if(isVowel(lowerCased)){
            if(vowelMap.has(lowerCased)){
                vowelMap.set(lowerCased, vowelMap.get(lowerCased) + 1)
            }else{
                vowelMap.set(lowerCased, 1)
            }
        }
    }
    return vowelMap;
}