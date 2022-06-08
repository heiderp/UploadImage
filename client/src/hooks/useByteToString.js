const useByteToString = ({ bytes, delimitador = '.', espacio }) => {
  const indice = bytes.toString().indexOf(delimitador) + espacio
  const toSting = bytes.toString().substring(0, indice).concat('kb')
  return toSting
}

export default useByteToString
