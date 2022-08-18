function Introduction (name: string, birth: string): string {
    const array = birth.split("/", birth.length)
    const date = (array[0])
    const month = (array[1])
    const year = (array[2])

    return `Olá me chamo ${name}, nasci no dia ${date} do mês ${month} do ano de ${year}`
};

console.log(Introduction("Fabiana", "06/04/1993"))