const promise1 = Promise.resolve(1500)
const promise2 = 0.5
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'There are many unfulfiled promises')
})
// expected output: Array [1500, 0.5, "There are many unfulfiled promises"]

const awaitAll = (promises) =>
    new Promise(async (resolve, reject) => {
        const results = []

        try {
            for await (const data of promises) {
                results.push(data)

                if (results.length === promises.length) {
                    resolve(results)
                }
            }
        } catch (err) {
            reject(err.message)
        }
    })

awaitAll([promise1, promise2, promise3]).then((x) => console.log(x))