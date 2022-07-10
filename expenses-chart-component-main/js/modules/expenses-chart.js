import expensesData from './expenses-data.js';

function displayExpensesChart() {
  const chartContainer = document.querySelector('.expenses__chart');
  const days = expensesData.map((data) => data.day);
  const expenses = expensesData.map((data) => data.amount);
  const today = new Date().getDay();

  const setBarBackgroundColor = expenses.map((data, index) => {
    if (index === today) {
      return 'hsl(186, 34%, 60%)';
    }

    return 'hsl(10, 79%, 65%)';
  });

  const setBarHoverBackgroundColor = expenses.map((data, index) => {
    if (index === today) {
      return 'hsla(186, 34%, 60%, 0.7)';
    }

    return 'hsla(10, 79%, 65%, 0.7)';
  });

  Chart.defaults.font.family = "'DM Sans', sans-serif";
  Chart.defaults.color = 'hsl(28, 10%, 53%)';

  const chart = new Chart(chartContainer, {
    type: 'bar',
    data: {
      datasets: [
        {
          label: 'amount',
          data: expenses,
          backgroundColor: setBarBackgroundColor,
          hoverBackgroundColor: setBarHoverBackgroundColor,
          borderSkipped: false,
          borderRadius: 3,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'category',
          labels: days,
          grid: {
            display: false,
            borderColor: 'transparent',
          },
        },
        y: {
          labels: expenses,
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

export default displayExpensesChart;