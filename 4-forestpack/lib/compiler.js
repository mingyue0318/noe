const path = require("path");
const fs = require("fs");

module.exports = class Compiler {
    constructor(options){
        const { entry,output } = options
        this.entry = entry;
        this.output = output;
        this.modules = []
    }
    // 开始编译
    run(){}

    buildModule(filename, isEntry){

    }

    emitFiles(){}

}