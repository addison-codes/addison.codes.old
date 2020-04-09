document.onload(animate());

function animate() {
	anime({
		targets: '.card',
		translateY: -50,
		delay: anime.stagger(100, { start: 100, from: 'center' })
	});

	anime({
		targets: '.halo',
		scale: [1, 1.05],
		duration: 1500,
		direction: 'alternate',
		easing: 'easeInOutQuad',
		loop: true
	});
}
