<script lang="ts">
	// @ts-nocheck
	import Image from '$lib/images/homepage_hero_img.png?format=webp&quality=75&w=550';
	import GlowButton from '$lib/components/GlowButton.svelte';
	import ImgBackground from '$lib/components/ImgBackground.svelte';
</script>

<div class="grid grid-cols-2 items-center gap-14 py-24">
	<div class="grid gap-7">
		<h1>Grow Better <br />& Engage More</h1>
		<p>
			Reach your audience, convert more customers, and rank better with the best website for you.
		</p>
		<div>
			<GlowButton type="link" link="/showcase" classes="justify-self-start">Showcase</GlowButton>
		</div>
	</div>
	<div class="relative">
		<img
			src={Image}
			alt="laptop and mobile phone mockup of modern website"
			class="justify-self-end relative z-[1]" />
		<ImgBackground classes="absolute -z-0 -top-[90px] -right-[170px] w-[150%] h-[150%]" />
	</div>
</div>
<div class="h-[500px]" />
