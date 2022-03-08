const checkArrayTypes = (arr, type) => {
    for (const el of arr) {
        if (typeof el !== type) return false
    }
    return true
}

const makeAllCaps = (words) =>
    new Promise((resolve, reject) => {
        if (!checkArrayTypes(words, 'string')) {
            reject(new Error('Array contains non-string elements.'))
        }
        resolve(words.map((w) => w.toUpperCase()))
    })


    const sortWords = (words) =>
    new Promise((resolve, reject) => {
        if (!checkArrayTypes(words, 'string')) {
            reject(new Error('Array contains non-string elements.'))
        }

        resolve(words.sort())
    })
