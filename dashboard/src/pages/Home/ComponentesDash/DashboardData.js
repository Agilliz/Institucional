import ApexCharts from 'apexcharts';

export function inicializaGraficos() {
    // Gráfico linha custos
    const graficoCustosOptions = {
        chart: {
            height: 150,
            width: '100%',
            type: "area",
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        chart: {
                            height: 200
                        }
                    }
                },
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            height: 250
                        }
                    }
                }
            ]
        },
        dataLabels: {
            enabled: false
        },
        series: [
            {
                name: "Custo Total",
                data: [45, 52, 38, 45, 19, 23, 2]
            }
        ],
        stroke: {
            width: 2,
            colors: ['#2C2D5B']
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.8,
                colorStops: [
                    {
                        offset: 0,
                        color: "#2C2D5B",
                        opacity: 0.5
                    },
                    {
                        offset: 100,
                        color: "#2C2D5B",
                        opacity: 0.8
                    }
                ]
            }
        },
        xaxis: {
            categories: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho"
            ],
            labels: {
                style: {
                    colors: '#8F8F8F'
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + 'k';
                },
                style: {
                    colors: '#8F8F8F'
                }
            },
            tickAmount: 4,
            min: 0,
            max: 80,
            axisTicks: {
                show: true
            }
        }
    };

    const graficoCustos = new ApexCharts(document.querySelector("#chart-linha-custo"), graficoCustosOptions);
    graficoCustos.render();

    // Gráfico pie faturamento
   // Gráfico pie faturamento
const graficoFaturamentoOptions = {
    series: [20, 30, 50],
    chart: {
        type: 'donut',
        width: '70%',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 5,
            left: 0,
            blur: 3,
            opacity: 0.1,
           
        },
        offsetX: 85, // Center the chart initially
    },
    responsive: [
        {
            breakpoint: 768,
            options: {
                chart: {
                    width: '90%',
                    height: 300,
                    offsetX: 100, // Reset the offset
                },
                legend: {
                    position: 'right',
                    offsetY: 100
                }
            }
        },
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: '100%',
                    height: 300,
                    offsetX: 0, // Reset the offset
                },
                legend: {
                    position: 'right',
                    offsetY: -50
                }
            }
        }
    ],
    colors: ['#DE6600', '#FFF6DF', '#2C2D5B'],
    labels: ['Lucro Bruto', 'Lucro Líquido', 'Taxas e Impostos'],
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '80%'
            }
        }
    },
    stroke: {
        colors: ['#DE6600', '#FFF6DF', '#2C2D5B'],
        width: 1,
        dashArray: 4
    },
    states: {
        hover: {
            filter: {
                type: 'darken',
                value: 0.8
            }
        }
    },
    legend: {
        fontSize: '16px',
        markers: {
            width: 15,
            height: 15,
            radius: 2
        },
        offsetY: 25
    }
};


    const graficoFaturamento = new ApexCharts(document.querySelector("#chart-pie-faturamento"), graficoFaturamentoOptions);
    graficoFaturamento.render();

    return [graficoCustos, graficoFaturamento];
}
