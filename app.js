document.querySelectorAll('[data-name]').forEach(e => e.textContent = profile.name);
for (const key of ['role','introduction','about']) document.getElementById(key).textContent = profile[key];
const grid = document.getElementById('projects');
function render(filter='All') {
  grid.replaceChildren();
  profile.projects.filter(p => filter==='All'||p.category===filter).forEach(p => {
    const article=document.createElement('article');
    const label=document.createElement('small'); label.textContent=p.category;
    const title=document.createElement('h3'); title.textContent=p.title;
    const body=document.createElement('p'); body.textContent=p.text;
    article.append(label,title,body);
    if (p.url) { const a=document.createElement('a'); a.href=p.url; a.textContent='View project repository'; article.append(a); }
    grid.append(article);
  });
}
render();
profile.skills.forEach(s=>{const li=document.createElement('li');li.textContent=s;document.getElementById('skills').append(li);});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  render(b.dataset.filter);
}));
const contact=document.getElementById('contact-info');
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
 const a=document.createElement('a'); a.href='mailto:'+profile.email;a.textContent=profile.email;contact.append(a);
} else contact.textContent='Contact details have not been added yet.';

profile.experience.forEach(item=>{const article=document.createElement('article'); const h=document.createElement('h3');h.textContent=item.title;const date=document.createElement('small');date.textContent=item.dates;const p=document.createElement('p');p.textContent=item.text;article.append(date,h,p);document.getElementById('experience-list').append(article);});
const github=document.createElement('a');github.href=profile.github;github.textContent='GitHub / Soberam22';contact.append(document.createElement('br'),github);
