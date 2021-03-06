const app1 = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // console.log(this.$refs.userText.tagName);

      this.message = this.$refs.userText.value; // point to the DOM object which has this ref-key
    },
  },

  // Create phase
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },

  // Data change phase
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },

  // Instance unmounted phase
  beforeUnmount() {
    console.log('beforeUnmounted()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app1.mount('#app1');

setTimeout(() => {
  app1.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <div class="demo" :class="['demo', {active: boxASelected}]" @click="boxSelected('A')"></div>
    <div class="demo" :class="['demo', {active: boxBSelected}]" @click="boxSelected('B')"></div>
    <div class="demo" :class="['demo', {active: boxCSelected}]" @click="boxSelected('C')"></div>
  `,
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      this.boxASelected = box === 'A';
      this.boxBSelected = box === 'B';
      this.boxCSelected = box === 'C';
    },
  },
});

app2.mount('#app2');

// NOTE Vue's reactivity: which is one of its core features. Essentially viewed as one important thing. The data you define here is something Vue keeps track of. that it would take this data object here and merge all your properties in here into a global behind the scenes managed object, the same object where your methods are merged into by the way.
// NOTE IMPORTANT this keyword will point to the global object
// NOTE but when it comes to the data property, the important and key thing which Vue does is it turns your data object into a reactive data object by essentially wrapping your properties with a JavaScript feature called Proxies.
// NOTE using ref: Vue has ref feature that allow you to retrieve values from DOM elements. Because Vue detects such refs and stores them internally. It basically memorizes that you want access to the input element. And in the JavaScript code, you can then get this access.
// $ref is an object full of key value pairs where the keys are the ref identifiers you set up in your template.

// Explication of Proxy: The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

let data = { msg: 'Hello, ', updatedTime: 0 };
let dataTarget = { msg: 'From dataTarget: ', resetValue: false };

const objChanged = {
  // This will override the set property by this method
  set(target, key, value) {
    // Each time the proxy1's property changes, it will update the dataTarget's properties
    if (key === 'msg') msgUpdate(target, dataTarget, value);
    if (key === 'updatedTime') updatedTimeChanged(target, dataTarget, value);
  },
};

const updatedTimeChanged = (currentElement, targetElement, value) => {
  targetElement.resetValue = value > 10;
  currentElement.udpatedTime += value;
};

const msgUpdate = (currentElement, targetElement, value) => {
  currentElement.msg = value;
  targetElement.msg += value;
};

// Create a new proxy and add msgChanged handler
const proxy1 = new Proxy(data, objChanged);
proxy1.msg = 'new value';
proxy1.updatedTime = 1;

console.log(dataTarget);

proxy1.updatedTime = 12;

console.log(dataTarget);
