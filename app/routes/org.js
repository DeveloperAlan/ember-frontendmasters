import Route from '@ember/routing/route';
// import key from './config/key';

export default Route.extend({
    model(params) {
        $.get(`https://api.github.com/orgs/${params.id}?access_token=b6140a7eea94c4fe2727ab4a09d334da3fdc817c`).then((result) => {
            console.log(result);
        })
    }
});
