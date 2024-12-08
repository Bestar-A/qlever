particlesJS("particles-js", {
	particles: {
		number: {
			value: 50,
			density: {
				enable: true,
				value_area: 600,
			},
		},
		color: {
			value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"],
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0.1,
				color: "#00ff00",
			},
			polygon: {
				nb_sides: 5,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 5,
				opacity_min: 0.15,
				sync: false,
			},
		},
		size: {
			value: 2.5,
			random: false,
			anim: {
				enable: true,
				speed: 2,
				size_min: 0.15,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 60,
			color: "#3f3f3f",
			opacity: 0.3,
			width: 1.4,
		},
		move: {
			enable: true,
			speed: 2,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "bubble",
			},
			onclick: {
				enable: false,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 200,
				size: 4,
				duration: 2,
				opacity: 2,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
});
