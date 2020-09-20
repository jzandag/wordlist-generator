const fs = require('fs');

const list = ["1", "2", "3"];
const numeric = ["0", "1","2","3","4","5","6","7","8","9"];
const alphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
                "u","v","w","x","y","z"];
const alphaNumeric = [...numeric, ...alphabet];

//Poor implementation for wordlist 
//1st try
const wl123 = () => {
    list.map(l => {
        list.map(m => {
            list.map(k => {
                fs.appendFile('./out/mywordlist.txt', "PLDTWIFI" + l + m+ k + "\n", (err)=> {
                    if(err){
                        throw err;
                    }
                    console.log(l + m+ k);
                    console.log("saved!")
                })
            })
        })
    });
}

//2nd try 0-9 100k lines
const wlNumeric = (fileName) => {
    const file = 'mywordlist3.txt';
    for(const e1 of numeric){
        for(const e2 of numeric){
            for(const e3 of numeric){
                for(const e4 of numeric){
                    for(const e5 of numeric){
                        fs.appendFileSync(`./out/${fileName}`, e1 + e2+ e3+ e4 + e5 + "\n", (err)=> {
                            if(err){
                                throw err;
                            }
                            console.log(e1 + e2+ e3+e4+ e5);
                            console.log("saved!")
                        })
                    }
                }
            }
        }
    }
}

// alpha a-z
const wlAlpha = () => {
    const file = 'mywordlist4.txt';
    for(const e1 of alphabet){
        for(const e2 of alphabet){
            for(const e3 of alphabet){
                for(const e4 of alphabet){
                    for(const e5 of alphabet){
                        for(const e6 of alphabet){
                            for(const e7 of alphabet){
                                for(const e8 of alphabet){
                                    fs.appendFileSync(`./out/${file}`, 
                                        e1 + e2+ e3+ e4 + e5 + e6 + e7 + e8 + "\n", (err)=> {
                                        if(err){
                                            throw err;
                                        }
                                        console.log(e1 + e2+ e3+e4+ e5);
                                        console.log("saved!")
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
module.exports = {
    wlNumeric,
    wlAlpha
}