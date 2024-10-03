<script lang="ts">
	// @ts-ignore
	import LaptopImg from '$lib/images/Laptop_Metrics_Left.png?format=webp&quality=75&w=513';
	// @ts-ignore
	import FinanceImg from '$lib/images/Finance_Header.png?format=webp&quality=100&w=550';
	import GlowButton from '$lib/components/GlowButton.svelte';
	import ImgBackground from '$lib/components/ImgBackground.svelte';
	import BenefitCard from '$lib/components/cards/BenefitCard.svelte';
	import Checkmark from '$lib/components/Checkmark.svelte';
	import StatCard from '$lib/components/cards/StatCard.svelte';
	import TestimonialRow from '$lib/components/TestimonialRow.svelte';
	import { testimonials } from '$lib/utils/testimonials';
	import Accordion from '$lib/components/Accordion.svelte';
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
	<div class="relative grid justify-center md:justify-normal">Chart go here</div>
</header>
<section id="benefitsRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px]">
	<BenefitCard lottiePath="/lottie/Tablet_primary.json" initialPlay>
		<span slot="heading">Decrease load times</span>
		<span slot="body">
			A faster site leads to improved user experience and higher organic rankings.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Consult_tertiary.json" delay={500} initialPlay>
		<span slot="heading">Get more customers</span>
		<span slot="body">
			We’ll help you create a website that converts passive users into paying customers.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Coins_secondary.json" delay={1500} initialPlay>
		<span slot="heading">Supercharge your business</span>
		<span slot="body">
			Gain a competitive advantage, increase brand awareness, and reach your goals.
		</span>
	</BenefitCard>
</section>
<section
	id="intro"
	class="rounded-xl bg-body-color-secondary px-6 py-10 md:p-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden">
	<!-- Left column -->
	<div>
		<p class="bg-orange/20 text-orange py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			POOR PERFORMANCE?
		</p>
		<h2 class="mb-6">Is your website performing?</h2>
		<p class="mb-8 lg:mb-4">
			What’s worse than a slow website? A slow website that doesn’t bring in customers, looks
			outdated, and ultimately doesn’t fit your business needs.
		</p>
		<p class="mb-8 lg:mb-4">
			It’s no secret: research shows people are quick to abandon slow and poorly designed websites.
			This is precisely why we’ve spent years crafting our tech stack and honing our website
			building process.
		</p>
	</div>
	<!-- Right column -->
	<img
		src={FinanceImg}
		width="602"
		height="513"
		alt="Coworking business website design"
		class="max-h-[380px] lg:max-h-[470px] -mb-[80px] lg:ml-[80px] object-contain justify-self-center lg:justify-self-auto" />
</section>
<section id="initialStats" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px] mt-[40px]">
	<StatCard color="orange">
		<span slot="stat">40%</span>
		<span slot="subtitle">Won't wait</span>
		<span slot="body"
			>40% of customers won’t wait more than 2-3 seconds before abandoning a site.</span>
	</StatCard>
	<StatCard color="secondary">
		<span slot="stat">85%</span>
		<span slot="subtitle">Expect speed</span>
		<span slot="body"
			>85% of mobile users expect pages to load as fast or faster than they do on a desktop.</span>
	</StatCard>
	<StatCard color="tertiary">
		<span slot="stat">64%</span>
		<span slot="subtitle">Look elsewhere</span>
		<span slot="body"
			>64% of consumers unhappy with their experience will buy elsewhere next time.</span>
	</StatCard>
</section>
<section
	id="solution"
	class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center my-[125px]">
	<div class="relative flex justify-center lg:justify-start">
		<img
			class="relative z-[1] max-w-[425px] w-full"
			src={LaptopImg}
			alt="Graphic showing improved SEO graphs overlaying website design"
			height="513"
			width="518"
			loading="lazy" />
		<ImgBackground
			classes="absolute -z-0 -top-[25%] -left-[25%] lg:-left-[40%] w-[160%] h-[160%]" />
	</div>
	<div class="mt-7 lg:mt-0">
		<p class="bg-primary/20 text-primary py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			LEVEL UP
		</p>
		<h2 class="mb-6">Boost your business with a new website.</h2>
		<p>
			Think about it: every time you navigate around a website, another 3-10 seconds goes by. A lot
			of life happens between pages. Every business needs an engaging website that’s free of bugs,
			and meets their audience’s needs at the speed of life.
		</p>
		<p class="mt-4 mb-8">
			This is why we’ve spent the last decade meticulously choosing our technologies, honing our
			process, and connecting with our clients.
		</p>
		<GlowButton type="link" link="/" classes="px-[24px] py-[12px]" color="tertiary"
			>Boost Your Website Today</GlowButton>
	</div>
</section>
<section id="secondaryStats" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px] mt-[40px]">
	<StatCard color="primary">
		<span slot="stat">0.3s</span>
		<span slot="subtitle">Average load time</span>
		<span slot="body"
			>Using the fastest frameworks and hosting solutions, our sites are incredibly fast.</span>
	</StatCard>
	<StatCard color="secondary">
		<span slot="stat">2x</span>
		<span slot="subtitle">Conversion rates</span>
		<span slot="body"
			>Our clients see double the conversions on average in 6-8 months after launch.</span>
	</StatCard>
	<StatCard color="tertiary">
		<span slot="stat">0%</span>
		<span slot="subtitle">Down time</span>
		<span slot="body"
			>Thanks to our ultra-reliable hosting solutions and monitoring software, our sites are
			extremely reliable.</span>
	</StatCard>
</section>
<TestimonialRow testimonials={[testimonials['kyle'], testimonials['stacy']]} />
<section id="processRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 my-[125px]">
	<h2 class="col-start-1 md:col-span-3 text-center mb-5">How do we do it?</h2>
	<BenefitCard lottiePath="/lottie/Consult_primary.json" initialPlay>
		<span slot="heading">Discovery</span>
		<span slot="body">
			We collaborate with you on market research, competitor analysis, keywords, wireframes, and
			design.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Computer_tertiary.json" delay={500} initialPlay>
		<span slot="heading">Development</span>
		<span slot="body">
			Sit back while we do all the work to create and thoroughly test your beautiful new website.
		</span>
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Confettie_secondary.json" delay={1500} initialPlay>
		<span slot="heading">Delivery</span>
		<span slot="body">
			After the launch of your amazing new site, we carry on providing training and ongoing
			maintenance.
		</span>
	</BenefitCard>
</section>
<section id="FAQs" class="flex flex-col items-center">
	<h2 class="text-center mb-5">FAQs</h2>
	<Accordion isOpen>
		<span slot="question">How long does it take to build a new site?</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">Do you offer hosting and maintenance?</span>
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
		<span slot="question">What are Google’s Core Web Vitals?</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">Do you also offer design and SEO services for websites you build?</span>
		<span slot="answer">It depends</span>
	</Accordion>
</section>
