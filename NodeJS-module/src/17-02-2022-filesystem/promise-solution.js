function validar(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Olá, ${name}`);
        }, 2000);
    });
}

validar('Lucas').then((res) => { console.log(res); });