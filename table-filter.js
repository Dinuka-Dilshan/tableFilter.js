//fun.js
function getByID(elementID) {
    return document.getElementById(elementID);
}

function easeFilterDataTable(searchBoxID, tableID) {
  document.getElementById(searchBoxID).addEventListener("keyup", () => {
    var input, filter, table, tr, td, i;
    input = document.getElementById(searchBoxID);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableID);
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var j;
      var rowContainsFilter = false;
      for (j = 0; j < cells.length; j++) {
        if (cells[j]) {
          if (cells[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            rowContainsFilter = true;
            continue;
          }
        }
      }

      if (!rowContainsFilter) {
        rows[i].style.display = "none";
      } else {
        rows[i].style.display = "";
      }
    }
  });
}

export {easeFilterDataTable}

