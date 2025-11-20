const formatter = (local, currency, value) => {
    let formattedValue = new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
}

// Output to HTML
const printHTML = (finalTax) => {
    const taxTable = document.createElement("table");
    taxTable.innerHTML = `
        <tr>
            <td>Sum before taxe</td>
            <td>${finalTax.sum}</td>
        </tr>
        <tr>
            <td>Tax percentage</td>
            <td>${finalTax.percentage}</td>
        </tr>
        <tr>
            <td>Tax</td>
            <td>${finalTax.tax}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>${finalTax.total}</td>
        </tr>
    `;
    document.querySelector("main").append(taxTable);
}

const taxCalculator = (sum, percentage, local, currency, callback) => {
    let tax = sum * (percentage / 100);
    let total = sum + tax;

    const finalTax = {
        sum         :   formatter(local, currency, sum),
        percentage  :   percentage + "%",
        tax         :   formatter(local, currency, tax),
        total       :   formatter(local, currency, total),    
    }
    console.log(`
        sum before tax  :  ${formatter(local, currency, sum)}
        tax percentage  :  ${percentage}%
        tax             :  ${formatter(local, currency, tax)}%
        Total           :  ${formatter(local, currency, total)}%
    `);
    callback(finalTax);
}

taxCalculator(100, 18, "en-US", "USD", printHTML)