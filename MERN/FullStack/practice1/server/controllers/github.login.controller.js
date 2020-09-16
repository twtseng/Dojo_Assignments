const config = require("../config/production.config.js");

const github_redirect_uri = request => {
    // This URI must match the Authorization callback URL on the gihub oauth app 
    return request.baseUrl+'/login/github_login';
}

module.exports.redirect = (req, result) => {
    const github_redirect_url = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_OAUTH_ID}&redirect_uri=${github_redirect_uri(req)}`;
    result.redirect(github_redirect_url);
};

module.exports.login = (req, result) => {
    const code = req.params.code;
    const data = {
        "client_id" : config.GITHUB_OAUTH_ID,
        "client_secret" : config.GITHUB_OAUTH_KEY,
        "code" : code,
        "redirect_uri" : github_redirect_uri(request),
    }
    # Get the access token
    response = requests.post("https://github.com/login/oauth/access_token", data=data, headers = { 'accept':'application/json'})
    jsonResp = response.json()

    # Get the login info for the user
    response = requests.get("https://api.github.com/user", headers = { 'accept':'application/json', 'Authorization' : f"token {jsonResp['access_token']}"})
    jsonResp = response.json()

    # Get the user with the oauthid of jsonResp.id (if exists, else add new user)
    if not User.objects.filter(oauth_id=jsonResp["id"]).exists():
        User.objects.create(first_name=f"{jsonResp['login']} (github)", 
                            last_name="",
                            email=f"{jsonResp['id']}@github.com", # This was a hack because github did not provide email
                            oauth_provider="github", 
                            oauth_id=jsonResp['id'])
    
    user = User.objects.get(oauth_id=jsonResp['id'], oauth_provider="github")
    request.session["logged_in_user"] = user.id
    return redirect("/")

    models.User.deleteOne({ _id: req.params.id })
    .then(obj => result.json(
        { status: "succeeded"
        , message: `deleteUser succeeded, id=${req.params.id}`
        , result: obj}))
    .catch(err => result.json({ status: "failed", message: err }));
};