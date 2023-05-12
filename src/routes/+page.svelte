<script lang="ts">
	// @ts-nocheck
	import Image from '$lib/images/homepage_hero_img.png?format=webp&quality=75&w=550';
	import GlowButton from '$lib/components/GlowButton.svelte';
	import ImgBackground from '$lib/components/ImgBackground.svelte';
	import BenefitCard from '$lib/components/BenefitCard.svelte';
	import PortfolioRow from '$lib/components/PortfolioRow.svelte';
	import ServicesTabs from '$lib/components/ServicesTabs.svelte';
	import TestimonialRow from '$lib/components/TestimonialRow.svelte';
	import { testimonials } from '$lib/testimonials';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-32 md:gap-14 py-20 md:py-24">
	<div class="grid gap-7">
		<h1>Grow Better <br />& Engage More</h1>
		<p>
			Reach your audience, convert more customers, and rank better with the best website for you.
		</p>
		<div>
			<GlowButton type="link" link="/showcase" classes="justify-self-start">Showcase</GlowButton>
		</div>
	</div>
	<div class="relative grid justify-center md:justify-normal">
		<img
			src={Image}
			alt="laptop and mobile phone mockup of modern website"
			class="relative z-[1]"
			loading="lazy" />
		<ImgBackground classes="absolute -z-0 -top-[90px] -right-[170px] w-[150%] h-[150%]" />
	</div>
</div>
<div id="benefitsRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px]">
	<BenefitCard lottiePath="/lottie/BarChart.json" initialPlay>
		<span slot="heading">Multiply your conversions</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Globe.json" delay={750} initialPlay>
		<span slot="heading">Reach users faster</span>
		<span slot="body">
			Our websites load faster than 99.9% of competitors. With our tech, your users don’t have to
			wait long.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Server.json" delay={1500} initialPlay>
		<span slot="heading">0% Downtime</span>
		<span slot="body">
			In the last 3 years, our websites have a 0% downtime - never miss out on opportunities.
		</span>
	</BenefitCard>
</div>
<PortfolioRow />
<ServicesTabs />
<TestimonialRow testimonials={[testimonials['kyle'], testimonials['stacy']]} />
<div class="h-[500px]" />
