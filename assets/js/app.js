
    const apiData  = async () =>{
        const url = 'https://jsonplaceholder.typicode.com/photos';
        try {
            const res = await fetch(url);
            const data =  await res.json();
            return albumes = data.filter(album => album.id <= 20);
        }
        catch (err) {
            console.log(err);
        }
    }

    const retorno = () =>{
        return new Promise((resolve, reject) => {
            albumes = apiData()
            setTimeout(() => {
                if (albumes){
                    resolve(albumes);
                } else {
                    reject('No se encontraron post')
                }
            }, 3000);
        })
    }
    retorno()
        .then((result) => {console.log(result)})
        .catch((err) => {console.log(err)});