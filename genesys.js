// Genesys Web Messaging snippet. Loaded on every page, so edit it here only.
(function (g, e, n, es, ys) {
  g['_genesysJs'] = e;
  g[e] = g[e] || function () {
    (g[e].q = g[e].q || []).push(arguments)
  };
  g[e].t = 1 * new Date();
  g[e].c = es;
  ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
})(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
  environment: 'prod',
  deploymentId: '749efe2f-d2d1-43cf-83b9-422914d8e8ca'
});
