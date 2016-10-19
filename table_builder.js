//Add and delete rows from the samples table.

// function addRow(tableID) {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;
//     if(rowCount < 6){                           // limit the user from creating fields more than your limits
//         var row = table.insertRow(rowCount);
//         var colCount = table.rows[0].cells.length;
//         for(var i=0; i<colCount; i++) {
//             var newrow = row.insertCell(i);
//             innerHTML = table.rows[0].cells[i].innerHTML
//             // innerHTML['name'] = "Junk";
//             // console.log(innerHTML);
//             // newrow.innerHTML = innerHTML;
//             newrow.innerHTML = table.rows[0].cells[i].innerHTML;

//         }
//     }else{
//          alert("For orders > 6 samples, please consider using the downloadable submission form.");
               
//     }
// }


// function deleteRow(tableID) {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;
//     for(var i=0; i<rowCount; i++) {
//         var row = table.rows[i];
//         var chkbox = row.cells[0].childNodes[0];
//         if(null != chkbox && true == chkbox.checked) {
            // if(rowCount <= 1) {                         // limit the user from removing all the fields
            //     alert("At least one sample must be included.");
            //     break;
            // }
//             table.deleteRow(i);
//             rowCount--;
//             i--;
//         }
//     }
// }


function deleteRow(row)
{

    var index=row.parentNode.parentNode.rowIndex;
    document.getElementById('SampleTable').deleteRow(index);

// if( index > 1){
//     alert("At least one sample must be included.");
//     break;
// }
// else{
//     document.getElementById('SampleTable').deleteRow(index);
// }
}


function insRow()
{
    console.log( 'hi');
    var x=document.getElementById('SampleTable');
    var new_row = x.rows[1].cloneNode(true);
    var len = x.rows.length;
    // new_row.cells[0].innerHTML = len;
    // var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    // inp1.id += len;
    // inp1.value = '';
    // x.appendChild( new_row );


        if(len < 6+1){                           // limit the user from creating fields more than your limits
        for(var i=0; i<len; i++) {
        new_row.cells[0].innerHTML = len;
            var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    inp1.id += len;
    inp1.value = '';
    x.appendChild( new_row );
        }
    }else{
         alert("For orders > 6 samples, please consider using the downloadable submission form.");
               
    }
}


