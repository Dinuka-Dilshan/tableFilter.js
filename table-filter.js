//fun.js
function getByID(elementID) {
    return document.getElementById(elementID);
}

function easeFilterDataTable(searchBoxID, tableID, filterColumnIndex) {
    document.getElementById(searchBoxID).addEventListener('keyup', () => {
        var input, filter, table, tr, td, i, txtValue;
        input = getByID(searchBoxID);
        filter = input.value.toUpperCase();
        table = getByID(tableID);
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[filterColumnIndex];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });
}

export {easeFilterDataTable}

