import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  favourites: inject(),
  actions: {
    favouriteClicked(org) {
      this.get('favourites').favouriteItem(org);
    }
  },
  model() {
    return [{
      id: "emberjs"
    },
    {
      id: "ember-cli"
    },
    {
      id: "microsoft"
    },
    {
      id: "yahoo"
    },
    {
      id: "netflix"
    },
    {
      id: "facebook"
    }]
  }
});
