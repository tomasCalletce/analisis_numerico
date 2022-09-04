

const busquedasIncrementales = (xInicial,delta,maxIter) => {
    const fx = (x)=> x**3 -7.51*x**2 + 18.4239*x - 14.8331
    
    let fx0 = fx(xInicial)
    if(fx0 == 0) return "x0 es raiz"
    let x0 = xInicial
    let x1 = xInicial + delta
    let fx1 = fx(x1)

    while(fx(x1)*fx(x0) > 0 && maxIter != 0){
        x0 = x1
        fx0 = fx(x0)
        x1 = x1 + delta
        fx1 = fx(x1)
        maxIter--
    }

    if(fx1 == 0) return "x0 es raiz"
    if(fx(x1)*fx(x0) < 0) return "raiz entre " + x0 + " y " + x1;
    return "error maxIter"
    
}

console.log(busquedasIncrementales(0,.5,10000))
