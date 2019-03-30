function RandomArray(rows, cols) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr.push([]);
        arr[i].push(new Array(cols));

        for (var j = 0; j < cols; j++) {
            arr[i][j] = Math.random();
        }
    }
    console.log(arr);
    return arr;
}


function htmlTable(d) {
    var data = d;
    var html = '<table><thead><tr></tr></thead><tbody>';

    for (var i = 0, len = data.length; i < len; ++i) {
        html += '<tr>';
        for (var j = 0, rowLen = data[i].length; j < rowLen; ++j) {
            html += '<td>' + data[i][j] + '</td>';
        }
        html += "</tr>";
    }

    $(html).appendTo('#div1');
}
