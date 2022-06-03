exports.getRoleName = (id) => {
  if (id == '6261fbf59774294239f47382') {
    return 'Personnel'
  } else if (id == '6261fbf59774294239f47384') {
    return 'DRH'
  } else {
    return 'RH'
  }
}
exports.getSub = (education) => {
  if (education === 'PRI_1ere année') {
    return 1000
  }
  if (education === 'PRI_2eme année') {
    return 2000
  }
  if (education === 'PRI_5eme année') {
    return 3000
  }
  if (education === 'PRI_4eme année') {
    return 4000
  }
  if (education === 'PRI_3eme année') {
    return 5000
  }
  if (education === 'PRI_6eme année') {
    return 6000
  }
  if (education === 'COLL_1ere année') {
    return 7000
  }
  if (education === 'COLL_2eme année') {
    return 8000
  }
  if (education === 'COLL_3eme année') {
    return 9000
  }
  if (education === 'SEC_1ere année') {
    return 10000
  }
  if (education === 'SEC_2eme année') {
    return 11000
  }
  if (education === 'SEC_3eme année') {
    return 12000
  }
  if (education === 'FAC_1ere année') {
    return 13000
  }
  if (education === 'FAC_2eme année') {
    return 14000
  }
  if (education === 'FAC_3eme année') {
    return 15000
  }
  if (education === 'FAC_4eme année') {
    return 16000
  }
  if (education === 'FAC_5eme année') {
    return 17000
  } else {
    return 0
  }
}
