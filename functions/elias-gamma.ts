export const eliasGammaCodificacao = (text: String): Array<String> =>{
  const sequenceBits: string = text.charCodeAt(0).toString(2) + " ";

  for (let index = 0; index < sequenceBits.split('').length; index++) {
    const element = sequenceBits.split('')[index];
    
    // Numero para binário
    const binary: String = element + 0
  }

  return []
}

export const eliasGammaDecodificacao = (sequenceBits: Array<String>): String =>{
  let sequenciaDescodificada: string = ''

  for (let index = 0; index < sequenceBits.length; index++) {
    const element = sequenceBits[index];
    let count = 0;

    while(Number(element) < 1) {
      count++;
    }

    sequenciaDescodificada += String.fromCharCode(count);
  }

  return sequenciaDescodificada
}