function utolsoSzamjegy(szam) {
    let elsoSzamjegye = szam%10;
    return elsoSzamjegye;
  }

function sorozat(n) {
    let lista  = [];
    console.log(lista.length)
    for (let index = 0; index < n; index++) {
        let szam = Math.floor(Math.random()* 99)+10;
        lista.push(utolsoSzamjegy(szam));
    }
    return lista
}





