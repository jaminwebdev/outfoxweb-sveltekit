<script lang="ts">
	// @ts-ignore
	import VRLaptop from '$lib/images/VR_Laptop_Left.png?format=webp&quality=75&w=513';
	// @ts-ignore
	import SEOHeroImg from '$lib/images/Laptop_Metrics_Right.png?format=webp&quality=75&w=500';
	// @ts-ignore
	import CoworkImg from '$lib/images/Cowork_Header.png?format=webp&quality=100&w=550';
	import GlowButton from '$lib/components/GlowButton.svelte';
	import ImgBackground from '$lib/components/ImgBackground.svelte';
	import BenefitCard from '$lib/components/cards/BenefitCard.svelte';
	import Checkmark from '$lib/components/Checkmark.svelte';
	import StatCard from '$lib/components/cards/StatCard.svelte';
	import TestimonialRow from '$lib/components/TestimonialRow.svelte';
	import { testimonials } from '$lib/utils/testimonials';
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<header
	class="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center gap-32 md:gap-14 py-24 md:py-20">
	<div class="grid gap-10 md:gap-7">
		<h1 class="text-center md:text-left">
			Grow your traffic.<br />
			Grow your business.
		</h1>
		<div class="grid gap-4 justify-items-start px-6 md:px-0">
			<Checkmark body="Increase your organic traffic" />
			<Checkmark body="Build trust and credibility" />
			<Checkmark body="Increase engagement" />
		</div>
		<GlowButton type="link" link="/showcase" classes="justify-self-center md:justify-self-start"
			>Let's Chat</GlowButton>
	</div>
	<div class="relative grid justify-center md:justify-normal">
		<img
			src={SEOHeroImg}
			width="500"
			height="512"
			alt="laptop and mobile phone mockup of modern website"
			class="relative z-[1] max-h-[425px] object-cover" />
		<ImgBackground classes="absolute -z-0 -top-[90px] -right-[170px] w-[150%] h-[150%]" />
	</div>
</header>
<section id="benefitsRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px]">
	<BenefitCard lottiePath="/lottie/BarChart_primary.json" initialPlay>
		<span slot="heading">Multiply your traffic</span>
		<span slot="body">
			Our clients see an average of 2-3x increase in organic traffic in their first 6-8 months.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Medal_tertiary.json" delay={750} initialPlay>
		<span slot="heading">Build trust</span>
		<span slot="body">
			Higher ranking pages are trusted more than non-ranked pages. More trust = more conversions.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Magnet_secondary.json" delay={1500} initialPlay>
		<span slot="heading">Increase engagement</span>
		<span slot="body">
			The more your content is geared towards what people are looking for, the more they engage.
		</span>
	</BenefitCard>
</section>
<section
	id="intro"
	class="rounded-xl bg-body-color-secondary px-6 py-10 md:p-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden">
	<!-- Left column -->
	<div>
		<p class="bg-orange/20 text-orange py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			LOW TRAFFIC?
		</p>
		<h2 class="mb-6">
			Not getting the <br />
			traffic you need?
		</h2>
		<p class="mb-8 lg:mb-4">
			You work so hard, slaving over ideas you think your user-base is interested in. So why aren’t
			more people getting eyes on your website?
		</p>
		<p class="mb-8 lg:mb-4">
			It’s no secret: 68% percent of online experiences start with a search engine. If you’re not
			aiming for the right keywords, content strategy, or copy writing - you’re not getting traffic.
		</p>
	</div>
	<!-- Right column -->
	<img
		src={CoworkImg}
		width="585"
		height="440"
		alt="Coworking business website design"
		class="max-h-[380px] lg:max-h-[480px] -mb-[80px] lg:ml-[80px] object-contain justify-self-center lg:justify-self-auto" />
