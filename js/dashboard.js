
const options = {
    chart: {
        type: 'area',
        height: 280
    },
    series: [{
        name: 'Daily sales',
        data: [52,125,210,150], // Datos de la gráfica
    }],
    xaxis: {
        categories: ['9:00 am','12:00 pm','03:00 pm','06:00 pm'], // Etiquetas en el eje X
        labels: {
            markers: {
                show: false,
                size: 4,
                shape: 'circle',
            }
        }
    },
    yaxis: {
        labels: {
            offsetX: -10,
            offsetY: 0,
        }
    },
    colors: ["#C8161D"],
    dataLabels: {
        enabled: false, // Desactiva las etiquetas de datos en los puntos
    },
    toolbar: {
        show: false, // Oculta las opciones de configuración
    },
};

// Crear la gráfica en el elemento con ID "areaChart"
const chart = new ApexCharts(document.querySelector("#areaChart"), options);

// Renderizar la gráfica
chart.render();


document.addEventListener("DOMContentLoaded", function () {
    const options = {
        chart: {
            type: "donut",
            height: 300,

        },
        series: [14, 26, 60],
        labels: ["Food", "Drink", "Others"],
        colors: ["#000000", "#FFCA40", "#C8161D"],
        legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: false,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "75%", // Ajusta el tamaño del anillo aquí

                },
            }
        }
        
    };

    const donutChart = new ApexCharts(document.querySelector("#donutChart"), options);
    donutChart.render();
});