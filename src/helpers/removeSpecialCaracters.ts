export const removeSpecialCaracters = (str: string) => {

    if(str.includes('ç')) return str.replace('ç', 'c')
    if(str.includes('^')) return str.replace('^', 'c')

    return str
}