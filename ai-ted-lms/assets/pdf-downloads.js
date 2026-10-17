(()=>{
'use strict';
const W=595.28,H=841.89,CW=1240,CH=1754,M=92,LH=38,enc=s=>new TextEncoder().encode(s);
// Wrap long Korean strings and URLs as well as ordinary words.
function wrap(ctx,text,max){const out=[];let line='';for(const c of text){if(ctx.measureText(line+c).width>max&&line){out.push(line);line='';}line+=c;}if(line)out.push(line);return out;}
function parse(md){const blocks=[];let headers=null;for(const raw of md.split(/\r?\n/)){const v=raw.trim();if(v.startsWith('|')){const cells=v.replace(/^\||\|$/g,'').split('|').map(x=>x.trim());if(cells.every(x=>/^:?-+:?$/.test(x)))continue;if(!headers){headers=cells;continue;}blocks.push({t:'heading',v:cells[0]});cells.slice(1).forEach((x,i)=>blocks.push({t:'body',v:headers[i+1]+': '+x}));continue;}headers=null;if(!v)blocks.push({t:'space',v:''});else if(v.startsWith('# '))blocks.push({t:'title',v:v.slice(2)});else if(v.startsWith('## '))blocks.push({t:'heading',v:v.slice(3)});else blocks.push({t:'body',v:v.replace(/^[-*]\s+/,'• ')});}return blocks;}
function page(){const c=document.createElement('canvas');c.width=CW;c.height=CH;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,CW,CH);x.fillStyle='#14746f';x.fillRect(0,0,CW,22);return{c,x,y:M};}
function render(md){const pages=[];let p=page();pages.push(p);for(const b of parse(md)){if(b.t==='space'){p.y+=18;continue;}const size=b.t==='title'?42:b.t==='heading'?30:26;const font=(b.t==='body'?'':'bold ')+size+"px 'Noto Sans KR','Malgun Gothic',sans-serif";p.x.font=font;const lines=wrap(p.x,b.v,CW-M*2);p.y+=b.t==='body'?6:20;for(const line of lines){if(p.y+size>CH-130){p=page();pages.push(p);}p.x.font=font;p.x.fillStyle=b.t==='title'?'#0b4f4b':'#172026';p.x.textBaseline='top';p.x.fillText(line,M,p.y);p.y+=Math.max(LH,size*1.35);}p.y+=10;}pages.forEach((p,i)=>{p.x.font="22px 'Noto Sans KR',sans-serif";p.x.fillStyle='#5b6570';p.x.fillText('AI TED · '+(i+1)+' / '+pages.length,M,CH-65);});return pages.map(p=>p.c);}
function b64bytes(url){const bin=atob(url.split(',')[1]),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return u}function pdf(jpegs){const chunks=[],ofs=[];let len=0;const add=p=>{const b=typeof p==='string'?enc(p):p;chunks.push(b);len+=b.length},obj=(n,parts)=>{ofs[n]=len;add(n+' 0 obj\n');parts.forEach(add);add('\nendobj\n')};add('%PDF-1.4\n');const pages=jpegs.map((_,i)=>3+i*3);obj(1,['<< /Type /Catalog /Pages 2 0 R >>']);obj(2,[`<< /Type /Pages /Kids [${pages.map(n=>n+' 0 R').join(' ')}] /Count ${jpegs.length} >>`]);jpegs.forEach((jpg,i)=>{const po=3+i*3,io=po+1,co=po+2,nm='Im'+(i+1),ct=`q\n${W} 0 0 ${H} 0 0 cm\n/${nm} Do\nQ`;obj(po,[`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /${nm} ${io} 0 R >> >> /Contents ${co} 0 R >>`]);ofs[io]=len;add(`${io} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${CW} /Height ${CH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`);add(jpg);add('\nendstream\nendobj\n');obj(co,[`<< /Length ${ct.length} >>\nstream\n${ct}\nendstream`])});const xref=len,max=2+jpegs.length*3;add(`xref\n0 ${max+1}\n0000000000 65535 f \n`);for(let i=1;i<=max;i++)add(String(ofs[i]).padStart(10,'0')+' 00000 n \n');add(`trailer\n<< /Size ${max+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);return new Blob(chunks,{type:'application/pdf'})}
async function make(link){
 const r=await fetch(link.href,{cache:'no-store'});if(!r.ok)throw Error('자료를 불러오지 못했습니다.');
 const md=await r.text();if(document.fonts){await document.fonts.load('26px "Noto Sans KR"');await document.fonts.ready;}
 const jpgs=render(md).map(c=>b64bytes(c.toDataURL('image/jpeg',.95))),blob=pdf(jpgs),u=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=u;a.download=(new URL(link.href).pathname.split('/').pop()||'material.md').replace(/\.md$/i,'.pdf');document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),30000);
}
document.addEventListener('click',async e=>{
 const l=e.target.closest('a[href$=".md"]');if(!l||!(l.classList.contains('download-link')||l.classList.contains('resource-row')||l.id==='cw-material'))return;
 if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();if(l.getAttribute('aria-busy')==='true')return;
 const status=document.getElementById('cw-status');l.setAttribute('aria-busy','true');if(status)status.textContent='PDF를 생성하고 있습니다…';
 try{await make(l);if(status)status.textContent='PDF 다운로드를 요청했습니다. 다운로드 목록을 확인하세요.';}
 catch(err){if(status){status.textContent='PDF 변환에 실패했습니다. ';const a=document.createElement('a');a.href=l.href;a.download='';a.textContent='Markdown 원본 다운로드';status.append(a);}else{alert('PDF 변환에 실패했습니다. 잠시 후 다시 시도하세요.');}}
 finally{l.removeAttribute('aria-busy');}
});
})();
