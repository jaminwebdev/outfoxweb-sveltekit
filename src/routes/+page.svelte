<script lang="ts">
	// @ts-nocheck
	import HeroImg from '$lib/images/homepage_hero_img.png?format=webp&quality=75&w=550';
	import HeadlessWPImg from '$lib/images/Headless_WP_iMac.png?format=webp&quality=75&w=550';
	import GlowButton from '$lib/components/GlowButton.svelte';
	import ImgBackground from '$lib/components/ImgBackground.svelte';
	import BenefitCard from '$lib/components/BenefitCard.svelte';
	import PortfolioRow from '$lib/components/PortfolioRow.svelte';
	import ServicesTabs from '$lib/components/ServicesTabs.svelte';
	import TestimonialRow from '$lib/components/TestimonialRow.svelte';
	import { testimonials } from '$lib/testimonials';
</script>

<header class="grid grid-cols-1 md:grid-cols-2 items-center gap-32 md:gap-14 py-20 md:py-24">
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
			src={HeroImg}
			alt="laptop and mobile phone mockup of modern website"
			class="relative z-[1]"
			loading="lazy" />
		<ImgBackground classes="absolute -z-0 -top-[90px] -right-[170px] w-[150%] h-[150%]" />
	</div>
</header>
<section id="benefitsRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px]">
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
</section>
<PortfolioRow />
<ServicesTabs />
<TestimonialRow testimonials={[testimonials['kyle'], testimonials['stacy']]} />
<section
	class="rounded-2xl bg-secondary-bg-light dark:bg-secondary-bg-dark px-6 py-12 md:p-[60px_] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center my-[125px]">
	<div class="relative flex justify-center lg:justify-start">
		<img
			src={HeadlessWPImg}
			alt="iMac showing the WordPress dashboard"
			class="max-w-[400px] w-full z-10 relative"
			width="456"
			height="389"
			loading="lazy" />
		<ImgBackground
			classes="absolute -z-0 -top-[25%] -left-[25%] lg:-left-[40%] w-[160%] h-[160%]" />
	</div>
	<div class="mt-7 lg:mt-0">
		<p
			class="bg-tertiary/20 text-tertiary py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			UPDATE
		</p>
		<h2 class="mb-4">Our latest work</h2>
		<p>
			Do you have a preferred content management system like WordPress, but you hate slow load
			times?
		</p>
		<p class="mt-4 mb-8">
			Have no fear! We can easily combine WordPress and our faster frontend technologies for
			ultimate convenience and optimal performance!
		</p>
		<GlowButton type="link" link="/" classes="px-[24px] py-[12px]" color="secondary"
			>See More</GlowButton>
	</div>
</section>
<div class="h-[500px]" />
