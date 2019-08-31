function toast(text) {
  const root = document.getElementsByClassName('wrapper')[0]
  console.log(root)
  // create Elem and set styles
  const toaster = document.createElement('div')
  toaster.innerText = 'hello'
  toaster.style.cssText = `
    position: absolute;
    bottom: 10px;
    left: 10px;
  `
  root.append(toaster)
  console.log(root.childNodes)
}


export default toast
