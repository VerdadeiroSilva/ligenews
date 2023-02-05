const GhostAdminAPI = require("@tryghost/admin-api");

const api = new GhostAdminAPI({
    url: process.argv[2],
    key: process.argv[3],
    version: "v5.0"
});

api.themes.upload({file:"../dist/ligenews-v0.0.1.zip"}).then(response => console.log({
    name:response.name,
    active:response.active
}))