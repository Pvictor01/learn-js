function group() {
  console.log('Export nomeado nao-inline agrupado');
}

function a() {console.log('a')}
function b() {console.log('b')}
function c() {console.log('c')}
function d() {console.log('d')}

function exportPadrao() {
  console.log('Export default nao-inline')
}

export { group, a, b, c, d }
export default exportPadrao