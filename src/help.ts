import meta from "../deno.json" with { type: "json" };

// TODO: Complete usage print out
// TODO: Beautify output

/**
 * Print the usage of the program
 */
export function printUsage() {
    console.log("");
    console.log("Usage: ...");
    console.log("Options:");
    console.log("  -c, --config      Set configuration options");
    console.log("  -h, --help        Show this help message");
    console.log("  -v, --version     Show the version number");
    console.log("");
}

/**
 * Print the version of the program
 */
export function printVersion() {
    console.log("");
    console.log("DCS Livery Builder", meta.version ? meta.version : "1.0.0");
    console.log("");
}