</section>
<section id="initialStats" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px] mt-[40px]">
	<StatCard color="orange">
		<span slot="stat">434%</span>
		<span slot="subtitle">More indexed pages</span>
		<span slot="body"
			>Websites with proper SEO, copy writing, and content strategy get 434% more traffic.</span>
	</StatCard>
	<StatCard color="secondary">
		<span slot="stat">3x</span>
		<span slot="subtitle">As many leads</span>
		<span slot="body"
			>SEO generates over 3x as many leads as other marketing tactics and costs 62% less.</span>
	</StatCard>
	<StatCard color="tertiary">
		<span slot="stat">5.7%</span>
		<span slot="subtitle">Will rank in the top 10</span>
		<span slot="body"
			>Even with all the best SEO practices in mind, only 5.7% of pages will rank in the top 10 of
			search.</span>
	</StatCard>
</section>
<section
	id="solution"
	class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center my-[125px]">
	<div class="relative flex justify-center lg:justify-start">
		<img
			class="relative z-[1] max-w-[425px] w-full"
			src={VRLaptop}
			alt="Laptop and mobile phone showing a design for a VR based company"
			height="570"
			width="479"
			loading="lazy" />
		<ImgBackground
			classes="absolute -z-0 -top-[25%] -left-[25%] lg:-left-[40%] w-[160%] h-[160%]" />
	</div>
	<div class="mt-7 lg:mt-0">
		<p class="bg-primary/20 text-primary py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			LEVEL UP
		</p>
		<h2 class="mb-6">Take out the guess work with top-tier SEO.</h2>
		<p>
			SEO takes time, and by the time you realize you’re on the wrong path, you’re already behind.
			What you need is to meet your users halfway and help them find you in the places they’re
			searching - search engines.
		</p>
		<p class="mt-4 mb-8">
			Give your website the SEO love it deserves with our battle-tested and research-backed
			approach. With the right keywords, content strategy, and page optimizations, you can rest
			assured your monthly visits will skyrocket.
		</p>
		<GlowButton type="link" link="/" classes="px-[24px] py-[12px]" color="tertiary"
			>Boost Your Website Today</GlowButton>
	</div>
</section>
<section id="FAQs" class="flex flex-col items-center mb-[125px]">
	<h2 class="text-center mb-5">How do we do it?</h2>
	<Accordion isOpen>
		<span slot="question">Discovery</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">Market and competitor analysis</span>
		<div slot="answer">
			<p>
				Absolutely! Not only can we manage your hosting needs, but we prefer it. This allows us to
				seamlessly update your website monthly, with 0 effort on your part.
			</p>
			<p class="mt-5">
				On top of that, we don’t just launch your website and leave it up to chance. We monitor your
				website by crawling it every 10 minutes to ensure your pages are always up and available. In
				the event a page goes down, we’re notified in 10 minutes or less.
			</p>
		</div>
	</Accordion>
	<Accordion>
		<span slot="question">Keyword research</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">Content strategy</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">On-page optimizations</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">Delivery</span>
		<span slot="answer">It depends</span>
	</Accordion>
</section>
<TestimonialRow testimonials={[testimonials['kyle'], testimonials['stacy']]} />

<section id="FAQs" class="flex flex-col items-center mt-[125px]">
	<h2 class="text-center mb-5">FAQs</h2>
	<Accordion>
		<span slot="question">How long does SEO take to see results?</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">How many words should a page or blog be?</span>
		<div slot="answer">
			<p>
				Absolutely! Not only can we manage your hosting needs, but we prefer it. This allows us to
				seamlessly update your website monthly, with 0 effort on your part.
			</p>
			<p class="mt-5">
				On top of that, we don’t just launch your website and leave it up to chance. We monitor your
				website by crawling it every 10 minutes to ensure your pages are always up and available. In
				the event a page goes down, we’re notified in 10 minutes or less.
			</p>
		</div>
	</Accordion>
	<Accordion>
		<span slot="question">Why isn't my website ranking on Google?</span>
		<span slot="answer">It depends</span>
	</Accordion>
</section>
