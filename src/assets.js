export default function getImage(code) {
  switch (code) {
    case 'TIANANMEN':
      return require('../assets/monuments/tiananmen.jpeg')
    case 'TIANTAN':
      return require('../assets/monuments/tiantan.jpg')
    case 'QIANMEN':
      return require('../assets/monuments/qianmen.jpeg')
    case 'CITTA_PROIBITA':
      return require('../assets/monuments/citta_proibita.jpg')
    case 'MUTIANYU':
      return require('../assets/monuments/mutianyu.jpg')
    case 'HOUHAI':
      return require('../assets/monuments/houhai.jpg')
    case 'ART_DISTRICT':
      return require('../assets/monuments/art_district.jpg')
    case 'PALAZZO_D_ESTATE':
      return require('../assets/monuments/palazzo_estate.jpg')
    case 'PARCO_OLIMPICO':
      return require('../assets/monuments/parco_olimpico.jpg')
    case 'NANLUOGUXIANG':
      return require('../assets/monuments/nanluoguxiang.jpg')
  }
}
