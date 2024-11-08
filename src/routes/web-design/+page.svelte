<script lang="ts">
	// @ts-ignore
	import DesignHero from '$lib/images/Figma_Tablet.png?format=webp&quality=75&w=550';
	// @ts-ignore
	import MuseumImg from '$lib/images/Museum_Header.png?format=webp&quality=100&w=550';
	// @ts-ignore
	import VRLaptop from '$lib/images/VR_Laptop_Left.png?format=webp&quality=75&w=513';
	import Button from '$lib/components/Button.svelte';
	import ImgBackground from '$lib/components/ImgBackground.svelte';
	import BenefitCard from '$lib/components/cards/BenefitCard.svelte';
	import Checkmark from '$lib/components/Checkmark.svelte';
	import StatCard from '$lib/components/cards/StatCard.svelte';
	import TestimonialRow from '$lib/components/TestimonialRow.svelte';
	import { testimonials } from '$lib/utils/testimonials';
	import Accordion from '$lib/components/Accordion.svelte';
</script>

<header class="grid grid-cols-1 md:grid-cols-2 items-center gap-32 md:gap-14 py-24 md:py-28">
	<div class="grid gap-10 md:gap-7">
		<h1 class="text-center md:text-left">Modern Designs for a Modern Web.</h1>
		<div class="grid gap-4 justify-items-start px-6 md:px-0">
			<Checkmark body="Research driven layouts" />
			<Checkmark body="Completely custom designs" />
			<Checkmark body="Latest design trends" />
		</div>
		<Button type="link" link="/showcase" classes="justify-self-center md:justify-self-start"
			>Let's Chat</Button>
	</div>
	<div class="relative grid justify-center md:justify-normal">
		<img
			src={DesignHero}
			width="582"
			height="320"
			alt="laptop and mobile phone mockup of modern website"
			class="relative z-[1]" />
		<ImgBackground classes="absolute -z-0 -top-[90px] -right-[170px] w-[150%] h-[150%]" />
	</div>
</header>
<section id="benefitsRow" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px]">
	<BenefitCard lottiePath="/lottie/Lab_Bottle_primary.json" initialPlay>
    {#snippet heading()}
      <span>Research driven</span>
    {/snippet}
    {#snippet body()}
      <span>
        Using the best UX research and insights, we can turn your web dud in to a web stud.
      </span>
    {/snippet}
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Fingerprint_tertiary.json" delay={750} initialPlay>
    {#snippet heading()}
      <span>Completely custom</span>
    {/snippet}
    {#snippet body()}
      <span>
        Cookie-cutter designs are for cookie-cutter businesses. We believe in custom designs.
      </span>
    {/snippet}
	</BenefitCard>
	<BenefitCard lottiePath="/lottie/Magnet_secondary.json" delay={1500} initialPlay>
    {#snippet heading()}
      <span>Stay ahead of the curve</span>
    {/snippet}
    {#snippet body()}
      <span>
        We never stop taking inventory of the trends going on around the web, ensuring you get modern work.
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
			STALE DESIGN?
		</p>
		<h2 class="mb-6">No one likes a boring website.</h2>
		<p class="mb-8 lg:mb-4">
			Everyone knows your website is the face of your business, but did you know that 52% of people
			won’t return to a website with a ‘poor aesthetic’?
		</p>
		<p class="mb-8 lg:mb-4">
			Even worse than tha, 89% of consumers shop with a competitor after a poor user experience, and
			design is a crucial part of that experience.
		</p>
	</div>
	<!-- Right column -->
	<img
		src={MuseumImg}
		width="578"
		height="460"
		alt="Coworking business website design"
		class="max-h-[380px] lg:max-h-[480px] -mb-[80px] lg:ml-[80px] object-contain justify-self-center lg:justify-self-auto" />
</section>
<section id="initialStats" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[125px] mt-[40px]">
	<StatCard color="orange"
    stat="57%"
    subtitle="Wouldn’t recommend"
    body="57% of users report they wouldn’t recommend a business with a poorly designed mobile site." />
	<StatCard color="secondary"
    stat="89%"
    subtitle="Shop elsewhere"
    body="89% of users are less likely to return to a website after a bad user experience." />
	<StatCard color="tertiary"
    stat="200+%"
    subtitle="Increased conversions"
    body="A few small changes to your design, navigation, and UX can bring massive increases in sales." />
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
		<h2 class="mb-6">Enhance your website with a new design.</h2>
		<p>
			If the idea of a new design stresses you out, or you think “I don’t know what looks good.
			Hopefully some designer knows what they’re doing” - don’t fret, you’re in the right hands.
		</p>
		<p class="mt-4 mb-8">
			We don’t fly blindly and ‘hope for the best’ when it comes to web design. We stay up to date
			with the latest in UX research, and even then, we believe in a truly collaborative process
			with our clients.
		</p>
		<Button type="link" link="/" classes="px-[24px] py-[12px]" color="tertiary"
			>Boost Your Website Today</Button>
	</div>
</section>
<section id="portfolioGrid" class="grid grid-cols-1 md:grid-cols-3 gap-8 my-[125px]">
	<h2 class="col-start-1 md:col-span-3 text-center mb-5">Our recent work</h2>
</section>
<section id="FAQs" class="flex flex-col items-center mb-[125px]">
	<h2 class="text-center mb-5">How do we do it?</h2>
	<Accordion isOpen>
    {#snippet question()}
      <span>Why isn't my website ranking on Google?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
	<Accordion>
    {#snippet question()}
      <span>Why isn't my website ranking on Google?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
	<Accordion>
    {#snippet question()}
      <span>Why isn't my website ranking on Google?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
	<Accordion>
    {#snippet question()}
      <span>Wireframing & revisions</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
	<Accordion>
    {#snippet question()}
      <span>Design & Revisions</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
	<Accordion>
    {#snippet question()}
      <span>Delivery</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
</section>
<TestimonialRow testimonials={[testimonials['kyle'], testimonials['stacy']]} />

<section id="FAQs" class="flex flex-col items-center mt-[125px]">
	<h2 class="text-center mb-5">FAQs</h2>
	<Accordion>
    {#snippet question()}
      <span>How long does design take?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
	<Accordion>
    {#snippet question()}
      <span>How many revisions do you allow?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
	<Accordion>
    {#snippet question()}
      <span>Do you provide copywriting or content as well?</span>
    {/snippet}
    {#snippet answer()}
      <span>It depends</span>
    {/snippet}
	</Accordion>
</section>
