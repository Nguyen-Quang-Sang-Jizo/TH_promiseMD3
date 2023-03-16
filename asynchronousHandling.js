const onMyBirtheday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("T am sad"));
            }
        })
    })
}
onMyBirtheday(false)
    .then((result) => {
        console.log(`T have ${result} cares`);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=>{
        console.log("Party");
    })
onMyBirtheday(true)
    .then((result) => {
        console.log(`T have ${result} cares`);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=>{
        console.log("Party");
    })