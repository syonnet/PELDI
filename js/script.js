document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Close mobile menu when clicking a link
                    if (document.querySelector('.navbar-collapse').classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(document.querySelector('.navbar-collapse'), {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Gráfico de tasa DCI
            var dciOptions = {
                series: [{
                    name: 'Tasa DCI',
                    data: [19.3, 15]
                }],
                chart: {
                    type: 'bar',
                    height: 300,
                    toolbar: { show: false }
                },
                colors: ['#2980b9', '#27ae60'],
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false,
                        columnWidth: '55%',
                    }
                },
                dataLabels: { enabled: false },
                stroke: { show: true, width: 2, colors: ['transparent'] },
                xaxis: {
                    categories: ['Tasa Actual (2024)', 'Meta Nacional (2030)'],
                    labels: {
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    }
                },
                yaxis: {
                    title: { 
                        text: 'Porcentaje (%)',
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    },
                    max: 25,
                    labels: {
                        formatter: function(val) { return val + '%'; },
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    }
                },
                tooltip: {
                    y: { 
                        formatter: function(val) { return val + '%'; },
                        title: {
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    },
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Open Sans, sans-serif'
                    }
                }
            };
            
            var dciChart = new ApexCharts(document.querySelector("#dciRateChart"), dciOptions);
            dciChart.render();
            
            // Gráfico de cumplimiento
            var complianceOptions = {
                series: [{
                    name: 'Cumplimiento',
                    data: [19.48, 41.12]
                }],
                chart: {
                    type: 'bar',
                    height: 300,
                    toolbar: { show: false }
                },
                colors: ['#95a5a6', '#27ae60'],
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false,
                        columnWidth: '55%',
                    }
                },
                dataLabels: { enabled: false },
                stroke: { show: true, width: 2, colors: ['transparent'] },
                xaxis: {
                    categories: ['2022', '2023'],
                    labels: {
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    }
                },
                yaxis: {
                    title: { 
                        text: 'Porcentaje (%)',
                        style: {
                            fontSize: '14px',
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    },
                    max: 50,
                    labels: {
                        formatter: function(val) { return val + '%'; },
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    }
                },
                tooltip: {
                    y: { 
                        formatter: function(val) { return val + '%'; },
                        title: {
                            fontFamily: 'Open Sans, sans-serif'
                        }
                    },
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Open Sans, sans-serif'
                    }
                }
            };
            
            var complianceChart = new ApexCharts(document.querySelector("#packageComplianceChart"), complianceOptions);
            complianceChart.render();
        });