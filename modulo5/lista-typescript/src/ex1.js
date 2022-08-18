function Introduction(name, birth) {
    var array = birth.split("/", birth.length);
    var date = (array[0]);
    var month = (array[1]);
    var year = (array[2]);
    return "Ol\u00E1 me chamo ".concat(name, ", nasci no dia ").concat(date, " do m\u00EAs ").concat(month, " do ano de ").concat(year);
}
;
console.log(Introduction("Fabiana", "06/04/1993"));
