let firstHeading = document.getElementById("firstHeading");
let liveChart = document.createElement("canvas");
liveChart.setAttribute("id", "myChart");
firstHeading.appendChild(liveChart);

let chart1 = document.getElementById("myChart");
let firstChart = new Chart(chart1, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            data: [],
            borderWidth: 0.5,
            backgroundColor: "orange",
            borderColor: "rgb(30,144,255",
            label: "liveCount",
        }, ],
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
    },
});

// fetch  to get new data
let getData = function() {
    $.ajax({
        url: "https://canvasjs.com/services/data/datapoints.php",
        success: function(data) {
            console.log(data);

            labels = [];
            values = [];
            for (i = 0; i < data.length; i++) {
                firstChart.data.labels.push(data[0][0]++);
                firstChart.data.datasets[0].data.push(data[0][0]++);
            }

            firstChart.update();
        },
    });
};

// get new data every 1 seconds
setInterval(getData, 1000);

//table 1 Chart//
let table1 = document.getElementById("table1");
let firstTableChart = document.createElement("canvas");

firstTableChart.setAttribute("id", "firstTableChart");
firstTableChart.style.width = "400px";
firstTableChart.style.height = "300px";
table1.appendChild(firstTableChart);
table1.before(firstTableChart);

function BuildChart(labels, values, chartTitle) {
    let chart2 = document.getElementById("firstTableChart").getContext("2d");
    let table1Chart = new Chart(chart2, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                    label: "2003",
                    data: values,
                    backgroundColor: ["rgb(100,149,237)"],
                    borderColor: ["lightblue"],
                    borderWidth: 2,
                },
                {
                    label: "2004",
                    data: values1,
                    backgroundColor: ["orange"],
                    borderColor: ["rgb(100,149,237)"],
                    borderWidth: 2,
                },
                {
                    label: "2005",
                    data: values2,
                    backgroundColor: ["rgb(100,149,237)"],
                    borderColor: ["orange"],
                    borderWidth: 2,
                },
                {
                    label: "2006",
                    data: values3,
                    backgroundColor: ["rgb(100,149,237)"],
                    borderColor: ["rgb(100,149,237)"],
                    borderWidth: 2, //
                },
                {
                    label: "2007", // Name the series
                    data: values4, // Our values
                    backgroundColor: [
                        // Specify custom colors
                        "orange",
                    ],
                    borderColor: [
                        // Add custom color borders
                        "rgb(100,149,237)",
                    ],
                    borderWidth: 2, // Specify bar border width
                },
                {
                    label: "2008",
                    data: values5,
                    backgroundColor: ["rgb(100,149,237)"],
                    borderColor: ["orange"],
                    borderWidth: 2,
                },
                {
                    label: "2009",
                    data: values6,
                    backgroundColor: ["rgb(100,149,237)"],
                    borderColor: ["rgb(100,149,237)"],
                    borderWidth: 2,
                },
                {
                    label: "2010",
                    data: values7,
                    backgroundColor: ["orange"],
                    borderColor: ["rgb(100,149,237)"],
                    borderWidth: 2,
                },
                {
                    label: "2011",
                    data: values8,
                    backgroundColor: ["rgb(100,149,237)"],
                    borderColor: ["orange"],
                    borderWidth: 2,
                },
                {
                    label: "2012",
                    data: values9,
                    backgroundColor: ["rgb(100,149,237)"],
                    borderColor: ["rgb(100,149,237)"],
                    borderWidth: 2,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "index",
                    intersect: false,
                },
            },

            scales: {
                y: {
                    max: 10,
                    min: 0,
                    ticks: {
                        stepSize: 1,
                    },
                },
            },
        },
    });
    removeComma();
    return table1Chart;
}
let row1 = table1.getElementsByTagName("th")[2];

row1.innerHTML = "Number";

console.log(row1);

let countryListJson = [];
let data1json = [];
let data2json = [];
let data3json = [];
let data4json = [];
let data5json = [];
let data6json = [];
let data7json = [];
let data8json = [];
let data9json = [];
let data10json = [];
let data11json = [];
let data12json = [];

