import { parseArgs, ParseOptions } from "@std/cli/parse-args";
import { printUsage, printVersion } from "./src/help.ts";

const options: ParseOptions = {
  boolean: ["help", "version"],
  alias: { help: "h", version: "v" },
};

const args = parseArgs(Deno.args, options);

if (args.help) {
  printUsage();
  Deno.exit();
} else if (args.version) {
  printVersion();
  Deno.exit();
}

// If no arguments are passed, and no work was done, print usage
printUsage();
Deno.exit();
