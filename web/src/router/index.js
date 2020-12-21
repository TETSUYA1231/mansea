import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Contact from '../views/Contact.vue'
import Event from '../views/Event.vue'
import Work from '../views/Work.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: Article,
    props: true
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
