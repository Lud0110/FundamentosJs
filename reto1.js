function wrapping(gifts) {
    const envultos = gifts.map(
      gift => {
        const tapa = '*'.repeat(2 + gift.length)
        return `${ tapa }*${gift}*${ tapa }`
      }
    )
    return envultos;
  }
  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)
  console.log(wrapped)
  wrapped.forEach(box => console.log(box));