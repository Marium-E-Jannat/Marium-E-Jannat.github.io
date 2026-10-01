(function(){var P=[['index','About'],['research','Research'],['teaching','Teaching'],['experience','Activities'],['personal','Beyond']],c=document.body.dataset.p,e='marium.jannat'+'@'+'ubc.ca',S='https://scholar.google.ca/citations?user=7pdeQX4AAAAJ&hl=en',L='https://www.linkedin.com/in/marium-e-jannat/';
document.getElementById('hd').innerHTML='<div class="bar"><a class="brand" href="index.html">Marium-E- Jannat</a><nav aria-label="Main">'+P.map(function(p){return '<a href="'+p[0]+'.html"'+(p[0]===c?' aria-current="page"':'')+'>'+p[1]+'</a>'}).join('')+'</nav></div>';
var m=document.querySelector('main'),w=document.createElement('div');w.className='layout';m.before(w);w.appendChild(m);
var hs=[].slice.call(m.querySelectorAll('h2'));
var pn=hs.map(function(h,i){if(!h.id)h.id='s'+i;return '<a href="#'+h.id+'">'+h.textContent+'</a>'}).join('');
var a=document.createElement('aside');a.id='sd';a.setAttribute('aria-label','Profile');
a.innerHTML='<div class="who"><div class="frame"><img src="mariumj.png" alt="Portrait of Marium-E- Jannat"></div><div><h1>Marium-E- Jannat</h1><p class="role">PhD in Computer Science (HCI),<br> University of British Columbia<br> Okanagan Campus, Canada<br>Research Assistant, <a href="https://ovi.ok.ubc.ca/" target="_blank" rel="noopener noreferrer" style="color:var(--mute); text-decoration:underline;">OVI Lab</a><br>Email: marium.jannat@ubc.ca</p></div></div>'+
//'<div class="lk"><a href="mailto:'+e+'">'+e+'</a><a href="'+S+'">Google Scholar</a><a href="'+L+'">LinkedIn</a></div>'//
'<div class="lk">' +
    // Email Envelope Icon
    '<a href="mailto:'+e+'" target="_blank" rel="noopener noreferrer" title="Send an Email"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a>' +
    
    // Google Scholar Icon
    '<a href="'+S+'" target="_blank" rel="noopener noreferrer" title="View Google Scholar Profile"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.67 3.5c.34-.84.87-1.59 1.54-2.19L12 6.4l5.79 4.41c.67.6 1.2 1.35 1.54 2.19L24 9.5z"/></svg></a>' +
    
    // LinkedIn Icon
    '<a href="'+L+'" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg></a>' +
'</div>'
+(hs.length>1?'<div class="pn"><b>On this page</b>'+pn+'</div>':'');
w.insertBefore(a,m);
document.getElementById('ft').innerHTML='<span>© 2026 Marium-E- Jannat</span>';
//document.getElementById('ft').innerHTML='<span>© 2026 Marium-E- Jannat</span><span><a href="mailto:'+e+'">'+e+'</a></span>';///
document.querySelectorAll('.em').forEach(function(x){x.href='mailto:'+e;x.textContent='Email'});
if('IntersectionObserver' in window){var ls=a.querySelectorAll('.pn a');
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting)ls.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+x.target.id)})})},{rootMargin:'-70px 0px -50% 0px'});hs.forEach(function(h){io.observe(h)});}
})();
