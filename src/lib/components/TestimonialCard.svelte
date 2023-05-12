<script lang="ts">
	import type { Testimonial } from './TestimonialRow.svelte';
	export let testimonial: Testimonial;
	export let classes: string = '';
</script>

<div
	class="rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-[85px,_1fr] gap-5 items-center bg-secondary-bg-light dark:bg-[#2E3438] {classes}">
	<div class="rounded-full overflow-hidden w-[80px] h-[80px] -mt-[65px] sm:mt-0">
		<img src={testimonial.imgPath} alt="{testimonial.name}'s headshot" class="object-cover" />
	</div>
	<div>
		<h4>{testimonial.name}</h4>
		<p>{testimonial.body}</p>
	</div>
</div>
