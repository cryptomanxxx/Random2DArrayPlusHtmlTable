function GetRandom(min, max) {
    var x = Math.random() * (max - min) + min;
    return x;
}

function ArraySelect(DataArray, row, column_start) {
    var Nr = DataArray.length;
    var Nc = DataArray[1].length;
    var D = [];

    for (var i = row; i < Nr; i++) {
        D.push(DataArray[i][column_start]);
    }
    return D;
}


function RandomWalk(rows, cols) {
    var arr = [];
    for (var i = 0; i <= rows; i++) {
        arr.push([]);
        arr[i].push(new Array(cols));    // creates 2D array 

        if (i == 0) {
            for (var j = 1; j <= cols; j++) {
                arr[i][j] = "Random Walk " + j;
            }
        }
        else if (i == 1) {
            for (var j = 1; j <= cols; j++) {
                arr[1][j] = 100;
            }
        }
        else {
            for (var j = 1; j <= cols; j++) {
                arr[i][j] = arr[i - 1][j] + GetRandom(-1, +1);
            }
        }
    }

    for (var i = 1; i <= rows; i++) {
        arr[i][0] = "Time-" + i;
    }

    arr[0][0] = "2D Array";
    console.log(arr);
    return arr;
    ;
}

function HtmlTable(d) {
    var data = d;
    var html = '<table><thead><tr></tr></thead><tbody>';

    for (var i = 0; i < data.length; i++) {
        html += '<tr>';
        for (var j = 0; j < data[i].length; j++) {
            html += '<td>' + data[i][j] + '</td>';
        }
        html += "</tr>";
    }
    $(html).appendTo('#div1');
}

function Plot(DD) {
    console.log("DD = " + DD);
    var xx = ArraySelect(DD, 1, 0);
    console.log("xx = " + xx);
    var Nc = DD[1].length - 1;
    console.log("Nc = " + Nc);

    var yy = [];
    var trace = [];
    var data = [];

    for (var j = 1; j <= Nc; j++) {
        yy[j] = ArraySelect(DD, 1, j);
        trace[j] = { x: xx, y: yy[j], name: 'Random Walk ' + j, type: 'scatter' };
        data.push(trace[j]);
        console.log(trace[j]);
    }
    Plotly.newPlot('div2', data, { showlegend: false, xaxis: { tickmode: "linear", dtick: 1 } }, { displayModeBar: false });
}

