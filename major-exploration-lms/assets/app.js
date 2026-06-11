(function(){
  const modules=[...document.querySelectorAll('.module')];
  const search=document.getElementById('moduleSearch');
  const filter=document.getElementById('moduleFilter');
  const empty=document.getElementById('emptyState');
  const checks=[...document.querySelectorAll('[data-progress]')];
  const count=document.getElementById('completedCount');
  const bar=document.getElementById('progressBar');
  const storageKey='major-exploration-lms-progress';

  function applyFilter(){
    const query=(search.value||'').trim().toLowerCase();
    const group=filter.value;
    let visible=0;
    modules.forEach((module)=>{
      const text=(module.textContent+' '+module.dataset.tags).toLowerCase();
      const groupMatch=group==='all'||module.dataset.tags.split(/\s+/).includes(group);
      const show=groupMatch&&(!query||text.includes(query));
      module.classList.toggle('hidden',!show);
      if(show) visible+=1;
    });
    empty.hidden=visible!==0;
  }

  function loadProgress(){
    let saved={};
    try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}');}catch(_error){saved={};}
    checks.forEach((box)=>{box.checked=Boolean(saved[box.dataset.progress]);});
    updateProgress();
  }

  function updateProgress(){
    const saved={};
    checks.forEach((box)=>{saved[box.dataset.progress]=box.checked;});
    localStorage.setItem(storageKey,JSON.stringify(saved));
    const done=checks.filter((box)=>box.checked).length;
    count.textContent=`${done} / ${checks.length} 완료`;
    bar.style.width=`${checks.length?done/checks.length*100:0}%`;
  }

  search.addEventListener('input',applyFilter);
  filter.addEventListener('change',applyFilter);
  checks.forEach((box)=>box.addEventListener('change',updateProgress));
  loadProgress();
}());
