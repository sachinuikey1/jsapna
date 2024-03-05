

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 3000);
        
    });
}

async function demo() {
    await getNum();
    await getNum();
    getNum();
}

demo();