import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact';
import NewFriend from './components/NewFriend';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');

// NOTE Props is short for properties and you can think of props like custom HTML attributes.
// NOTE We should not use the same name in data property and props property
// NOTE props property should not be mutated, bc because Vue uses a concept which is called unidirectional data flow. But there is 2 way to change it:
// 1. We let the parent know that we'd like to change this.
// 2. We change it in child component, but not change in parent component

// NOTE .$emit(): That's a built in method, which you can call from inside a Vue component under this keyword. And this allows you to emit your own custom event to which you then can listen from inside the parent component. Now emit wants at least one argument, and that is the name of the custom event.

// NOTE Now emits, so to say, is the counterpart to props. In props you will define which props this component receives. In emits, you will define which custom events your component will eventually at some point emit.
