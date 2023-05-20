<script lang="ts">
	import HeroImg from '$lib/images/homepage_hero_img.png?format=webp&quality=75&w=550';
	import GlowButton from '$lib/components/GlowButton.svelte';
	import ImgBackground from '$lib/components/ImgBackground.svelte';
	import BenefitCard from '$lib/components/BenefitCard.svelte';
	import Checkmark from '$lib/components/Checkmark.svelte';
</script>

<header class="grid grid-cols-1 md:grid-cols-2 items-center gap-32 md:gap-14 py-24">
	<div class="grid gap-10 md:gap-7">
		<h1 class="text-center md:text-left">
			Better websites, <br />
			Better business.
		</h1>
		<div class="grid gap-4 justify-items-start px-6 md:px-0">
			<Checkmark body="< 1 second load times" />
			<Checkmark body="Lifetime 99.9% uptime " />
			<Checkmark body="Feature rich & interactive" />
		</div>
		<GlowButton type="link" link="/showcase" classes="justify-self-center md:justify-self-start"
			>Showcase</GlowButton>
	</div>
	<div class="relative grid justify-center md:justify-normal">
		<img
			src={HeroImg}
			alt="laptop and mobile phone mockup of modern website"
			class="relative z-[1]" />
		<ImgBackground classes="absolute -z-0 -top-[90px] -right-[170px] w-[150%] h-[150%]" />
	</div>
</header>
<section id="benefitsRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px]">
	<BenefitCard lottiePath="/lottie/Tablet_primary.json" initialPlay>
		<span slot="heading">Decrease load times</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Consult_tertiary.json" delay={500} initialPlay>
		<span slot="heading">Get more customers</span>
		<span slot="body">
			Our websites load faster than 99.9% of competitors. With our tech, your users don’t have to
			wait long.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Coins_secondary.json" delay={1500} initialPlay>
		<span slot="heading">Supercharge your business</span>
		<span slot="body">
			Our reliable tech leaves you to do what you do best - run your business.
		</span>
	</BenefitCard>
</section>
