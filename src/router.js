import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/benevoles',
      name: 'Benevoles',
      component: () =>
        import(/* webpackChunkName: "benevoles" */ "./views/Benevoles/index.vue")
    },
    {
      path: '/benevoles/nouveau',
      name: 'NouveauBenevole',
      component: () =>
        import(/* webpackChunkName: "nouveauBenevole" */ "./views/Benevoles/add.vue")
    }, 
    {
      path: '/benevoles/:id',
      name: 'ModifierBenevole',
      component: () =>
        import(/* webpackChunkName: "modifierBenevole" */ "./views/Benevoles/edit.vue")
    },
    {
      path: '/benevoles/liste',
      name: 'BlacklistBenevole',
      component: () =>
        import(/* webpackChunkName: "modifierBenevole" */ "./views/Benevoles/blacklist.vue")
    },
    {
      path: '/travaux',
      name: 'Travaux',
      component: () =>
        import(/* webpackChunkName: "travaux" */ "./views/Travaux/index.vue")
    }, 
    {
      path: '/travaux/:id',
      name: 'ModifierTravail',
      component: () =>
        import(/* webpackChunkName: "modifierTravail" */ "./views/Travaux/edit.vue")
    },
    {
      path: '/travaux/event',
      name: 'AjouterEvenement',
      component: () =>
        import(/* webpackChunkName: "AjouterEvenement" */ "./views/Travaux/event.vue")
    },
    {
      path: '/travaux/temps',
      name: 'AjouterFeuilleTemps',
      component: () =>
        import(/* webpackChunkName: "AjouterFeuilleTemps" */ "./views/Travaux/feuilletps.vue")
    }
  ]
});

