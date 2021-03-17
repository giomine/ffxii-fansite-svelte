import App from './App.svelte';
import '../node_modules/materialize-css/dist/css/materialize.css'
import '../public/global.css'
// import js stuff too
import '../node_modules/materialize-css/dist/js/materialize'


// init material plugins
M.AutoInit();


const app = new App({
	target: document.body,
	props: {
	}
});

export default app;