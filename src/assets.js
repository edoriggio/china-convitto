export default function getImage(code) {
  switch (code) {
    case 'TIANANMEN':
      return require('../assets/monuments/tiananmen.jpeg')
    case 'TIANTAN':
      return require('../assets/monuments/tiantan.jpg')
    case 'CITTA_PROIBITA':
      return require('../assets/monuments/citta_proibita.jpg')
  }
}
