require("dotenv").config();
var shell = require("shelljs");

var endpoint = process.argv[2];
if (endpoint && endpoint.length) {
    console.log(`Generating file types for endpoint ${process.argv[2]}`)

    shell.exec(`apollo codegen:generate "__generated__" --addTypename --outputFlat --target=typescript --endpoint="${process.argv[2]}" --header="Authorization: Bearer ${process.env.DATOCMS_TOKEN}" --includes="**/*.graphql"`)
} else {
    console.error("No endpoint was provided.")
}

