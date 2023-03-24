#!/usr/bin/env node
const yargs = require("yargs");
const { runInitPrompts } = require("./run-prompts");
const { init } = require("./init");

yargs
    .usage("usage: nx [options]")
    .usage("usage: nx <command> [options]")
    .example("nx new niuxlib", "新建一个库 niuxlib")
    .alias("h", "help")
    .alias("v", "version")
    .command(
        ["new", "n"],
        "新建一个项目",
        function (yargs) {
            return yargs.option("name", {
                alias: "n",
                demand: false,
                default: "niux",
                describe: "your library name",
                type: "string",
            });
        },
        function (argv) {
            runInitPrompts(argv._[1], yargs.argv).then(function (answers) {
                init(argv, answers);
            });
        }
    )
    .epilog("copyright 2023-2023")
    .demandCommand().argv;