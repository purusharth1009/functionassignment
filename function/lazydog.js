function replaceSpacesWithHyphens(statement) {
    return statement.replace(/ /g, "-");
}
var statement = "The quick brown fox jumps over the lazy dog";
var result = replaceSpacesWithHyphens(statement);
console.log(result);
