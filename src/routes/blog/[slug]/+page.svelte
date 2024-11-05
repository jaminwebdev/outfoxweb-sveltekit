<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import { formatDate } from '$lib/utils/dates';
	import type { PageData } from './$types';
	// @ts-ignore
	import JaminHeadshot from '$lib/images/jamin_headshot.jpg';
	import { format } from 'date-fns';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { title, pubDate, tags, content, coverImage } = data;
</script>

<article class="singlePost">
	<Container classes="max-w-[900px]">
		<section class="mb-5" id="portfolioMeta">
			{#each tags as tag, index (tag)}
				<span class="text-primary">
					{tag.trimEnd()}{tags.length - 1 === index ? '' : ', '}
				</span>
			{/each}
			<h1 class="mb-4">{title}</h1>
			<div class="flex items-center gap-x-2">
				<div class="flex items-center gap-x-2">
					<img
						src={JaminHeadshot}
						alt="Headshot of Jamin Roberts"
						class="w-[30px] rounded-full object-cover" />
					<span>Jamin Roberts</span>
				</div>
				<span>- {format(pubDate, 'MMM do yyyy')}</span>
			</div>
		</section>
		<img
			src={coverImage}
			alt="Cover image for {title}"
			class="max-h-[500px] w-full rounded-xl object-cover object-center relative my-5"
			loading="eager" />
		<div
			class="
      mt-8
      [&_h2]:my-8
      [&_h3]:my-4
      [&_h4]:my-4
      [&_p]:my-6
      [&_li]:my-2
      [&_li]:list-disc
      [&_li]:list-inside
    ">
			<svelte:component this={content} />
		</div>
	</Container>
</article>

<style>
	.singlePost {
		display: grid;
		gap: 20px;
	}

	:global(.singlePost .shiki) {
		padding: 15px;
		border-radius: 20px;
	}
</style>
