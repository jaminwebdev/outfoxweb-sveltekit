<script lang="ts">
	export let open: boolean;

	const setOpen = () => {
		open = !open;
		const body = document.querySelector('body');

		if (open) {
			body!.style.overflowY = 'hidden';
			return;
		}

		body!.style.overflowY = 'auto';
	};
</script>

<button
	class="text-body-text-dark dark:text-body-text-light hover:text-primary cursor-pointer mr-4 border-none focus:outline-none float-right"
	class:open
	on:click={setOpen}
>
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="6" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
		float: right;
	}

	button {
		z-index: 20;
	}

	.open svg {
		transform: scale(0.7);
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
