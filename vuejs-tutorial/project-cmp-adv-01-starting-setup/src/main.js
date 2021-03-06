import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge';
import BaseCard from './components/UI/BaseCard';


const app = createApp(App);
// Keep this component bc it is used in multiple components
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');

// NOTE if we use app.component(...), we are registering those components as so called Global Components - Components you can use anywhere in your Vue app - i.e any template. And if you're registering them all globally, that in the end means Vue needs to load them all when the application is loaded initially.

// NOTE <the-header /> doesn't work, <TheHeader /> works

// NOTE <style scoped></style>: used to scope style in that file

// NOTE vue achieves this by giving your elements special attributes

// NOTE Vue has a special syntax for this exact scenario where you want to use your own component as a wrapper around dynamic content. 
// They allow us to receive HTML content which also may be using Vue features from outside of the component. 
// Basically just like props but where props are meant to be used for data, which a component needs, slots are meant to be used for HTML code for the template code a component needs.

// NOTE Check if exists slot before render bc it will not render the unnecessary comment

// NOTE shorhand for v-slot. Ex: v-slot:header -> #header

// NOTE Keep-alive allows you to tell Vue that components should not be removed and deleted entirely but that instead their state should be saved. That they should be cached behind the scenes.

// NOTE using teleport: Teleport, is a built in view component just like component and keep alive.

// IMPORTANT NOTE In Vue2, we ca not have multi top element but not in Vue3