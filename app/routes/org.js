import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return $.get(`https://api.github.com/orgs/${params.id}?access_token=b6140a7eea94c4fe2727ab4a09d334da3fdc817c`).then((result) => {
            result.oldId = result.id;
            result.id = result.name;
            return result;
        })
    }
});
