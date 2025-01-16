import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import TemplateSyntax from '@/views/Basic/1.Template-syntax.vue';
import RefReactive from '@/views/Basic/2.Ref-Reactive.vue';
import Events from '@/views/Basic/3.Events.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout, 
    children: [
      
    ],
  },
  {
    path: '/template-syntax',
    name: 'TemplateSyntax',
    component: TemplateSyntax,
  },
  {
    path: '/ref-reactive',
    name: 'RefReactive',
    component: RefReactive,
  },
  { 
    path: '/events',
    name: 'Events',
    component: Events,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
