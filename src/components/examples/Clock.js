import React, { useState, useEffect } from 'react'

export default function Clock() {
	const [date, setDate] = useState(new Date())

	const tick = () => setDate(new Date())

	useEffect(() => {
		const timerID = setInterval(() => {
			tick()
		}, 1000)
		return clearInterval(timerID)
	}, [])

	return (
		<div>
			<h2>Hey its {date.toLocaleTimeString()}</h2>
		</div>
	)
}
