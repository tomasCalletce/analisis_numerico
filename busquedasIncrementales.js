

const busquedasIncrementales = (xInicial,delta,maxIter) => {
    const arr = []
    const fx = (x)=> x**3 -7.51*x**2 + 18.4239*x - 14.8331
    const grado = 3
    let iter = 0;
    let a = xInicial;
    while(iter < grado){
        let fx0 = fx(a)
        if(fx0 == 0) return "x0 es raiz"
        let x0 = a
        let x1 = a + delta
        let fx1 = fx(x1)

        while(fx(x1)*fx(x0) > 0 && maxIter != 0){
            x0 = x1
            fx0 = fx(x0)
            x1 = x1 + delta
            fx1 = fx(x1)
            maxIter--
        }

        if(fx1 == 0) arr.push(x0 + " es raiz")
        if(fx(x1)*fx(x0) < 0) arr.push("raiz entre " + x0 + " y " + x1)
        iter++
        a = x1
    }
    return arr
}

console.log(busquedasIncrementales(0,.001,10000))
