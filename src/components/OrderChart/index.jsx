import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import Chart from "react-apexcharts";
import { publicRequest } from "../../redux/requestMethods";

const OrderChart = () => {
	const [data, setData] = useState([]);

	const MONTHS = useMemo(
		() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		[]
	);

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await publicRequest.get("orders/order-stats");
				await res.data.map((item) =>
					setData((prev) => [
						...prev,
						{ month: MONTHS[item._id - 1], total: item.total, num: item._id },
					])
				);
			} catch (error) {
				console.log(error);
			}
		};
		getStats();
	}, [MONTHS]);

	const sortedData = data.sort(function (a, b) {
		return a.num - b.num;
	});

	const options = {
		chart: {
			id: "basic-bar",
			toolbar: {
				show: false,
			},
		},
		xaxis: {
			categories: sortedData.map((data) => data.month),
		},
		labels: {
			show: true,
		},
		legend: {
			show: true,
		},

		responsive: [
			{
				breakpoint: 768,
				options: {
					chart: {
						width: 325,
						height: 150,
					},
					legend: {
						show: true,
					},
					yaxis: {
						labels: {
							offsetX: -15,
							rotate: -90,
						},
					},
					grid: {
						padding: {
							left: -5,
							right: 0,
						},
					},
				},
			},
		],
	};
	const series = [
		{
			name: "Total Orders",
			data: sortedData.map((data) => data.total),
		},
	];

	return (
		<div>
			<Chart options={options} series={series} type="area" width="700" height="200" />
		</div>
	);
};

export default OrderChart;
