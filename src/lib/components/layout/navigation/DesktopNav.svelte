<script lang="ts">
	import SiteLogo from '$lib/components/SiteLogo.svelte';
	import Dropdown from '$lib/components/layout/navigation/Dropdown.svelte';
	import ServicesMenu from '$lib/components/layout/navigation/menus/ServicesMenu.svelte';
	import ResourcesMenu from '$lib/components/layout/navigation/menus/ResourcesMenu.svelte';
	import AboutMenu from '$lib/components/layout/navigation/menus/AboutMenu.svelte';
	import MultiStepDialog from '$lib/components/forms/multi-step-project/MultiStepDialog.svelte';

	interface Props {
		urlData: string;
	}

	let { urlData }: Props = $props();

	let prevUrl = $state('');
	let selectedMenuItem = $state('none');

	const setSelectedMenuItem = (item: string) => {
		if (selectedMenuItem === item) {
			selectedMenuItem = 'none';
			return;
		}
		selectedMenuItem = item;
	};

	$effect(() => {
		if (prevUrl !== urlData) {
			selectedMenuItem = 'none';
			prevUrl = urlData;
		}
	});
</script>

<div class="py-[28px] grid grid-cols-[minmax(200px,_250px)_1fr]">
	<SiteLogo />
	<ul class="grid gap-12 grid-flow-col text-xl justify-self-end items-center">
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('services')}
				aria-expanded={selectedMenuItem === 'services'}>Services</button>
			<Dropdown shown={selectedMenuItem === 'services'}>
				<ServicesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('resources')}
				aria-expanded={selectedMenuItem === 'resources'}>Resources</button>
			<Dropdown shown={selectedMenuItem === 'resources'}>
				<ResourcesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				onclick={() => setSelectedMenuItem('about')}
				aria-expanded={selectedMenuItem === 'about'}>About</button>
			<Dropdown shown={selectedMenuItem === 'about'}>
				<AboutMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<MultiStepDialog />
		</li>
	</ul>
</div>
