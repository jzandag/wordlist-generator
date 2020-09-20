const fs = require('fs');

const list = ["0", "1","2","3","4","5","6","7","8","9"];

//Poor implementation for wordlist 
//1st try
const worldlist1 = () => {
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

//2nd try
for(const e1 of list){
    for(const e2 of list){
        for(const e3 of list){
            for(const e4 of list){
                for(const e5 of list){
                    fs.appendFileSync('./out/mywordlist3.txt', "PLDTWIFI" +e1 + e2+ e3+ e4 + e5 + "\n", (err)=> {
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

module.exports = {

}