<script lang="ts">
	// @ts-ignore
	import AuditImg from '$lib/images/Laptop_Audit.png?format=webp&quality=75&w=500';
	// @ts-ignore
	import TabletAuditImg from '$lib/images/Tablet_Audit.png?format=webp&quality=75&w=513';
	// @ts-ignore
	import SaasImg from '$lib/images/Saas_header.png?format=webp&quality=100&w=550';
	import Button from '$lib/components/Button.svelte';
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
		<h1 class="text-center md:text-left text-[36px] md:text-[50px]">
			Optimize your site.<br />
			Beat the competition.
		</h1>
		<div class="grid gap-4 justify-items-start px-6 md:px-0">
			<Checkmark body="Future proof your website" />
			<Checkmark body="Enhance user experience" />
			<Checkmark body="Increase engagement" />
		</div>
		<Button type="link" link="/showcase" classes="justify-self-center md:justify-self-start"
			>Let's Chat</Button>
	</div>
	<div class="relative grid justify-center md:justify-end">
		<img
			src={AuditImg}
			width="504"
			height="426"
			alt="laptop and mobile phone mockup of modern website"
			class="relative z-[1]" />
		<ImgBackground classes="absolute -z-0 -top-[90px] -right-[170px] w-[150%] h-[150%]" />
	</div>
</header>
<section id="benefitsRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px]">
	<BenefitCard lottiePath="/lottie/WorldMedia_primary.json" initialPlay>
    {#snippet heading()}
      <span>Future proof your website</span>
    {/snippet}
    {#snippet body()}
      <span>
        By optimizing your website today, you ensure that you reap the benefits tomorrow.
      </span>
    {/snippet}
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Media_tertiary.json" delay={750} initialPlay>
    {#snippet heading()}
      <span>Enhance user experience</span>
    {/snippet}
    {#snippet body()}
      <span>
        No one likes broken links, broken images, or errors. Happy users turn into happy customers.
      </span>
    {/snippet}
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Magnet_secondary.json" delay={1700} initialPlay>
    {#snippet heading()}
      <span>Increase engagement</span>
    {/snippet}
    {#snippet body()}
      <span>
        A site that’s easy to navigate, find, and reliable is one that improves user engagement.
      </span>
    {/snippet}
	</BenefitCard>
</section>
<section
	id="intro"
	class="rounded-xl bg-body-color-secondary px-6 py-10 md:p-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center overflow-hidden">
	<!-- Left column -->
	<div>
		<p class="bg-orange/20 text-orange py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			FLYING BLIND?
		</p>
		<h2 class="mb-6">Is all well with your website?</h2>
		<p class="mb-8 lg:mb-4">
			When is the last time you checked every page on your website for broken links, images, errors,
			or missing pages? What about slow loading times, thin content, or clumsy UX patterns?
		</p>
		<p class="mb-8 lg:mb-4">
			It may shock you to know, but every website has an average of 6-30 broken links per 100 pages.
			That’s a lot of missed opportunities.
		</p>
	</div>
	<!-- Right column -->
	<img
		src={SaasImg}
		width="585"
		height="440"
		alt="Coworking business website design"
		class="max-h-[380px] lg:max-h-[480px] -mb-[80px] lg:ml-[80px] object-contain justify-self-center lg:justify-self-auto" />
</section>
<section id="initialStats" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px] mt-[40px]">
	<StatCard color="orange"
    stat="88%"
    subtitle="Customers lost"
    body="88% of users are less likely to return to a website after a bad user experience." />
	<StatCard color="secondary"
    stat="53%"
    subtitle="Will close slow pages"
    body="53% of mobile users will close a website if it takes more than three seconds to load." />
	<StatCard color="tertiary"
    stat="72%"
    subtitle="Will spread the word"
    body="72% will tell 6 or more people about good experiences - including slow pages and broken links." />
</section>
<section
	id="solution"
	class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center my-[125px]">
	<div class="relative flex justify-center lg:justify-start">
		<img
			class="relative z-[1] max-w-[425px] w-full"
			src={TabletAuditImg}
			alt="Laptop and mobile phone showing a design for a VR based company"
			height="409"
			width="600"
			loading="lazy" />
		<ImgBackground
			classes="absolute -z-0 -top-[25%] -left-[25%] lg:-left-[40%] w-[160%] h-[160%]" />
	</div>
	<div class="mt-7 lg:mt-0">
		<p class="bg-primary/20 text-primary py-[5px] px-[14px] rounded-md inline-block text-base mb-2">
			LEVEL UP
		</p>
		<h2 class="mb-6">Get your report and supercharge your site.</h2>
		<p>
			Analyzing every aspect of your website can be tricky, which is why we leverage a dozens of
			in-house and third-party tools to make sure nothing goes overlooked.
		</p>
		<p class="mt-4 mb-8">
			With our full report, you can rest assured you’ve done everything you can to make sure your
			website is successful. The longer you wait, the more customers and rankings you’re losing out
			on.
		</p>
		<Button type="link" link="/" classes="px-[24px] py-[12px]" color="tertiary"
			>Boost Your Website Today</Button>
	</div>
</section>
<section id="FAQs" class="flex flex-col items-center mb-[125px]">
	<h2 class="text-center mb-5">How do we do it?</h2>
	<Accordion isOpen>
		<span slot="question">Website crawl</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">UX analysis</span>
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
		<span slot="question">Content & SEO analysis</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">Analytics analysis</span>
		<span slot="answer">It depends</span>
	</Accordion>
</section>
<TestimonialRow testimonials={[testimonials['kyle'], testimonials['stacy']]} />

<section id="FAQs" class="flex flex-col items-center mt-[125px]">
	<h2 class="text-center mb-5">FAQs</h2>
	<Accordion>
		<span slot="question">What does the website audit cover?</span>
		<span slot="answer">It depends</span>
	</Accordion>
	<Accordion>
		<span slot="question">Do you also fix the issues you find?</span>
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
		<span slot="question">Do you have an example report I can preview?</span>
		<span slot="answer">It depends</span>
	</Accordion>
</section>
