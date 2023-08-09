document.querySelector('.btn').addEventListener('click', calc)

function calc() {
    const entry = parseFloat(document.getElementById('entry_price').value);
    const exit = parseFloat(document.getElementById('exit_price').value);
    const quantity = parseFloat(document.getElementById('quantity').value);

    if(!entry || !exit || !quantity) {
        return false;
    }


    const pnl = (exit-entry) * quantity;
    const roe = (pnl / entry) /quantity * 100;


    const doc_pnl = document.querySelector('.pnl1')
    const doc_roe = document.querySelector('.pnl2')
    if(pnl > 0) {
        doc_pnl.classList.add('green_txt')
        doc_roe.classList.add('green_txt')
    } else {
        if(doc_pnl.classList.contains('green_txt')) {
            doc_pnl.classList.remove('green_txt')
            doc_roe.classList.remove('green_txt')
        }
        doc_pnl.classList.add('red_txt')
        doc_roe.classList.add('red_txt')
    }
    doc_pnl.textContent = pnl.toFixed(2) +' EGP'
    doc_roe.textContent = roe.toFixed(2) +' %';

}