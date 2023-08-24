import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run start:prod',
		port: 4173
	},
	reporter: 'html',
	testDir: 'tests'
};

export default config;
