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
    case 'TEMPIO_DEI_LAMA':
      return require('../assets/monuments/tempio_dei_lama.jpeg')
    case 'CHENGDE':
      return require('../assets/monuments/chengde.jpg')
    case 'GULOU':
      return require('../assets/monuments/gulou.jpg')
    case 'TEMPIO_DI_CONFUCIO':
      return require('../assets/monuments/tempio_di_confucio.jpg')
    case 'MUSEO_NAZIONALE':
      return require('../assets/monuments/museo_nazionale.jpeg')
    case 'MUSEO_SCI_TECH':
      return require('../assets/monuments/museo_sci_tech.jpg')
    case 'STORIA':
      return require('../assets/monuments/storia.jpg')
    case 'URBANISTICA':
      return require('../assets/monuments/urbanistica.jpg')
    case 'CONCESSIONE':
      return require('../assets/monuments/concessione.jpg')
    case 'BUND':
      return require('../assets/monuments/bund.jpg')
  }
}
