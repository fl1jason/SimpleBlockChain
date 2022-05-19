const hashString = (str) => {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

const hashObject = (obj) =>{

    // convert the object to a JSON string
    let str = JSON.stringify(obj);
    return hashString(str);
}

module.exports = {
    hashString,
    hashObject
}