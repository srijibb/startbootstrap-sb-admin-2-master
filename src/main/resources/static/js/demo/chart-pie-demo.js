// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["AMER", "EMEA", "APAC"],
        datasets: [{
            data: [61.13910811, 20.28144908, 18.57944281],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        },
            {
                data: [59.88061042, 23.08198549, 17.03740409],
                backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(201, 203, 207)'],
                hoverBackgroundColor: ['rgb(65, 182, 182)', 'rgb(245, 195, 76)', 'rgb(191, 193, 197)'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },
});
