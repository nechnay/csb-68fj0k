//handling the routes

const route = (event) => {
    event = event || window.Event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    "/404": "/templates/404/404.html",
    "/": "/templates/index.html",
    "/intro": "/templates/pages/intro/introduction.html",
    "/page1": "/templates/pages/understanding/page1.html",
    "/access": "/templates/pages/access/access.html",
    "/annual": "/templates/pages/annaul/annual.html",
    "/associated": "/templates/pages/associated/associated.html",
    "/intro": "/templates/pages/intro/introduction.html",
    "/barriers": "/templates/pages/barriers/barriers.html",
    "/causes": "/templates/pages/causes/causes.html",
    "/common": "/templates/pages/common/common.html",
    "/harm": "/templates/pages/harm/harm.html",
    "/inequal": "/templates/pages/inequalities/inequalities.html",
    "/legistration": "/templates/pages/legistration/legistration.html",
    "/support": "/templates/pages/support/support.html",
    "/treatment": "/templates/pages/treatment/treatment.html",
}

const handleLocation = async(event) => {
    const path = window.location.pathname || "/404";
    event.preventDefault();
    const html = await fetch(routes[path]).then((data) => data.text());
    document.getElementById("footer-btns").innerHTML = html;
}
window.onpopstate = handleLocation;
window.route = route;






