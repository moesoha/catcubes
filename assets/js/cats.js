const CLEAR_NL_CJK = /([\u2000-\u206f\u3000-\u312F\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af\uf900-\ufaff\uff00-\uffee])\s*/g
// This is used later to clear spaces caused by newline in markdown content between CJK characters.

let elToBeRendered = document.querySelector('[markdown]:not([mdrendered])')

while (elToBeRendered) {
  elToBeRendered.innerHTML = marked(elToBeRendered.innerHTML.replace(/\n */g, '\n')).replace(CLEAR_NL_CJK, '$1')
  // The RegEx above matches all line breaks with spaces after.
  // We remove spaces after line breaks since we're indenting our markdown content.
  elToBeRendered.setAttribute('mdrendered', true)
  elToBeRendered = document.querySelector('[markdown]:not([mdrendered])')
}