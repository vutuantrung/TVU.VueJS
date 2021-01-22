import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

app.mount('#app');

// NOTE Provide and Inject: another feature Vue offers us, and that is, provide and inject, a pattern you can use to provide data in one place and inject it, which means use it, in another place.

// NOTEProvide and Inject: you can only inject what has been provided on a higher-up level. can provide from children -> parent, neighbor -> neighbor

// NOTE we should NOT use provide and inject to replace props and custom events, props and custome events should be default communication mechanism
