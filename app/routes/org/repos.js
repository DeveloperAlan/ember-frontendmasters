import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let orgId = Ember.get(this.modelFor('org'), 'login');
        return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=b6140a7eea94c4fe2727ab4a09d334da3fdc817c`).then((result) => {
            return result.map(repo => {
                repo.oldId = repo.id;
                repo.id = repo.name;
                return repo;
            })
        })
    }
});
