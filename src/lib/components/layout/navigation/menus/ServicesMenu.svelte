<script lang="ts">
	import NavigationCard from '$lib/components/cards/NavigationCard.svelte';
</script>

<div class="grid grid-cols-4">
	<NavigationCard lottiePath="/lottie/BarChart_primary.json" link="/web-development">
		<span slot="heading">Web Development</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
	<NavigationCard lottiePath="/lottie/BarChart_primary.json">
		<span slot="heading">Web Development</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
	<NavigationCard lottiePath="/lottie/BarChart_primary.json">
		<span slot="heading">Web Development</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
	<NavigationCard lottiePath="/lottie/BarChart_primary.json">
		<span slot="heading">Web Development</span>
		<span slot="body">
			Using the best UX research and insights, we can turn your web dud in to a web stud.
		</span>
	</NavigationCard>
</div>