let headers = [];
for (let i = 0; i < table1.rows[0].cells.length; i++) {
    headers[i] = table1.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, "");
}
console.log(headers);

// Go through cells
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[1]] = tableRow.cells[1].innerHTML;
    }

    countryListJson.push(rowData);
}
console.log(countryListJson);
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 3; j < tableRow.cells.length; j++) {
        rowData[headers[3]] = tableRow.cells[2].innerHTML;
    }
    data1json.push(rowData);
}
console.log(data1json);

for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[3].innerHTML;
    }
    data2json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[4].innerHTML;
    }
    data3json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[5].innerHTML;
    }
    data4json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[6].innerHTML;
    }
    data5json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[7].innerHTML;
    }
    data6json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (var j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[8].innerHTML;
    }
    data7json.push(rowData);
}
for (var i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (var j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[9].innerHTML;
    }
    data8json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (var j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[10].innerHTML;
    }
    data9json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[11].innerHTML;
    }
    data10json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (let j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[12].innerHTML;
    }
    data11json.push(rowData);
}
for (let i = 2; i < table1.rows.length; i++) {
    let tableRow = table1.rows[i];
    let rowData = {};
    for (var j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[2]] = tableRow.cells[12].innerHTML;
    }
    data12json.push(rowData);
}

function removeComma(decimal) {
    return parseFloat((decimal + "").replace(",", "."));
}

let labels = countryListJson.map(function(e) {
    return e.country;
});
console.log(labels);


let values = data1json.map(function(e) {
    return e.number;
});
console.log(values);
var values1 = data2json.map(function(e) {
    return e.number[1];
});
console.log(values1);
let values2 = data3json.map(function(e) {
    return e.number[1];
});
console.log(values2);
let values3 = data4json.map(function(e) {
    return e.number[0];
});
console.log(values3);
let values4 = data5json.map(function(e) {
    return e.number[3];
});
console.log(values4);
let values5 = data6json.map(function(e) {
    return e.number[3];
});
console.log(values5);
let values6 = data7json.map(function(e) {
    return e.number[2];
});
console.log(values6);
let values7 = data8json.map(function(e) {
    return e.number[3];
});
console.log(values7);
let values8 = data9json.map(function(e) {
    return e.number[2];
});
console.log(values8);
let values9 = data10json.map(function(e) {
    return e.number[1];
});
console.log(values9);
let values10 = data11json.map(function(e) {
    return e.number[1];
});
console.log(values10);
let values11 = data12json.map(function(e) {
    return e.number[3];
});
console.log(values11);

let chart = BuildChart(labels, values, "Crimes recorded by the police");
//table2 chart//

let table2 = document.getElementById("table2");

let SecondTableChart = document.createElement("canvas");
SecondTableChart.setAttribute("id", "mySecondTable");
table2.appendChild(SecondTableChart);
table2.before(SecondTableChart);

let countryTable2 = [];
let date1Table2 = [];
let date2Table2 = [];
for (let i = 1; i < table2.rows.length; i++) {
    let row = table2.rows[i];
    let colCountry = row.cells[1].innerText;
    console.log(colCountry);
    countryTable2.push(colCountry);
}
for (let i = 1; i < table2.rows.length; i++) {
    let row = table2.rows[i];
    let date1 = row.cells[2].innerText;
    console.log(date1);
    date1Table2.push(date1);
}
for (let i = 1; i < table2.rows.length; i++) {
    let row = table2.rows[i];
    let date2 = row.cells[3].innerText;
    console.log(date2);
    date2Table2.push(date2);
}

let secondChart = document.getElementById("mySecondTable");
let firstDate = {
    label: "2007_09",
    data: date1Table2,
    backgroundColor: "orange",
    borderColor: "orange",

    // yAxisID: "y-axis-density"
};
let secondDate = {
    label: "2010_12",
    data: date2Table2,
    backgroundColor: "rgb(100,149,237)",
    borderColor: "rgb(100,149,237)",
    borderWidth: 1,

};
let secondTableData = {
    labels: countryTable2,
    datasets: [firstDate, secondDate],
};

let lineChart = new Chart(secondChart, {
    type: "line",
    data: secondTableData,
});