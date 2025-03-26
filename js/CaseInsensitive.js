/*Case Insensitive*/

export function caseInsensitive(StringToChange){
    return(StringToChange.toUpperCase().slice(0,1) + StringToChange.toLowerCase().slice(1))
}
