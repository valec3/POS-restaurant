function convertirAFechaUnix(fechaHora) {
    const partes = fechaHora.split(" ");
    const fechaPartes = partes[0].split("/");
    const horaPartes = partes[1].split(":");
    const fecha = new Date(
        parseInt(fechaPartes[2], 10),
        parseInt(fechaPartes[1], 10) - 1, // Restamos 1 del mes ya que los meses en JavaScript van de 0 a 11
        parseInt(fechaPartes[0], 10),
        parseInt(horaPartes[0], 10),
        parseInt(horaPartes[1], 10),
        parseInt(horaPartes[2], 10)
    );
    return fecha.getTime(); // Devuelve la marca de tiempo UNIX
}

const dataSales = [
    {y:0, x:convertirAFechaUnix("01/02/2014 09:00:00")},
    {y:30, x:convertirAFechaUnix("01/02/2014 09:30:00")},
    {y:36, x:convertirAFechaUnix("01/02/2014 09:35:00")},
    {y:62, x:convertirAFechaUnix("01/02/2014 10:00:00")},
    {y:55, x:convertirAFechaUnix("01/02/2014 10:30:00")},
    {y:125, x:convertirAFechaUnix("01/02/2014 11:30:00")},
    {y:110, x:convertirAFechaUnix("01/02/2014 12:30:00")},
    {y:205, x:convertirAFechaUnix("01/02/2014 14:00:00")},
    {y:70, x:convertirAFechaUnix("01/02/2014 15:40:00")},
    {y:130, x:convertirAFechaUnix("01/02/2014 17:10:00")},
    {y:150, x:convertirAFechaUnix("01/02/2014 18:10:00")},
    {y:120, x:convertirAFechaUnix("01/02/2014 18:59:00")},
]
console.log(dataSales);
console.log(convertirAFechaUnix("01/03/2014 00:00:00"))
const options = {
    chart: {
        type: 'area',
        height: 280
    },
    series: [{
        name: 'Daily sales',
        data: dataSales, // Datos de la gráfica
    }],
    xaxis: {
        min: convertirAFechaUnix("01/02/2014 09:00:00"), // Fecha mínima
        max: convertirAFechaUnix("01/02/2014 18:59:59"), // Fecha máxima
        type: 'datetime', 
        tickAmount: 6, 
    },
    yaxis: {
        labels: {
            offsetX: -10,
            offsetY: 0,

        },
        min:0,
        max: 250,
        tickAmount: 3,
    },
    tooltip: {
        x: {
            format: 'HH:mm a'
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


document.addEventListener("DOMContentLoaded",  ()=> {
    const options = {
        chart: {
            type: "donut",
            height: 280,
            stacked: false,
            toolbar: {
                show: false,
                tools: {
                    download: false,
                    selection: false,
                    zoom: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
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

// Data of example
const dataEmployees = [
    {
        name: "Theresa Webb",
        position: "Waiter",
        imgUrl: "img/employees/employee-1.jpg",
        earnings: 3500
    },
    {
        name: "Alice Flores",
        position: "Waiter",
        imgUrl: "img/employees/employee-2.jpg",
        earnings: 2500
    },
    {
        name: "Tim Handerson",
        position: "Manager",
        imgUrl: "img/employees/employee-3.jpg",
        earnings: 1500
    },
    {
        name: "Jason Collins",
        position: "Courier",
        imgUrl: "img/employees/employee-4.jpg",
        earnings: 1000
    }
]

const bestEmployees = document.querySelector("#best-employees");

dataEmployees.forEach(employee => {
    const employeeElement = document.createElement("div");
    employeeElement.classList.add("best-employee");
    employeeElement.innerHTML = `
        <div class="best-employee-info">
            <img src="${employee.imgUrl}" alt="${employee.name}" class="best-employee__img">
            <div>
                <h4 class="best-employee__name">${employee.name}</h4>
                <p class="best-employee__position">${employee.position}</p>
            </div>
        </div>
        <p class="best-employee__earnings">$${employee.earnings}</p>
    `;
    bestEmployees.appendChild(employeeElement);
});


// trending dishes

const dataDishes = [
    {
        imgUrl: "img/dishes/dish-1.png",
        name: "Pasta with meatballs",
        orders: 150,
        category: "Food",
    },
    {
        imgUrl: "img/dishes/dish-1.png",
        name: "Chicken with potatoes",
        orders: 120,
        category: "Food",
    },
    {
        imgUrl: "img/dishes/dish-1.png",
        name: "Latte",
        orders: 110,
        category: "Drink",
    },
    {
        imgUrl: "img/dishes/dish-1.png",
        name: "Cappuccino",
        orders: 90,
        category: "Drink",
    }
]
const trendingDishes = document.querySelector("#trending-dishes-list");
dataDishes.forEach(dish => {
    const dishElement = document.createElement("div");
    dishElement.classList.add("trending-dish");
    dishElement.innerHTML = `
        <div class="trending-dish__info">
            <img src="${dish.imgUrl}" alt="${dish.name}" class="trending-dish__img">
            <div class="trending-dish-txt">
                <p class="trending-dish__category">${dish.category}</p>
                <h4 class="trending-dish__name">${dish.name}</h4>
            </div>
        </div>
        <p class="trending-dish__orders">${dish.orders} orders</p>
    `
    trendingDishes.appendChild(dishElement);
});