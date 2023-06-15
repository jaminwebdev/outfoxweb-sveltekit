<script lang="ts">
	import NavigationCard from '$lib/components/cards/NavigationCard.svelte';
</script>

<div class="grid grid-cols-4">
	<NavigationCard lottiePath="/lottie/Computer_primary.json" link="/web-development">
		<span slot="heading">Web Development</span>
		<span slot="body"> Decrease load times and increase customer conversions with a new site </span>
	</NavigationCard>
	<NavigationCard lottiePath="/lottie/Drawing_tertiary.json" bgColor="tertiary" link="web-design">
		<span slot="heading">Web Design</span>
		<span slot="body"> Turn your web dud in to a web stud with best UX research and insights </span>
	</NavigationCard>
	<NavigationCard
		lottiePath="/lottie/BarChart_secondary.json"
		bgColor="secondary"
		link="seo-services">
		<span slot="heading">SEO</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
	<NavigationCard lottiePath="/lottie/Document_orange.json" bgColor="orange" link="website-audit">
		<span slot="heading">Web Audit</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
</div>
