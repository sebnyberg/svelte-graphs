<script lang="ts">
	import highcharts from './highcharts';

	export let title: string;
	export let yAxisText: string;

	// https://www.highcharts.com/docs/chart-design-and-style/design-and-style
	let config = {
		chart: {
			backgroundColor: null,
		},
		// title: {
		// 	enabled: false,
		// 	text: title
		// },
		yAxis: {
			title: {
				text: yAxisText
			}
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		// color: {
		// 	    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
		// 		stops: [
		// 				[0, '#003399'],
		// 				[1, '#3366AA']
		// 		]
		// },
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				}
				// pointStart: 2010
			}
		},
		series: [
			{
				type: 'line',
				name: title,
				data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
			}
		],
		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom'
						}
					}
				}
			]
		}
	};

	function generateNewData() {
		const newData = config.series[0].data.map((data) => Math.round(Math.random() * 100000));
		config.series[0].data = newData;
	}
</script>

<div class="chart" use:highcharts={config} />

<!-- <button on:click={generateNewData}>
	Randomize Data
</button> -->
