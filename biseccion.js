// hay un error 

const biseccion = (x0,x1,tolerancia,maxIter) => {
    const fx = (x)=> x**3 -7.51*x**2 + 18.4239*x - 14.8331
    const med = (x,y) => (x+y)/2
    let fx0 = fx(x0)
    let fx1 = fx(x1)

    if(fx0 == 0) return x0 + " es raiz"
    if(fx1 == 0) return x1 + " es raiz"
    if(fx1*fx0 < 0){
        let xmed = med(x0,x1)
        let fmed = fx(med)
        let err = tolerancia + 1
        while(err > tolerancia && fx1 != 0 && fx0 != 0 && fmed != 0 && maxIter != 0){
            if(fx0*fmed < 0){
                x1 = xmed
                fx1 = fmed
            }else{
                x0 = xmed
                fx0 = fmed
            }
            let aux = xmed
            xmed = med(x0,x1)
            fmed = fx(med)
            err = Math.abs(xmed - aux)
            maxIter--
        }
        if(xmed == 0) return xmed + " es raiz"
        if(err < tolerancia) return "raiz es " + xmed + " con una tolerancia de " + tolerancia
        return "max iter"
    }else{
        return "invalid interval"
    }
    
}

console.log(biseccion(3,3.5,10**-5,1000))
