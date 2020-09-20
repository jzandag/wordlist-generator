const yargs = require('yargs');
const { wlNumeric, wlAlpha } = require('./service/wordlist')

// Customize yargs version 
yargs.version('1.1.0')

//yargs command
yargs.command({
    command: 'generate',
    describe: 'Generate wordlist',
    builder: {
        type: {
            describe: 'wordlist type',
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: 'File name for thw generated type',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        switch(argv.type){
            case 'alpha':
                wlAlpha(argv.fileName);
                break;
            case 'numeric':
                wlNumeric(argv.fileName);
                break;
            default: 
                console.log('Invalid type!!! try again')
        }
    }
})

yargs.parse()