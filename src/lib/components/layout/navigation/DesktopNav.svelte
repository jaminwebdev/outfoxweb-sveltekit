<script lang="ts">
	import SiteLogo from '$lib/components/SiteLogo.svelte';
	import Dropdown from '$lib/components/layout/navigation/Dropdown.svelte';
	import ServicesMenu from '$lib/components/layout/navigation/menus/ServicesMenu.svelte';
	import ResourcesMenu from '$lib/components/layout/navigation/menus/ResourcesMenu.svelte';
	import AboutMenu from '$lib/components/layout/navigation/menus/AboutMenu.svelte';

	export let urlData: string;
	let prevUrl = '';
	let selectedMenuItem = 'none';

	const setSelectedMenuItem = (item: string) => {
		if (selectedMenuItem === item) {
			selectedMenuItem = 'none';
			return;
		}
		selectedMenuItem = item;
	};

	$: if (prevUrl !== urlData) {
		selectedMenuItem = 'none';
		prevUrl = urlData;
	}
</script>

<div class="py-[28px] grid grid-cols-[minmax(200px,_250px)_1fr]">
	<SiteLogo />
	<ul class="grid gap-12 grid-flow-col text-xl justify-self-end items-center">
		<li>
			<button
				type="button"
				class="p-5"
				on:click={() => setSelectedMenuItem('services')}
				aria-expanded={selectedMenuItem === 'services'}>Services</button>
			<Dropdown shown={selectedMenuItem === 'services'}>
				<ServicesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				on:click={() => setSelectedMenuItem('resources')}
				aria-expanded={selectedMenuItem === 'resources'}>Resources</button>
			<Dropdown shown={selectedMenuItem === 'resources'}>
				<ResourcesMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button
				type="button"
				class="p-5"
				on:click={() => setSelectedMenuItem('about')}
				aria-expanded={selectedMenuItem === 'about'}>About</button>
			<Dropdown shown={selectedMenuItem === 'about'}>
				<AboutMenu clickHandler={() => setSelectedMenuItem('none')} />
			</Dropdown>
		</li>
		<li>
			<button class="rounded-lg bg-secondary text-body-text py-[12px] px-[28px]">Let's Chat</button>
		</li>
	</ul>
</div>
