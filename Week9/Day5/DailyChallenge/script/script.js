const elementsReference = () => {
    const form = document.forms[0]
}

const elements = {
    form,
    from: form.elements.from,
    to: from.elements.to,
    number: form.elements.number,
    output: document.querySelector('.output')
}


return () => elements


}

const API =
    'http://api.currencylayer.com/live?' +
    'access_key=6b543e9294a71d26a6606f5449cf71a6' +
    '&format=1'

// function to retrieve country names based on their currency codes


const fetchCountryList = async () => {
    try {
        const res = await fetch('https://openexchangerates.org/api/currencies.json')
        const data = await res.json()

        return data
    } catch (err) {
        throw err
    }
}

// function to retrieve list of conversion rates with USD as base
const fetchConversionRates = async () => {
    try {
        const res = await fetch(API)
        const rates = await res.json()

        return rates
    } catch (err) {
        throw err
    }
}