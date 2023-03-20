const checkNonRepeatString = () => {
  const mapCountObj = { s: 4, t: 2 }
  const str = 'strstrjkklss'
  for (let index = 0; index < str.length; index++) {
    const element = str[index]
    if (mapCountObj[element]) {
      mapCountObj[element] = mapCountObj[element] + 1
    } else {
      mapCountObj[element] = 1
    }
  }

  for (let index = 0; index < str.length; index++) {
    const element = str[index]
    if (mapCountObj[element] === 1) {
      console.log('[+] This character exists once: ', element)
      break
    }
  }
}

checkNonRepeatString()